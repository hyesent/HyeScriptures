// src/lib/community.ts
// ============================================================
// HYESCRIPTURES COMMUNITY LIBRARY
// Posts, Comments, Likes, and Community Groups
// ============================================================

import { supabase } from './supabase'

// ========== TYPES ==========
export type PostType = 'verse_reflection' | 'prayer_request' | 'bible_question' | 'testimony' | 'encouragement'

export type Post = {
  id: string
  user_id: string
  post_type: PostType
  content: string
  verse_reference?: string
  user_display_name?: string
  created_at: string
  updated_at: string
  user?: { display_name: string; avatar_url: string }
  likes_count?: number
  comments_count?: number
  is_liked?: boolean
}

export type Comment = {
  id: string; post_id: string; user_id: string; content: string
  user_display_name?: string; created_at: string; updated_at: string
  user?: { display_name: string; avatar_url: string }
}

export type Like = { id: string; post_id: string; user_id: string; created_at: string }

export type CommunityGroup = {
  id: string; name: string; description: string; created_by: string
  is_private: boolean; member_count: number; created_at: string
  creator_name?: string; is_member?: boolean
}

export type GroupMember = {
  id: string; group_id: string; user_id: string
  role: 'admin' | 'moderator' | 'member'; joined_at: string; user_name?: string
}

export type GroupPost = {
  id: string; group_id: string; user_id: string; content: string
  verse_reference?: string; user_display_name?: string; created_at: string
}

// ========== HELPERS ==========
const getCurrentUserId = async (): Promise<string | null> => {
  const { data } = await supabase.auth.getUser()
  return data?.user?.id || null
}

const getCurrentUserDisplayName = async (): Promise<string> => {
  const { data } = await supabase.auth.getUser()
  return data?.user?.user_metadata?.display_name ||
         data?.user?.email?.split('@')[0] ||
         'Believer'
}

const isUserElder = async (userId: string, email: string): Promise<boolean> => {
  const ELDER_EMAILS = ['hyacinthmichael36@gmail.com', 'inemhilda52@gmail.com', 'esylvia303@gmail.com', 'alexzenemma@gmail.com']
  if (ELDER_EMAILS.includes(email)) return true

  const storeId = localStorage.getItem('hyespace-store-id')
  if (!storeId) return false

  try {
    const HYESPACE_VERIFY_URL = 'https://bqyrkdxqwysrhvjfajix.supabase.co/functions/v1/verify-subscription'
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)
    const res = await fetch(HYESPACE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ storeId: storeId.trim().toLowerCase(), appId: 'hyescriptures', email }),
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    if (!res.ok) return false
    const data = await res.json()
    if (data.error) return false
    return data.subscribed && data.status === 'active' && data.tierId === 'hyescriptures-elder'
  } catch (error) {
    console.error('HyeSpace verification error:', error)
    return false
  }
}

// ============================================================
// POSTS
// ============================================================

export const getPosts = async (): Promise<Post[]> => {
  try {
    const currentUserId = await getCurrentUserId()
    const { data: postsData, error: postsError } = await supabase
      .from('posts').select('*').order('created_at', { ascending: false })
    if (postsError || !postsData || postsData.length === 0) return []

    const { data: likesData } = await supabase.from('likes').select('post_id, user_id')
    const { data: commentsData } = await supabase.from('comments').select('post_id')

    let myLikePostIds: string[] = []
    if (currentUserId) {
      const { data: myLikes } = await supabase.from('likes').select('post_id').eq('user_id', currentUserId)
      if (myLikes) myLikePostIds = myLikes.map(l => l.post_id)
    }

    return postsData.map(post => ({
      ...post,
      user: { display_name: post.user_display_name || 'Believer', avatar_url: '👤' },
      likes_count: likesData?.filter(l => l.post_id === post.id).length || 0,
      comments_count: commentsData?.filter(c => c.post_id === post.id).length || 0,
      is_liked: myLikePostIds.includes(post.id)
    }))
  } catch (error) { console.error('Error fetching posts:', error); return [] }
}

export const createPost = async (postType: PostType, content: string, verseReference?: string): Promise<Post | null> => {
  try {
    const userId = await getCurrentUserId()
    if (!userId) return null
    const displayName = await getCurrentUserDisplayName()
    const { data, error } = await supabase.from('posts').insert({
      post_type: postType, content, verse_reference: verseReference,
      user_id: userId, user_display_name: displayName,
    }).select().single()
    if (error) throw error
    return data
  } catch (error) { console.error('Error creating post:', error); return null }
}

export const updatePost = async (postId: string, content: string): Promise<Post | null> => {
  try {
    const { data, error } = await supabase.from('posts')
      .update({ content, updated_at: new Date().toISOString() })
      .eq('id', postId).select().single()
    if (error) throw error
    return data
  } catch (error) { console.error('Error updating post:', error); return null }
}

export const deletePost = async (postId: string): Promise<boolean> => {
  try {
    const { error } = await supabase.from('posts').delete().eq('id', postId)
    if (error) throw error
    return true
  } catch (error) { console.error('Error deleting post:', error); return false }
}

// ============================================================
// LIKES
// ============================================================

export const toggleLike = async (postId: string): Promise<boolean> => {
  try {
    const userId = await getCurrentUserId()
    if (!userId) return false
    const { data: existingLike } = await supabase.from('likes')
      .select('id').eq('post_id', postId).eq('user_id', userId).maybeSingle()
    if (existingLike) {
      await supabase.from('likes').delete().eq('id', existingLike.id)
      return false
    } else {
      await supabase.from('likes').insert({ post_id: postId, user_id: userId })
      return true
    }
  } catch (error) { console.error('Error toggling like:', error); return false }
}

// ============================================================
// COMMENTS
// ============================================================

export const getComments = async (postId: string): Promise<Comment[]> => {
  try {
    const { data, error } = await supabase.from('comments')
      .select('*').eq('post_id', postId).order('created_at', { ascending: true })
    if (error || !data) return []
    return data.map(comment => ({
      ...comment,
      user: { display_name: comment.user_display_name || 'Believer', avatar_url: '👤' }
    }))
  } catch (error) { console.error('Error fetching comments:', error); return [] }
}

export const createComment = async (postId: string, content: string, parentId?: string): Promise<Comment | null> => {
  try {
    const userId = await getCurrentUserId()
    if (!userId) return null
    const displayName = await getCurrentUserDisplayName()
    const { data, error } = await supabase.from('comments').insert({
      post_id: postId, content, user_id: userId,
      user_display_name: displayName, parent_id: parentId || null,
    }).select().single()
    if (error) throw error
    return data
  } catch (error) { console.error('Error creating comment:', error); return null }
}

export const deleteComment = async (commentId: string): Promise<boolean> => {
  try {
    const { error } = await supabase.from('comments').delete().eq('id', commentId)
    if (error) throw error
    return true
  } catch (error) { console.error('Error deleting comment:', error); return false }
}

export const editComment = async (commentId: string, content: string): Promise<Comment | null> => {
  try {
    const { data, error } = await supabase.from('comments')
      .update({ content, updated_at: new Date().toISOString() })
      .eq('id', commentId).select().single()
    if (error) throw error
    return data
  } catch (error) { console.error('Error editing comment:', error); return null }
}

// ============================================================
// COMMUNITY GROUPS
// ============================================================

export const getGroups = async (): Promise<CommunityGroup[]> => {
  try {
    const userId = await getCurrentUserId()
    const { data, error } = await supabase.from('community_groups')
      .select('*').order('created_at', { ascending: false })
    if (error || !data) return []

    const groupsWithStatus = await Promise.all(data.map(async (group) => {
      let isMember = false
      if (userId) {
        const { data: member } = await supabase.from('group_members')
          .select('id').eq('group_id', group.id).eq('user_id', userId).maybeSingle()
        isMember = !!member
      }
      return { ...group, is_member: isMember }
    }))
    return groupsWithStatus
  } catch (error) { console.error('Error fetching groups:', error); return [] }
}

export const createGroup = async (name: string, description: string, isPrivate: boolean = false): Promise<CommunityGroup | null> => {
  try {
    const userId = await getCurrentUserId()
    if (!userId) return null

    const { data: userData } = await supabase.auth.getUser()
    const email = userData?.user?.email || ''
    const creatorName = await getCurrentUserDisplayName()

    const elder = await isUserElder(userId, email)
    if (!elder) throw new Error('Only Elder members can create groups')

    const { data: group, error } = await supabase.from('community_groups').insert({
      name, description, created_by: userId, is_private: isPrivate, creator_name: creatorName,
    }).select().single()
    if (error) throw error

    await supabase.from('group_members').insert({
      group_id: group.id, user_id: userId, role: 'admin', user_name: creatorName,
    })

    return group
  } catch (error) { console.error('Error creating group:', error); return null }
}

export const joinGroup = async (groupId: string): Promise<boolean> => {
  try {
    const userId = await getCurrentUserId()
    if (!userId) return false
    const userName = await getCurrentUserDisplayName()
    const { error } = await supabase.from('group_members').insert({
      group_id: groupId, user_id: userId, role: 'member', user_name: userName,
    })
    if (error) throw error
    await supabase.rpc('increment_group_members', { p_group_id: groupId })
    return true
  } catch (error) { console.error('Error joining group:', error); return false }
}

export const leaveGroup = async (groupId: string): Promise<boolean> => {
  try {
    const userId = await getCurrentUserId()
    if (!userId) return false
    const { error } = await supabase.from('group_members')
      .delete().eq('group_id', groupId).eq('user_id', userId)
    if (error) throw error
    await supabase.rpc('decrement_group_members', { p_group_id: groupId })
    return true
  } catch (error) { console.error('Error leaving group:', error); return false }
}

export const getGroupPosts = async (groupId: string): Promise<GroupPost[]> => {
  try {
    const { data, error } = await supabase.from('group_posts')
      .select('*').eq('group_id', groupId).order('created_at', { ascending: false })
    if (error || !data) return []
    return data
  } catch (error) { console.error('Error fetching group posts:', error); return [] }
}

export const createGroupPost = async (groupId: string, content: string, verseReference?: string): Promise<GroupPost | null> => {
  try {
    const userId = await getCurrentUserId()
    if (!userId) return null
    const displayName = await getCurrentUserDisplayName()
    const { data, error } = await supabase.from('group_posts').insert({
      group_id: groupId, content, verse_reference: verseReference,
      user_id: userId, user_display_name: displayName,
    }).select().single()
    if (error) throw error
    return data
  } catch (error) { console.error('Error creating group post:', error); return null }
}

// ============================================================
// NEW: GROUP MEMBER MANAGEMENT
// ============================================================

export const deleteGroupPost = async (postId: string): Promise<boolean> => {
  try {
    const { error } = await supabase.from('group_posts').delete().eq('id', postId)
    if (error) throw error
    return true
  } catch (error) { console.error('Error deleting group post:', error); return false }
}

export const addMemberToGroup = async (groupId: string, userId: string, userName: string): Promise<boolean> => {
  try {
    const { error } = await supabase.from('group_members').insert({
      group_id: groupId,
      user_id: userId,
      role: 'member',
      user_name: userName,
    })
    if (error) {
      if (error.code === '23505') return false // Already a member
      throw error
    }
    await supabase.rpc('increment_group_members', { p_group_id: groupId })
    return true
  } catch (error) { console.error('Error adding member to group:', error); return false }
}

export const getUserRoleInGroup = async (groupId: string): Promise<'admin' | 'moderator' | 'member' | null> => {
  try {
    const userId = await getCurrentUserId()
    if (!userId) return null
    const { data } = await supabase.from('group_members')
      .select('role').eq('group_id', groupId).eq('user_id', userId).maybeSingle()
    return data?.role || null
  } catch (error) { console.error('Error getting user role:', error); return null }
}
