// src/components/Friends/FriendsList.tsx
import React, { useState, useEffect, useCallback } from 'react'
import { getFriends, removeFriend } from '../../lib/friends'
import type { Friend } from '../../lib/friends'
import { Users, Trash2, UserX } from 'lucide-react'
import styles from './FriendsList.module.css'

export const FriendsList: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([])
  const [loading, setLoading] = useState(true)

  const loadFriends = useCallback(async () => {
    setLoading(true)
    const data = await getFriends()
    setFriends(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadFriends()
  }, [loadFriends])

  const handleRemove = async (friendshipId: string) => {
    if (!window.confirm('Remove this friend?')) return
    const success = await removeFriend(friendshipId)
    if (success) {
      setFriends(prev => prev.filter(f => f.friendship_id !== friendshipId))
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My Friends</h3>
      <p className={styles.subtitle}>
        {friends.length} {friends.length === 1 ? 'friend' : 'friends'}
      </p>

      {loading ? (
        <div className={styles.loading}>Loading friends...</div>
      ) : friends.length === 0 ? (
        <div className={styles.empty}>
          <Users size={40} />
          <p>No friends yet</p>
          <span>Search for people to connect with</span>
        </div>
      ) : (
        <div className={styles.list}>
          {friends.map(friend => (
            <div key={friend.friendship_id} className={styles.card}>
              <div className={styles.avatar}>
                {friend.avatar_url || '👤'}
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{friend.display_name}</span>
                <span className={styles.email}>{friend.email}</span>
              </div>
              <button
                className={styles.removeBtn}
                onClick={() => handleRemove(friend.friendship_id)}
                title="Remove friend"
              >
                <UserX size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
