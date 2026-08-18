// src/lib/friends.ts
import { supabase } from './supabase'

export type FriendRequest = {
  id: string
  requester_id: string
  addressee_id: string
  status: 'pending' | 'accepted' | 'blocked'
  created_at: string
  requester_name?: string
  requester_email?: string
  addressee_name?: string
  addressee_email?: string
}

export type Friend = {
  id: string
  user_id: string
  display_name: string
  email: string
  avatar_url: string | null
  friendship_id: string
}

const getCurrentUserId = async (): Promise<string | null> => {
  const { data } = await supabase.auth.getUser()
  return data?.user?.id || null
}

// ============================================================
// SEARCH USERS — Uses profiles table (not auth admin)
// ============================================================
export const searchUsers = async (query: string): Promise<any[]> => {
  try {
    const currentUserId = await getCurrentUserId()
    if (!currentUserId) return []

    // Search profiles table
    const { data, error } = await supabase
      .from('profiles')
      .select('id, display_name, avatar_url, email')
      .or(`display_name.ilike.%${query}%,email.ilike.%${query}%`)
      .limit(20)

    if (error) {
      // Fallback to auth admin if profiles table doesn't work
      const { data: authData, error: authError } = await supabase.auth.admin.listUsers()
      if (authError) return []
      
      const users = authData?.users || []
      return users
        .filter(u => u.id !== currentUserId)
        .filter(u => {
          const email = u.email || ''
          const name = u.user_metadata?.display_name || ''
          const search = query.toLowerCase()
          return email.toLowerCase().includes(search) || name.toLowerCase().includes(search)
        })
        .map(u => ({
          id: u.id,
          email: u.email || '',
          display_name: u.user_metadata?.display_name || u.email?.split('@')[0] || '',
          avatar_url: u.user_metadata?.avatar_url || null,
        }))
        .slice(0, 20)
    }

    return (data || [])
      .filter(u => u.id !== currentUserId)
      .map(u => ({
        id: u.id,
        email: u.email || '',
        display_name: u.display_name || u.email?.split('@')[0] || '',
        avatar_url: u.avatar_url || null,
      }))
  } catch (error) {
    console.error('Error searching users:', error)
    return []
  }
}

// Send friend request
export const sendFriendRequest = async (addresseeId: string): Promise<boolean> => {
  try {
    const currentUserId = await getCurrentUserId()
    if (!currentUserId) return false

    const { error } = await supabase.from('friendships').insert({
      requester_id: currentUserId,
      addressee_id: addresseeId,
      status: 'pending',
    })

    if (error) {
      if (error.code === '23505') return false // Already exists
      throw error
    }
    return true
  } catch (error) {
    console.error('Error sending friend request:', error)
    return false
  }
}

// Accept friend request
export const acceptFriendRequest = async (friendshipId: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('friendships')
      .update({ status: 'accepted', updated_at: new Date().toISOString() })
      .eq('id', friendshipId)
    if (error) throw error
    return true
  } catch (error) {
    console.error('Error accepting friend request:', error)
    return false
  }
}

// Decline friend request
export const declineFriendRequest = async (friendshipId: string): Promise<boolean> => {
  try {
    const { error } = await supabase.from('friendships').delete().eq('id', friendshipId)
    if (error) throw error
    return true
  } catch (error) {
    console.error('Error declining friend request:', error)
    return false
  }
}

// Remove friend
export const removeFriend = async (friendshipId: string): Promise<boolean> => {
  try {
    const { error } = await supabase.from('friendships').delete().eq('id', friendshipId)
    if (error) throw error
    return true
  } catch (error) {
    console.error('Error removing friend:', error)
    return false
  }
}

// Get pending friend requests (incoming)
export const getPendingRequests = async (): Promise<FriendRequest[]> => {
  try {
    const currentUserId = await getCurrentUserId()
    if (!currentUserId) return []

    // Get all pending requests
    const { data, error } = await supabase
      .from('friendships')
      .select('*')
      .eq('addressee_id', currentUserId)
      .eq('status', 'pending')
      .order('created_at', { ascending: false })

    if (error || !data) return []

    // Get requester names from profiles table
    const requesterIds = data.map(r => r.requester_id)
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, display_name, email')
      .in('id', requesterIds)

    return data.map(request => {
      const profile = profiles?.find(p => p.id === request.requester_id)
      return {
        ...request,
        requester_name: profile?.display_name || profile?.email?.split('@')[0] || 'Unknown',
        requester_email: profile?.email || '',
      }
    })
  } catch (error) {
    console.error('Error getting pending requests:', error)
    return []
  }
}

// Get accepted friends
export const getFriends = async (): Promise<Friend[]> => {
  try {
    const currentUserId = await getCurrentUserId()
    if (!currentUserId) return []

    const { data, error } = await supabase
      .from('friendships')
      .select('*')
      .eq('status', 'accepted')
      .or(`requester_id.eq.${currentUserId},addressee_id.eq.${currentUserId}`)

    if (error || !data) return []

    // Get friend IDs
    const friendIds = data.map(f => 
      f.requester_id === currentUserId ? f.addressee_id : f.requester_id
    )

    // Get profiles from profiles table
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, display_name, email, avatar_url')
      .in('id', friendIds)

    return data.map(f => {
      const friendId = f.requester_id === currentUserId ? f.addressee_id : f.requester_id
      const profile = profiles?.find(p => p.id === friendId)
      return {
        id: friendId,
        user_id: friendId,
        display_name: profile?.display_name || profile?.email?.split('@')[0] || 'Unknown',
        email: profile?.email || '',
        avatar_url: profile?.avatar_url || null,
        friendship_id: f.id,
      }
    })
  } catch (error) {
    console.error('Error getting friends:', error)
    return []
  }
}

// Check friendship status with another user
export const getFriendshipStatus = async (otherUserId: string): Promise<'none' | 'pending_sent' | 'pending_received' | 'accepted'> => {
  try {
    const currentUserId = await getCurrentUserId()
    if (!currentUserId) return 'none'

    const { data } = await supabase
      .from('friendships')
      .select('*')
      .or(`and(requester_id.eq.${currentUserId},addressee_id.eq.${otherUserId}),and(requester_id.eq.${otherUserId},addressee_id.eq.${currentUserId})`)
      .maybeSingle()

    if (!data) return 'none'
    if (data.status === 'accepted') return 'accepted'
    if (data.requester_id === currentUserId) return 'pending_sent'
    return 'pending_received'
  } catch (error) {
    console.error('Error checking friendship status:', error)
    return 'none'
  }
}
