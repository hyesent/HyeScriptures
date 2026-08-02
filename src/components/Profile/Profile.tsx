// src/components/Profile/Profile.tsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useStreak } from '../../hooks/useStreak'
import { useSubscription } from '../../hooks/useSubscription'
import { 
  User, Mail, Bookmark, PenLine, BookOpen, Calendar, Brain,
  Award, Heart, LogOut, ChevronRight, Edit2, X, Check,
  Palette, CreditCard, Crown, Sparkles, Smartphone
} from 'lucide-react'
import styles from './Profile.module.css'

const avatars = [
  '🦁', '🐦', '🐟', '🐑', '🕊️', '🌿', '⛰️', '🌟', '🌅', '🌈',
  '📖', '🔥', '💧', '🌾', '🕯️', '✨', '🌙', '☀️', '🌺', '🍇'
]

interface ProfileProps {
  onNavigateToTheme?: () => void
  onNavigateToUpgrade?: () => void
  onNavigateToAppIcon?: () => void
  onNavigateToBookmarks?: () => void
  onNavigateToNotes?: () => void
  onNavigateToJournal?: () => void
  onNavigateToPlans?: () => void
  onNavigateToPrayer?: () => void
  onNavigateToMemory?: () => void
  onNavigateToBadges?: () => void
}

export const Profile: React.FC<ProfileProps> = ({ 
  onNavigateToTheme, onNavigateToUpgrade, onNavigateToAppIcon,
  onNavigateToBookmarks, onNavigateToNotes, onNavigateToJournal,
  onNavigateToPlans, onNavigateToPrayer, onNavigateToMemory, onNavigateToBadges,
}) => {
  const { user, signOut, updateProfile } = useAuth()
  const { getStreak } = useStreak()
  const { tier } = useSubscription()
  const [editing, setEditing] = useState(false)
  const [displayName, setDisplayName] = useState(user?.display_name || '')
  const [selectedAvatar, setSelectedAvatar] = useState('📖')
  const [bio, setBio] = useState(user?.bio || '')
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)

  useEffect(() => {
    const data = getStreak()
    setStreak(data.currentStreak)
    setBestStreak(data.bestStreak)
  }, [])

  const currentAvatar = selectedAvatar

  if (!user) {
    return (
      <div className={styles.container}>
        <p className={styles.notLoggedIn}>Please sign in to view your profile</p>
      </div>
    )
  }

  const handleSave = async () => {
    await updateProfile({ display_name: displayName, avatar_url: selectedAvatar, bio: bio })
    setEditing(false)
  }

  const tierIcon = tier === 'elder' ? Crown : tier === 'pro' ? Sparkles : CreditCard
  const tierLabel = tier === 'elder' ? 'Elder' : tier === 'pro' ? 'Pro' : 'Free'
  const TierIconComponent = tierIcon

  const menuItems = [
    { icon: Bookmark, label: 'Bookmarks', onClick: onNavigateToBookmarks },
    { icon: PenLine, label: 'Notes', onClick: onNavigateToNotes },
    { icon: BookOpen, label: 'Journal', onClick: onNavigateToJournal },
    { icon: Calendar, label: 'Reading Plans', onClick: onNavigateToPlans },
    { icon: Heart, label: 'Prayer Journal', onClick: onNavigateToPrayer },
    { icon: Brain, label: 'Memory Verses', onClick: onNavigateToMemory },
    { icon: Award, label: 'Achievements', onClick: onNavigateToBadges },
    ...(tier === 'elder' ? [
      { icon: Smartphone, label: 'App Icon', onClick: onNavigateToAppIcon },
      { icon: Crown, label: 'Elder Subscription', onClick: onNavigateToUpgrade },
    ] : []),
    ...(tier === 'pro' ? [
      { icon: Crown, label: 'Upgrade to Elder', onClick: onNavigateToUpgrade },
    ] : []),
    ...(tier === 'free' ? [
      { icon: Sparkles, label: 'Upgrade Plan', onClick: onNavigateToUpgrade },
    ] : []),
  ]

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <div className={styles.avatarContainer}>
          <span className={styles.avatar}>{currentAvatar}</span>
          {!editing && <button className={styles.editAvatarBtn} onClick={() => setEditing(true)} title="Edit profile"><Edit2 size={14} /></button>}
        </div>
        {editing ? (
          <div className={styles.editForm}>
            <div className={styles.formGroup}>
              <label>Display Name</label>
              <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className={styles.input} placeholder="Your name" />
            </div>
            <div className={styles.formGroup}>
              <label>Bio</label>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} className={styles.textarea} placeholder="Tell others about yourself..." rows={3} />
            </div>
            <div className={styles.formGroup}>
              <label>Choose Avatar</label>
              <div className={styles.avatarGrid}>
                {avatars.map((emoji) => (
                  <button key={emoji} className={`${styles.avatarOption} ${selectedAvatar === emoji ? styles.selected : ''}`} onClick={() => setSelectedAvatar(emoji)}>{emoji}</button>
                ))}
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.saveBtn} onClick={handleSave}><Check size={16} />Save Changes</button>
              <button className={styles.cancelBtn} onClick={() => setEditing(false)}><X size={16} />Cancel</button>
            </div>
          </div>
        ) : (
          <div className={styles.profileInfo}>
            <h2 className={styles.name}>
              {user.display_name || user.email}
              {tier === 'elder' && <span style={{ marginLeft: 8, display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 13, fontWeight: 600, color: '#c9a84c' }}><Crown size={14} /></span>}
            </h2>
            <p className={styles.email}><Mail size={14} />{user.email}</p>
            {user.bio && <p className={styles.bio}>{user.bio}</p>}
            <button className={styles.editBtn} onClick={() => setEditing(true)}><Edit2 size={14} />Edit Profile</button>
          </div>
        )}
      </div>

      {!editing && (
        <div className={styles.stats}>
          <div className={styles.statCard}><span className={styles.statValue}>{streak}</span><span className={styles.statLabel}>🔥 Streak</span></div>
          <div className={styles.statCard}><span className={styles.statValue}>{bestStreak}</span><span className={styles.statLabel}>🏆 Best</span></div>
          <div className={styles.statCard}><span className={styles.statValue}>{tierLabel}</span><span className={styles.statLabel}>Plan</span></div>
        </div>
      )}

      {!editing && (
        <div className={styles.menu}>
          {onNavigateToTheme && (
            <button className={styles.menuItem} onClick={onNavigateToTheme}>
              <div className={styles.menuLeft}><Palette size={18} className={styles.menuIcon} /><span className={styles.menuLabel}>Theme & Appearance</span></div>
              <div className={styles.menuRight}><ChevronRight size={16} className={styles.menuArrow} /></div>
            </button>
          )}
          {menuItems.map((item, index) => (
            <button key={index} className={styles.menuItem} onClick={item.onClick}>
              <div className={styles.menuLeft}><item.icon size={18} className={styles.menuIcon} /><span className={styles.menuLabel}>{item.label}</span></div>
              <div className={styles.menuRight}><ChevronRight size={16} className={styles.menuArrow} /></div>
            </button>
          ))}
        </div>
      )}

      {!editing && (
        <button className={styles.signOutBtn} onClick={signOut}><LogOut size={18} /><span>Sign Out</span></button>
      )}
    </div>
  )
}