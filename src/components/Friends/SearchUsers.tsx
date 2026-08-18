// src/components/Friends/SearchUsers.tsx
import React, { useState, useRef } from 'react'
import { searchUsers, sendFriendRequest, getFriendshipStatus } from '../../lib/friends'
import { Search, UserPlus, Check, Clock, X } from 'lucide-react'
import styles from './SearchUsers.module.css'

interface SearchResult {
  id: string
  email: string
  display_name: string
  avatar_url: string | null
}

type FriendStatus = 'none' | 'pending_sent' | 'pending_received' | 'accepted'

export const SearchUsers: React.FC = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState('')
  const [statusMap, setStatusMap] = useState<Record<string, FriendStatus>>({})
  const searchTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleSearch = (value: string) => {
    setQuery(value)

    if (searchTimeout.current) clearTimeout(searchTimeout.current)

    if (value.trim().length < 3) {
      setResults([])
      setStatusMap({})
      return
    }

    searchTimeout.current = setTimeout(async () => {
      setSearching(true)
      setError('')
      const users = await searchUsers(value.trim())
      setResults(users)

      // Check friendship status for each
      const statuses: Record<string, FriendStatus> = {}
      for (const user of users) {
        statuses[user.id] = await getFriendshipStatus(user.id)
      }
      setStatusMap(statuses)
      setSearching(false)
    }, 400)
  }

  const handleSendRequest = async (userId: string) => {
    const success = await sendFriendRequest(userId)
    if (success) {
      setStatusMap(prev => ({ ...prev, [userId]: 'pending_sent' }))
      setError('')
    } else {
      // Check if they're already friends or request pending
      const status = await getFriendshipStatus(userId)
      setStatusMap(prev => ({ ...prev, [userId]: status }))
      setError('Already friends or request already sent.')
    }
  }

  const handleAcceptRequest = async (userId: string) => {
    const { acceptFriendRequest } = await import('../../lib/friends')
    // Find the friendship ID for this user
    const { supabase } = await import('../../lib/supabase')
    const { data: userData } = await supabase.auth.getUser()
    const currentUserId = userData?.user?.id

    if (!currentUserId) return

    const { data: friendship } = await supabase
      .from('friendships')
      .select('id')
      .eq('requester_id', userId)
      .eq('addressee_id', currentUserId)
      .eq('status', 'pending')
      .maybeSingle()

    if (friendship) {
      const success = await acceptFriendRequest(friendship.id)
      if (success) {
        setStatusMap(prev => ({ ...prev, [userId]: 'accepted' }))
      }
    }
  }

  const getStatusBadge = (userId: string, status: FriendStatus) => {
    switch (status) {
      case 'accepted':
        return <span className={styles.statusAccepted}><Check size={12} /> Friends</span>
      case 'pending_sent':
        return <span className={styles.statusPending}><Clock size={12} /> Request Sent</span>
      case 'pending_received':
        return (
          <button className={styles.acceptBtn} onClick={() => handleAcceptRequest(userId)}>
            <Check size={12} /> Accept
          </button>
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Find Friends</h3>
      <p className={styles.subtitle}>Search by name or email to connect</p>

      <div className={styles.searchBox}>
        <Search size={18} className={styles.searchIcon} />
        <input
          type="text"
          value={query}
          onChange={e => handleSearch(e.target.value)}
          placeholder="Search by name or email..."
          className={styles.searchInput}
        />
        {query && (
          <button className={styles.clearBtn} onClick={() => { setQuery(''); setResults([]); setStatusMap({}) }}>
            <X size={16} />
          </button>
        )}
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {searching ? (
        <div className={styles.loading}>Searching...</div>
      ) : results.length > 0 ? (
        <div className={styles.results}>
          {results.map(user => {
            const status = statusMap[user.id] || 'none'
            return (
              <div key={user.id} className={styles.userCard}>
                <div className={styles.avatar}>
                  {user.avatar_url || '👤'}
                </div>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{user.display_name}</span>
                  <span className={styles.userEmail}>{user.email}</span>
                </div>
                {status === 'none' ? (
                  <button
                    className={styles.addBtn}
                    onClick={() => handleSendRequest(user.id)}
                  >
                    <UserPlus size={14} /> Add
                  </button>
                ) : (
                  getStatusBadge(user.id, status)
                )}
              </div>
            )
          })}
        </div>
      ) : query.length >= 3 && !searching ? (
        <div className={styles.noResults}>
          <Search size={32} />
          <p>No users found</p>
          <span>Try a different name or email</span>
        </div>
      ) : null}
    </div>
  )
}
