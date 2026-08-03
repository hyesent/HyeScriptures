// src/components/Community/GroupDetail.tsx
import React, { useState, useEffect } from 'react'
import { getGroupPosts, createGroupPost, joinGroup, leaveGroup } from '../../lib/community'
import type { CommunityGroup, GroupPost } from '../../lib/community'
import { useAuth } from '../../hooks/useAuth'
import { ChevronLeft, Send, LogIn, LogOut, Users, MessageSquare } from 'lucide-react'
import styles from './GroupDetail.module.css'

interface GroupDetailProps {
  group: CommunityGroup
  onBack: () => void
}

export const GroupDetail: React.FC<GroupDetailProps> = ({ group, onBack }) => {
  const { user } = useAuth()
  const [posts, setPosts] = useState<GroupPost[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [isMember, setIsMember] = useState(group.is_member || false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [group.id])

  const loadPosts = async () => {
    const data = await getGroupPosts(group.id)
    setPosts(data)
    setLoading(false)
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onBack}><ChevronLeft size={20} /></button>
        <div>
          <h2>{group.name}</h2>
          <p className={styles.subtitle}>{group.member_count} members</p>
        </div>
        {user && (
          <button className={styles.joinBtn} onClick={isMember ? handleLeave : handleJoin}>
            {isMember ? <><LogOut size={14} /> Leave</> : <><LogIn size={14} /> Join</>}
          </button>
        )}
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
                    <span className={styles.postUser}>{post.user_display_name || 'Believer'}</span>
                    <span className={styles.postTime}>{new Date(post.created_at).toLocaleDateString()}</span>
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
    </div>
  )
}
