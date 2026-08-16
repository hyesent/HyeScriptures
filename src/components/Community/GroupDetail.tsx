// src/components/Community/GroupDetail.tsx
import React, { useState, useEffect } from 'react'
import { 
  getGroupPosts, createGroupPost, joinGroup, leaveGroup, 
  deleteGroupPost, getUserRoleInGroup, addMemberToGroup 
} from '../../lib/community'
import { sendFriendRequest, getFriendshipStatus, getFriends } from '../../lib/friends'
import type { CommunityGroup, GroupPost } from '../../lib/community'
import type { Friend } from '../../lib/friends'
import { useAuth } from '../../hooks/useAuth'
import { 
  ChevronLeft, Send, LogIn, LogOut, Users, MessageSquare, 
  UserPlus, Trash2, UserCheck, Clock, Plus, X
} from 'lucide-react'
import styles from './GroupDetail.module.css'

interface GroupDetailProps {
  group: CommunityGroup
  onBack: () => void
}

type FriendStatus = 'none' | 'pending_sent' | 'pending_received' | 'accepted'

export const GroupDetail: React.FC<GroupDetailProps> = ({ group, onBack }) => {
  const { user } = useAuth()
  const [posts, setPosts] = useState<GroupPost[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [isMember, setIsMember] = useState(group.is_member || false)
  const [sending, setSending] = useState(false)
  const [userRole, setUserRole] = useState<'admin' | 'moderator' | 'member' | null>(null)
  const [friendStatuses, setFriendStatuses] = useState<Record<string, FriendStatus>>({})
  const [showAddMember, setShowAddMember] = useState(false)
  const [friends, setFriends] = useState<Friend[]>([])
  const [addedMembers, setAddedMembers] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (isMember) {
      loadPosts()
      loadUserRole()
    }
  }, [group.id, isMember])

  const loadPosts = async () => {
    const data = await getGroupPosts(group.id)
    setPosts(data)
    setLoading(false)

    // Check friendship status for each post author
    const statuses: Record<string, FriendStatus> = {}
    for (const post of data) {
      if (post.user_id !== user?.id) {
        statuses[post.user_id] = await getFriendshipStatus(post.user_id)
      }
    }
    setFriendStatuses(statuses)
  }

  const loadUserRole = async () => {
    const role = await getUserRoleInGroup(group.id)
    setUserRole(role)
  }

  const handleSend = async () => {
    if (!input.trim() || sending) return
    setSending(true)
    const post = await createGroupPost(group.id, input.trim())
    if (post) {
      setPosts(prev => [post, ...prev])
      setInput('')
    }
    setSending(false)
  }

  const handleJoin = async () => {
    const success = await joinGroup(group.id)
    if (success) setIsMember(true)
  }

  const handleLeave = async () => {
    const success = await leaveGroup(group.id)
    if (success) setIsMember(false)
  }

  const handleAddFriend = async (userId: string) => {
    const success = await sendFriendRequest(userId)
    if (success) {
      setFriendStatuses(prev => ({ ...prev, [userId]: 'pending_sent' }))
    }
  }

  const handleDeletePost = async (postId: string) => {
    if (!window.confirm('Delete this post?')) return
    const success = await deleteGroupPost(postId)
    if (success) {
      setPosts(prev => prev.filter(p => p.id !== postId))
    }
  }

  const handleOpenAddMember = async () => {
    const friendsList = await getFriends()
    setFriends(friendsList)
    setShowAddMember(true)
  }

  const handleAddMember = async (friend: Friend) => {
    const success = await addMemberToGroup(group.id, friend.user_id, friend.display_name)
    if (success) {
      setAddedMembers(prev => ({ ...prev, [friend.user_id]: true }))
    }
  }

  const canDeletePost = (postUserId: string): boolean => {
    if (postUserId === user?.id) return true
    return userRole === 'admin'
  }

  const getFriendButton = (postUserId: string) => {
    const status = friendStatuses[postUserId] || 'none'
    if (status === 'accepted') {
      return <span className={styles.friendAccepted}><UserCheck size={12} /> Friends</span>
    }
    if (status === 'pending_sent') {
      return <span className={styles.friendPending}><Clock size={12} /> Request Sent</span>
    }
    if (status === 'pending_received') {
      return <span className={styles.friendPending}><Clock size={12} /> Accept Request</span>
    }
    return (
      <button className={styles.addFriendBtn} onClick={() => handleAddFriend(postUserId)}>
        <UserPlus size={12} /> Add Friend
      </button>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onBack}><ChevronLeft size={20} /></button>
        <div>
          <h2>{group.name}</h2>
          <p className={styles.subtitle}>{group.member_count} members</p>
        </div>
        <div className={styles.headerActions}>
          {user && isMember && (
            <button className={styles.addMemberBtn} onClick={handleOpenAddMember}>
              <Plus size={14} /> Add
            </button>
          )}
          {user && (
            <button className={styles.joinBtn} onClick={isMember ? handleLeave : handleJoin}>
              {isMember ? <><LogOut size={14} /> Leave</> : <><LogIn size={14} /> Join</>}
            </button>
          )}
        </div>
      </div>

      {!isMember ? (
        <div className={styles.notMember}>
          <Users size={48} />
          <h3>Join this group to see posts</h3>
          <button className={styles.joinBigBtn} onClick={handleJoin}>Join Group</button>
        </div>
      ) : (
        <>
          <div className={styles.feed}>
            {loading ? (
              <div className={styles.loading}>Loading posts...</div>
            ) : posts.length === 0 ? (
              <div className={styles.empty}>
                <MessageSquare size={48} />
                <h3>No posts yet</h3>
                <p>Be the first to share something</p>
              </div>
            ) : (
              posts.map(post => (
                <div key={post.id} className={styles.post}>
                  <div className={styles.postHeader}>
                    <div className={styles.postUserInfo}>
                      <span className={styles.postUser}>{post.user_display_name || 'Believer'}</span>
                      <span className={styles.postTime}>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className={styles.postActions}>
                      {post.user_id !== user?.id && getFriendButton(post.user_id)}
                      {canDeletePost(post.user_id) && (
                        <button 
                          className={styles.deleteBtn} 
                          onClick={() => handleDeletePost(post.id)}
                          title="Delete post"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                  <p className={styles.postContent}>{post.content}</p>
                  {post.verse_reference && (
                    <span className={styles.verseRef}>📖 {post.verse_reference}</span>
                  )}
                </div>
              ))
            )}
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Share something with the group..."
              className={styles.input}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button className={styles.sendBtn} onClick={handleSend} disabled={!input.trim() || sending}>
              <Send size={18} />
            </button>
          </div>
        </>
      )}

      {/* Add Member Modal */}
      {showAddMember && (
        <div className={styles.modalOverlay} onClick={() => setShowAddMember(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Add Members</h3>
              <button className={styles.modalClose} onClick={() => setShowAddMember(false)}><X size={20} /></button>
            </div>
            <div className={styles.modalBody}>
              {friends.length === 0 ? (
                <div className={styles.modalEmpty}>
                  <Users size={36} />
                  <p>No friends to add</p>
                  <span>Add friends first from the Friends tab</span>
                </div>
              ) : (
                friends.map(friend => (
                  <div key={friend.user_id} className={styles.friendRow}>
                    <div className={styles.friendAvatar}>👤</div>
                    <div className={styles.friendInfo}>
                      <span className={styles.friendName}>{friend.display_name}</span>
                      <span className={styles.friendEmail}>{friend.email}</span>
                    </div>
                    {addedMembers[friend.user_id] ? (
                      <span className={styles.addedBadge}><UserCheck size={14} /> Added</span>
                    ) : (
                      <button 
                        className={styles.addBtn}
                        onClick={() => handleAddMember(friend)}
                      >
                        <Plus size={14} /> Add
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
