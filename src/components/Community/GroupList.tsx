// src/components/Community/GroupsList.tsx
import React, { useState, useEffect } from 'react'
import { getGroups } from '../../lib/community'
import type { CommunityGroup } from '../../lib/community'
import { useSubscription } from '../../hooks/useSubscription'
import { CreateGroup } from './CreateGroup'
import { Users, Plus, Lock, Globe, ChevronRight, Crown } from 'lucide-react'
import styles from './GroupsList.module.css'

interface GroupsListProps {
  onSelectGroup: (group: CommunityGroup) => void
}

export const GroupsList: React.FC<GroupsListProps> = ({ onSelectGroup }) => {
  const [groups, setGroups] = useState<CommunityGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const { tier } = useSubscription()

  useEffect(() => {
    loadGroups()
  }, [])

  const loadGroups = async () => {
    setLoading(true)
    const data = await getGroups()
    setGroups(data)
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Groups</h2>
          <p className={styles.subtitle}>{groups.length} groups</p>
        </div>
        {tier === 'elder' && (
          <button className={styles.createBtn} onClick={() => setShowCreate(true)}>
            <Plus size={16} /> Create Group
          </button>
        )}
      </div>

      {loading ? (
        <div className={styles.loading}>Loading groups...</div>
      ) : groups.length === 0 ? (
        <div className={styles.empty}>
          <Users size={48} />
          <h3>No groups yet</h3>
          <p>{tier === 'elder' ? 'Create the first group' : 'Groups will appear here'}</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {groups.map(group => (
            <div key={group.id} className={styles.card} onClick={() => onSelectGroup(group)}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  {group.is_private ? <Lock size={18} /> : <Globe size={18} />}
                </div>
                <div className={styles.cardInfo}>
                  <h3>{group.name}</h3>
                  <p>{group.description || 'No description'}</p>
                </div>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.memberCount}>
                  <Users size={14} /> {group.member_count} {group.member_count === 1 ? 'member' : 'members'}
                </span>
                <span className={styles.creatorName}>by {group.creator_name || 'Unknown'}</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      )}

      {showCreate && (
        <CreateGroup
          onClose={() => setShowCreate(false)}
          onSuccess={() => { setShowCreate(false); loadGroups() }}
        />
      )}
    </div>
  )
}
