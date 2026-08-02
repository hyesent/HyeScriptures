import React, { useState, useEffect } from 'react'
import type { Post } from '../../lib/community'
import { getPosts, toggleLike } from '../../lib/community'
import { PostCard } from './PostCard'
import { PostEditor } from './PostEditor'
import { Plus, MessageSquare, Heart, Users, Filter } from 'lucide-react'
import styles from './Feed.module.css'

interface FeedProps {
  prefillVerse?: { reference: string; text: string } | null
  onClearPrefill?: () => void
}

export const Feed: React.FC<FeedProps> = ({ prefillVerse, onClearPrefill }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditor, setShowEditor] = useState(false)
  const [activeTab, setActiveTab] = useState<'feed' | 'prayer' | 'questions' | 'friends'>('feed')

  useEffect(() => {
    loadPosts()
    if (prefillVerse) {
      setShowEditor(true)
      if (onClearPrefill) {
        setTimeout(() => onClearPrefill(), 500)
      }
    }
  }, [prefillVerse])

  const loadPosts = async () => {
    setLoading(true)
    try {
      const data = await getPosts()
      setPosts(data)
    } catch {
      // silent fail
    } finally {
      setLoading(false)
    }
  }

  const handleLike = async (postId: string) => {
    const result = await toggleLike(postId)
    if (result !== undefined) {
      setPosts(posts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              is_liked: result,
              likes_count: (post.likes_count || 0) + (result ? 1 : -1)
            }
          : post
      ))
    }
  }

  const tabs = [
    { id: 'feed', label: 'Feed', icon: MessageSquare },
    { id: 'prayer', label: 'Prayer', icon: Heart },
    { id: 'questions', label: 'Questions', icon: Filter },
    { id: 'friends', label: 'Friends', icon: Users },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Community</h2>
          <span className={styles.count}>{posts.length} posts</span>
        </div>
        <button className={styles.newBtn} onClick={() => setShowEditor(true)}>
          <Plus size={16} />
          <span>Share Reflection</span>
        </button>
      </div>

      <div className={styles.tabs}>
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {loading ? (
        <div className={styles.loading}>Loading posts...</div>
      ) : (
        <div className={styles.feed}>
          {posts.length === 0 && (
            <div className={styles.empty}>
              <MessageSquare size={48} className={styles.emptyIcon} />
              <h3>No posts yet</h3>
              <p>Be the first to share something</p>
            </div>
          )}
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onDelete={(id) => setPosts(posts.filter(p => p.id !== id))}
              onUpdate={loadPosts}
            />
          ))}
        </div>
      )}

      {showEditor && (
        <PostEditor
          onClose={() => setShowEditor(false)}
          onSuccess={loadPosts}
          prefillVerse={prefillVerse}
        />
      )}
    </div>
  )
}