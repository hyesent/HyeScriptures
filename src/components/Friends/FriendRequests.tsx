// src/components/Friends/FriendRequests.tsx
import React, { useState, useEffect, useCallback } from 'react'
import { getPendingRequests, acceptFriendRequest, declineFriendRequest } from '../../lib/friends'
import type { FriendRequest } from '../../lib/friends'
import { UserPlus, Check, X, Clock } from 'lucide-react'
import styles from './FriendRequests.module.css'

export const FriendRequests: React.FC = () => {
  const [requests, setRequests] = useState<FriendRequest[]>([])
  const [loading, setLoading] = useState(true)

  const loadRequests = useCallback(async () => {
    setLoading(true)
    const data = await getPendingRequests()
    setRequests(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadRequests()
  }, [loadRequests])

  const handleAccept = async (id: string) => {
    const success = await acceptFriendRequest(id)
    if (success) {
      setRequests(prev => prev.filter(r => r.id !== id))
    }
  }

  const handleDecline = async (id: string) => {
    const success = await declineFriendRequest(id)
    if (success) {
      setRequests(prev => prev.filter(r => r.id !== id))
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Friend Requests</h3>
      <p className={styles.subtitle}>
        {requests.length} pending {requests.length === 1 ? 'request' : 'requests'}
      </p>

      {loading ? (
        <div className={styles.loading}>Loading requests...</div>
      ) : requests.length === 0 ? (
        <div className={styles.empty}>
          <UserPlus size={40} />
          <p>No pending requests</p>
          <span>When someone adds you, they'll appear here</span>
        </div>
      ) : (
        <div className={styles.list}>
          {requests.map(request => (
            <div key={request.id} className={styles.card}>
              <div className={styles.avatar}>👤</div>
              <div className={styles.info}>
                <span className={styles.name}>
                  {request.requester_name || 'Unknown'}
                </span>
                <span className={styles.time}>
                  <Clock size={12} />
                  {new Date(request.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className={styles.actions}>
                <button
                  className={styles.acceptBtn}
                  onClick={() => handleAccept(request.id)}
                  title="Accept"
                >
                  <Check size={16} />
                </button>
                <button
                  className={styles.declineBtn}
                  onClick={() => handleDecline(request.id)}
                  title="Decline"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
