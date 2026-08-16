// src/components/Community/CommunityTab.tsx
import React, { useState, useEffect, useRef } from 'react'
import type { Post, CommunityGroup } from '../../lib/community'
import { getPosts, toggleLike } from '../../lib/community'
import { PostCard } from './PostCard'
import { PostEditor } from './PostEditor'
import { GroupsList } from './GroupsList'
import { GroupDetail } from './GroupDetail'
import { FriendsList } from '../Friends/FriendsList'
import { FriendRequests } from '../Friends/FriendRequests'
import { SearchUsers } from '../Friends/SearchUsers'
import { 
  Plus, MessageSquare, Heart, Users, Filter, TrendingUp, Clock, RefreshCw, UserPlus
} from 'lucide-react'
import styles from './CommunityTab.module.css'

interface CommunityTabProps {
  prefillVerse?: { reference: string; text: string } | null
  onClearPrefill?: () => void
}

type TabType = 'feed' | 'prayer' | 'questions' | 'friends'
type SortType = 'latest' | 'popular' | 'trending'
type MainView = 'community' | 'groups' | 'groupDetail'
type FriendsView = 'list' | 'requests' | 'search'

export const CommunityTab: React.FC<CommunityTabProps> = ({ prefillVerse, onClearPrefill }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditor, setShowEditor] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('feed')
  const [activeSort, setActiveSort] = useState<SortType>('latest')
  const [refreshing, setRefreshing] = useState(false)
  const [mainView, setMainView] = useState<MainView>('community')
  const [selectedGroup, setSelectedGroup] = useState<CommunityGroup | null>(null)
  const [friendsView, setFriendsView] = useState<FriendsView>('list')
  const [tooltip, setTooltip] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null)

  const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
    { id: 'feed', label: 'Feed', icon: MessageSquare },
    { id: 'prayer', label: 'Prayer', icon: Heart },
    { id: 'questions', label: 'Questions', icon: Filter },
    { id: 'friends', label: 'Friends', icon: Users },
  ]

  const sorts: { id: SortType; label: string; icon: React.ElementType }[] = [
    { id: 'latest', label: 'Latest', icon: Clock },
    { id: 'popular', label: 'Popular', icon: TrendingUp },
    { id: 'trending', label: 'Trending', icon: RefreshCw },
  ]

  useEffect(() => {
    if (mainView === 'community' && activeTab !== 'friends') loadPosts()
    if (prefillVerse) {
      setShowEditor(true)
      if (onClearPrefill) setTimeout(() => onClearPrefill(), 500)
    }
  }, [prefillVerse, mainView, activeTab])

  useEffect(() => { filterPosts() }, [posts, activeTab, activeSort])

  // Cleanup long press timeout
  useEffect(() => {
    return () => { if (longPressTimeout.current) clearTimeout(longPressTimeout.current) }
  }, [])

  const loadPosts = async () => {
    setLoading(true)
    try { const data = await getPosts(); setPosts(data) }
    catch (error) { console.error('Error loading posts:', error) }
    finally { setLoading(false) }
  }

  const refreshPosts = async () => { setRefreshing(true); await loadPosts(); setRefreshing(false) }

  const filterPosts = () => {
    let filtered = [...posts]
    if (activeTab === 'prayer') filtered = filtered.filter(p => p.post_type === 'prayer_request')
    else if (activeTab === 'questions') filtered = filtered.filter(p => p.post_type === 'bible_question')
    if (activeSort === 'popular') filtered.sort((a, b) => (b.likes_count || 0) - (a.likes_count || 0))
    else if (activeSort === 'trending') filtered.sort((a, b) => {
      const aScore = (a.likes_count || 0) + (a.comments_count || 0) * 2
      const bScore = (b.likes_count || 0) + (b.comments_count || 0) * 2
      return bScore - aScore
    })
    else filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    setFilteredPosts(filtered)
  }

  const handleLike = async (postId: string) => {
    const result = await toggleLike(postId)
    if (result !== undefined) {
      setPosts(posts.map(post => post.id === postId ? { 
        ...post, is_liked: result, likes_count: (post.likes_count || 0) + (result ? 1 : -1)
      } : post))
    }
  }

  const handleDelete = async (postId: string) => { setPosts(posts.filter(p => p.id !== postId)) }
  const handlePostSuccess = () => { loadPosts(); setShowEditor(false) }

  // ========== LONG PRESS TOOLTIP ==========
  const handleLongPressStart = (label: string, e: React.TouchEvent | React.MouseEvent) => {
    longPressTimeout.current = setTimeout(() => {
      // Get position from event
      let x = 0, y = 0
      if ('touches' in e && e.touches.length > 0) {
        x = e.touches[0].clientX
        y = e.touches[0].clientY
      } else if ('clientX' in e) {
        x = e.clientX
        y = e.clientY
      }
      setTooltipPosition({ x, y })
      setTooltip(label)
    }, 800) // 800ms hold
  }

  const handleLongPressEnd = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current)
      longPressTimeout.current = null
    }
    setTooltip(null)
  }

  // Group detail view
  if (mainView === 'groupDetail' && selectedGroup) {
    return (
      <GroupDetail
        group={selectedGroup}
        onBack={() => setMainView('groups')}
      />
    )
  }

  // Groups list view
  if (mainView === 'groups') {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2>Community</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button 
              className={`${styles.viewToggle} ${mainView === 'community' ? styles.active : ''}`}
              onClick={() => setMainView('community')}
            >
              <MessageSquare size={16} /> Feed
            </button>
            <button 
              className={`${styles.viewToggle} ${mainView === 'groups' ? styles.active : ''}`}
              onClick={() => setMainView('groups')}
            >
              <Users size={16} /> Groups
            </button>
          </div>
        </div>
        <GroupsList
          onSelectGroup={(group) => {
            setSelectedGroup(group)
            setMainView('groupDetail')
          }}
        />
      </div>
    )
  }

  // Friends view
  if (activeTab === 'friends') {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2>Friends</h2>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button 
              className={`${styles.viewToggle} ${friendsView === 'list' ? styles.active : ''}`}
              onClick={() => setFriendsView('list')}
            >
              <Users size={14} /> My Friends
            </button>
            <button 
              className={`${styles.viewToggle} ${friendsView === 'requests' ? styles.active : ''}`}
              onClick={() => setFriendsView('requests')}
            >
              <UserPlus size={14} /> Requests
            </button>
            <button 
              className={`${styles.viewToggle} ${friendsView === 'search' ? styles.active : ''}`}
              onClick={() => setFriendsView('search')}
            >
              <Plus size={14} /> Add
            </button>
          </div>
        </div>

        {friendsView === 'list' && <FriendsList />}
        {friendsView === 'requests' && <FriendRequests />}
        {friendsView === 'search' && <SearchUsers />}
      </div>
    )
  }

  // Main community feed
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Community</h2>
          <span className={styles.postCount}>{filteredPosts.length} posts</span>
          <button className={styles.refreshBtn} onClick={refreshPosts} disabled={refreshing}>
            <RefreshCw size={16} className={refreshing ? styles.spinning : ''} />
          </button>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button 
            className={`${styles.viewToggle} ${mainView === 'community' ? styles.active : ''}`}
            onClick={() => setMainView('community')}
          >
            <MessageSquare size={16} /> Feed
          </button>
          <button 
            className={`${styles.viewToggle} ${mainView === 'groups' ? styles.active : ''}`}
            onClick={() => setMainView('groups')}
          >
            <Users size={16} /> Groups
          </button>
          <button className={styles.newPostBtn} onClick={() => setShowEditor(true)}>
            <Plus size={16} /><span>Share</span>
          </button>
        </div>
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {tabs.map((tab) => {
            const Icon = tab.icon
            const count = tab.id === 'feed' ? posts.length : 
                         tab.id === 'prayer' ? posts.filter(p => p.post_type === 'prayer_request').length :
                         tab.id === 'questions' ? posts.filter(p => p.post_type === 'bible_question').length : 0
            return (
              <button 
                key={tab.id} 
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`} 
                onClick={() => setActiveTab(tab.id)}
                onTouchStart={(e) => handleLongPressStart(tab.label, e)}
                onTouchEnd={handleLongPressEnd}
                onTouchMove={handleLongPressEnd}
                onMouseDown={(e) => handleLongPressStart(tab.label, e)}
                onMouseUp={handleLongPressEnd}
                onMouseLeave={handleLongPressEnd}
              >
                <Icon size={16} /><span>{tab.label}</span>
                {count > 0 && tab.id !== 'friends' && <span className={styles.tabCount}>{count}</span>}
              </button>
            )
          })}
        </div>
        {activeTab !== 'friends' && (
          <div className={styles.sortOptions}>
            {sorts.map((sort) => {
              const Icon = sort.icon
              return (
                <button key={sort.id} className={`${styles.sortBtn} ${activeSort === sort.id ? styles.active : ''}`} onClick={() => setActiveSort(sort.id)}>
                  <Icon size={14} /><span>{sort.label}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {loading ? (
        <div className={styles.loading}><div className={styles.loadingSpinner} /><p>Loading posts...</p></div>
      ) : (
        <div className={styles.feed}>
          {filteredPosts.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>💬</div>
              <h3>No posts yet</h3>
              <p>Be the first to share something with the community</p>
              <button className={styles.emptyBtn} onClick={() => setShowEditor(true)}><Plus size={16} />Create Post</button>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} onLike={handleLike} onDelete={handleDelete} onUpdate={loadPosts} />
            ))
          )}
        </div>
      )}

      {/* Tooltip */}
      {tooltip && (
        <div 
          className={styles.tooltip}
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y - 50,
          }}
        >
          {tooltip}
        </div>
      )}

      {showEditor && (
        <PostEditor onClose={() => setShowEditor(false)} onSuccess={handlePostSuccess} prefillVerse={prefillVerse} />
      )}
    </div>
  )
}

export default CommunityTab
