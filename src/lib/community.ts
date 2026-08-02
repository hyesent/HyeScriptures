import { supabase } from './supabase'

// ========== TYPES ==========
export type PostType = 'verse_reflection' | 'prayer_request' | 'bible_question' | 'testimony' | 'encouragement'

export type Post = {
  id: string
  user_id: string
  post_type: PostType
  content: string
  verse_reference?: string
  created_at: string
  updated_at: string
  user?: {
    display_name: string
    avatar_url: string
  }
  likes_count?: number
  comments_count?: number
  is_liked?: boolean
}

export type Comment = {
  id: string
  post_id: string
  user_id: string
  content: string
  created_at: string
  updated_at: string
  user?: {
    display_name: string
    avatar_url: string
  }
}

export type Like = {
  id: string
  post_id: string
  user_id: string
  created_at: string
}

// ========== POSTS ==========

// Get all posts with user info, likes, comments
export const getPosts = async (): Promise<Post[]> => {
  try {
    // Get current user for like checking
    const { data: userData } = await supabase.auth.getUser()
    const currentUserId = userData?.user?.id

    // Get posts
    const { data: postsData, error: postsError } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (postsError) throw postsError

    if (!postsData || postsData.length === 0) {
      return []
    }

    // Get ALL user profiles - including email for fallback
    const userIds = postsData.map(p => p.user_id)
    const { data: usersData, error: usersError } = await supabase
      .from('profiles')
      .select('id, display_name, avatar_url, email')
      .in('id', userIds)

    if (usersError) {
      console.error('Error fetching users:', usersError)
    }

    // Get likes count for each post
    const { data: likesData, error: likesError } = await supabase
      .from('likes')
      .select('post_id, user_id')

    if (likesError) {
      console.error('Error fetching likes:', likesError)
    }

    // Get comments count for each post
    const { data: commentsData, error: commentsError } = await supabase
      .from('comments')
      .select('post_id')

    if (commentsError) {
      console.error('Error fetching comments:', commentsError)
    }

    // Get current user's likes
    let myLikePostIds: string[] = []
    if (currentUserId) {
      const { data: myLikes, error: myLikesError } = await supabase
        .from('likes')
        .select('post_id')
        .eq('user_id', currentUserId)

      if (!myLikesError && myLikes) {
        myLikePostIds = myLikes.map(l => l.post_id)
      }
    }

    // Build posts with user info - with better fallback
    const posts: Post[] = postsData.map(post => {
      const user = usersData?.find(u => u.id === post.user_id)
      
      return {
        ...post,
        user: user ? {
          display_name: user.display_name || user.email || 'Unknown',
          avatar_url: user.avatar_url || '👤'
        } : {
          display_name: 'Unknown User',
          avatar_url: '👤'
        },
        likes_count: likesData?.filter(l => l.post_id === post.id).length || 0,
        comments_count: commentsData?.filter(c => c.post_id === post.id).length || 0,
        is_liked: myLikePostIds.includes(post.id)
      }
    })

    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Get a single post with details
export const getPost = async (postId: string): Promise<Post | null> => {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', postId)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Create a post
export const createPost = async (
  postType: PostType,
  content: string,
  verseReference?: string
): Promise<Post | null> => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser()
    
    if (userError || !userData?.user) {
      console.error('No user logged in:', userError)
      return null
    }

    const userId = userData.user.id

    const { data, error } = await supabase
      .from('posts')
      .insert({
        post_type: postType,
        content,
        verse_reference: verseReference,
        user_id: userId
      })
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating post:', error)
    return null
  }
}

// Update a post
export const updatePost = async (postId: string, content: string): Promise<Post | null> => {
  try {
    const { data, error } = await supabase
      .from('posts')
      .update({ content, updated_at: new Date().toISOString() })
      .eq('id', postId)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating post:', error)
    return null
  }
}

// Delete a post
export const deletePost = async (postId: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', postId)

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error deleting post:', error)
    return false
  }
}

// ========== LIKES ==========

// Toggle like on a post
export const toggleLike = async (postId: string): Promise<boolean> => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser()
    
    if (userError || !userData?.user) {
      console.error('No user logged in:', userError)
      return false
    }

    const userId = userData.user.id

    // Check if user already liked this post
    const { data: existingLike, error: checkError } = await supabase
      .from('likes')
      .select('id')
      .eq('post_id', postId)
      .eq('user_id', userId)
      .maybeSingle()

    if (checkError && checkError.code !== 'PGRST116') {
      throw checkError
    }

    if (existingLike) {
      // Unlike
      const { error } = await supabase
        .from('likes')
        .delete()
        .eq('id', existingLike.id)
      
      if (error) throw error
      return false // Unliked
    } else {
      // Like
      const { error } = await supabase
        .from('likes')
        .insert({ 
          post_id: postId, 
          user_id: userId 
        })
      
      if (error) throw error
      return true // Liked
    }
  } catch (error) {
    console.error('Error toggling like:', error)
    return false
  }
}

// ========== COMMENTS ==========

// Get comments for a post
export const getComments = async (postId: string): Promise<Comment[]> => {
  try {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: true })

    if (error) throw error

    if (!data || data.length === 0) {
      return []
    }

    // Get user info for each comment
    const userIds = data.map(c => c.user_id)
    const { data: usersData, error: usersError } = await supabase
      .from('profiles')
      .select('id, display_name, avatar_url, email')
      .in('id', userIds)

    if (usersError) {
      console.error('Error fetching users:', usersError)
    }

    // Build comments with user info
    const comments: Comment[] = data.map(comment => {
      const user = usersData?.find(u => u.id === comment.user_id)
      return {
        ...comment,
        user: user ? {
          display_name: user.display_name || user.email || 'Unknown',
          avatar_url: user.avatar_url || '👤'
        } : {
          display_name: 'Unknown User',
          avatar_url: '👤'
        }
      }
    })

    return comments
  } catch (error) {
    console.error('Error fetching comments:', error)
    return []
  }
}

// Create a comment
export const createComment = async (postId: string, content: string): Promise<Comment | null> => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser()
    
    if (userError || !userData?.user) {
      console.error('No user logged in:', userError)
      return null
    }

    const userId = userData.user.id

    const { data, error } = await supabase
      .from('comments')
      .insert({
        post_id: postId,
        content,
        user_id: userId
      })
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating comment:', error)
    return null
  }
}

// Delete a comment
export const deleteComment = async (commentId: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId)

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error deleting comment:', error)
    return false
  }
}



// Edit a comment
export const editComment = async (commentId: string, content: string): Promise<Comment | null> => {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser()
    
    if (userError || !userData?.user) {
      console.error('No user logged in:', userError)
      return null
    }

    const { data, error } = await supabase
      .from('comments')
      .update({ 
        content, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', commentId)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error editing comment:', error)
    return null
  }
}