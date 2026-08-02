// src/components/Community/PostCard.tsx
import React, { useState, useEffect } from 'react'
import type { Post, Comment } from '../../lib/community'
import { 
  deletePost, 
  getComments, 
  createComment, 
  deleteComment,
  editComment
} from '../../lib/community'
import { useAuth } from '../../hooks/useAuth'
import { 
  Heart, 
  MessageCircle, 
  Trash2, 
  Edit2, 
  X, 
  Send, 
  Clock, 
  Reply,
  Check,
  MoreVertical
} from 'lucide-react'
import styles from './PostCard.module.css'

interface PostCardProps {
  post: Post
  onLike: (postId: string) => void
  onDelete: (postId: string) => void
  onUpdate: () => void
}

const postTypeEmojis: Record<string, string> = {
  verse_reflection: '📖',
  testimony: '🙌',
  prayer_request: '🙏',
  bible_question: '❓',
  encouragement: '💪'
}

const postTypeLabels: Record<string, string> = {
  verse_reflection: 'Verse Reflection',
  testimony: 'Testimony',
  prayer_request: 'Prayer Request',
  bible_question: 'Bible Question',
  encouragement: 'Encouragement'
}

export const PostCard: React.FC<PostCardProps> = ({ post, onLike, onDelete, onUpdate }) => {
  const { user } = useAuth()
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [commentInput, setCommentInput] = useState('')
  const [replyInput, setReplyInput] = useState<{ [key: string]: string }>({})
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const [loadingComments, setLoadingComments] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(post.content)
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null)
  const [editingCommentContent, setEditingCommentContent] = useState('')
  const [showMenu, setShowMenu] = useState(false)

  const isAuthor = user?.id === post.user_id

  const loadComments = async () => {
    setLoadingComments(true)
    try {
      const data = await getComments(post.id)
      setComments(data)
    } catch (error) {
      console.error('Error loading comments:', error)
    } finally {
      setLoadingComments(false)
    }
  }

  const handleToggleComments = () => {
    if (!showComments) {
      loadComments()
    }
    setShowComments(!showComments)
    setReplyTo(null)
  }

  const handleCommentSubmit = async () => {
    if (!commentInput.trim() || submitting) return

    setSubmitting(true)
    try {
      const result = await createComment(post.id, commentInput)
      if (result) {
        setCommentInput('')
        await loadComments()
        onUpdate()
      }
    } catch (error) {
      console.error('Error posting comment:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleReplySubmit = async (parentId: string) => {
    const content = replyInput[parentId] || ''
    if (!content.trim() || submitting) return

    setSubmitting(true)
    try {
      const result = await createComment(post.id, content, parentId)
      if (result) {
        setReplyInput(prev => ({ ...prev, [parentId]: '' }))
        setReplyTo(null)
        await loadComments()
        onUpdate()
      }
    } catch (error) {
      console.error('Error posting reply:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeleteComment = async (commentId: string) => {
    if (window.confirm('Delete this comment?')) {
      const result = await deleteComment(commentId)
      if (result) {
        await loadComments()
        onUpdate()
      }
    }
  }

  const handleEditComment = async (commentId: string) => {
    if (!editingCommentContent.trim()) return

    const result = await editComment(commentId, editingCommentContent)
    if (result) {
      setEditingCommentId(null)
      setEditingCommentContent('')
      await loadComments()
      onUpdate()
    }
  }

  const handleDeletePost = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const result = await deletePost(post.id)
      if (result) {
        onDelete(post.id)
      }
    }
  }

  const timeAgo = (date: string) => {
    const diff = Date.now() - new Date(date).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return 'Just now'
    if (mins < 60) return `${mins}m ago`
    const hours = Math.floor(mins / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    if (days < 7) return `${days}d ago`
    return new Date(date).toLocaleDateString()
  }

  const renderComment = (comment: Comment, isReply: boolean = false) => {
    const isCommentAuthor = user?.id === comment.user_id
    const isEditing = editingCommentId === comment.id
    const replyKey = comment.id

    return (
      <div key={comment.id} className={`${styles.comment} ${isReply ? styles.reply : ''}`}>
        <span className={styles.commentAvatar}>{comment.user?.avatar_url || '👤'}</span>
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <span className={styles.commentUser}>{comment.user?.display_name || 'Unknown'}</span>
            <span className={styles.commentTime}>{timeAgo(comment.created_at)}</span>
            {isCommentAuthor && !isEditing && (
              <div className={styles.commentActions}>
                <button 
                  className={styles.editCommentBtn}
                  onClick={() => {
                    setEditingCommentId(comment.id)
                    setEditingCommentContent(comment.content)
                  }}
                  title="Edit comment"
                >
                  <Edit2 size={12} />
                </button>
                <button 
                  className={styles.deleteCommentBtn}
                  onClick={() => handleDeleteComment(comment.id)}
                  title="Delete comment"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            )}
          </div>

          {isEditing ? (
            <div className={styles.commentEditArea}>
              <input
                type="text"
                value={editingCommentContent}
                onChange={(e) => setEditingCommentContent(e.target.value)}
                className={styles.commentEditInput}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleEditComment(comment.id)
                  if (e.key === 'Escape') {
                    setEditingCommentId(null)
                    setEditingCommentContent('')
                  }
                }}
                autoFocus
              />
              <div className={styles.commentEditActions}>
                <button 
                  className={styles.commentEditSaveBtn}
                  onClick={() => handleEditComment(comment.id)}
                >
                  <Check size={14} />
                </button>
                <button 
                  className={styles.commentEditCancelBtn}
                  onClick={() => {
                    setEditingCommentId(null)
                    setEditingCommentContent('')
                  }}
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.commentText}>{comment.content}</div>
          )}

          {!isReply && !isEditing && (
            <button 
              className={styles.replyBtn}
              onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
            >
              <Reply size={12} />
              Reply
            </button>
          )}

          {replyTo === comment.id && !isEditing && (
            <div className={styles.replyInputArea}>
              <input
                type="text"
                value={replyInput[replyKey] || ''}
                onChange={(e) => setReplyInput(prev => ({ ...prev, [replyKey]: e.target.value }))}
                placeholder="Write a reply..."
                className={styles.replyInput}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleReplySubmit(comment.id)
                  if (e.key === 'Escape') setReplyTo(null)
                }}
                autoFocus
              />
              <button 
                className={styles.replySubmitBtn}
                onClick={() => handleReplySubmit(comment.id)}
                disabled={!replyInput[replyKey]?.trim() || submitting}
              >
                <Send size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      {/* Post Header */}
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <span className={styles.avatar}>{post.user?.avatar_url || '👤'}</span>
          <div>
            <span className={styles.userName}>{post.user?.display_name || 'Unknown'}</span>
            <span className={styles.postType}>
              {postTypeEmojis[post.post_type]} {postTypeLabels[post.post_type]}
            </span>
          </div>
        </div>
        <div className={styles.postMeta}>
          <span className={styles.time}>
            <Clock size={12} />
            {timeAgo(post.created_at)}
          </span>
          {isAuthor && (
            <div className={styles.actions}>
              <button 
                className={styles.editBtn} 
                onClick={() => setIsEditing(true)}
                title="Edit"
              >
                <Edit2 size={14} />
              </button>
              <button 
                className={styles.deleteBtn} 
                onClick={handleDeletePost}
                title="Delete"
              >
                <Trash2 size={14} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Post Content */}
      {isEditing ? (
        <div className={styles.editArea}>
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className={styles.editInput}
            rows={3}
          />
          <div className={styles.editActions}>
            <button className={styles.cancelEditBtn} onClick={() => setIsEditing(false)}>
              <X size={14} />
              Cancel
            </button>
            <button className={styles.saveEditBtn} onClick={() => { setIsEditing(false); onUpdate() }}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.content}>{post.content}</div>
          {post.verse_reference && (
            <div className={styles.verseRef}>📖 {post.verse_reference}</div>
          )}
        </>
      )}

      {/* Stats */}
      <div className={styles.stats}>
        <button 
          className={`${styles.likeBtn} ${post.is_liked ? styles.liked : ''}`}
          onClick={() => onLike(post.id)}
        >
          <Heart size={16} className={post.is_liked ? styles.filled : ''} />
          {post.likes_count || 0}
        </button>
        <button className={styles.commentBtn} onClick={handleToggleComments}>
          <MessageCircle size={16} />
          {post.comments_count || 0}
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className={styles.comments}>
          {loadingComments ? (
            <p className={styles.loadingComments}>Loading comments...</p>
          ) : (
            <>
              {comments.length === 0 && (
                <p className={styles.noComments}>No comments yet. Be the first! 💬</p>
              )}
              
              {/* Top-level comments */}
              {comments.map((comment) => renderComment(comment, false))}

              {/* Comment Input */}
              <div className={styles.commentInputArea}>
                <input
                  type="text"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Write a comment..."
                  className={styles.commentInput}
                  onKeyDown={(e) => e.key === 'Enter' && handleCommentSubmit()}
                />
                <button 
                  className={styles.commentSubmitBtn}
                  onClick={handleCommentSubmit}
                  disabled={!commentInput.trim() || submitting}
                >
                  <Send size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}