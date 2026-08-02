import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { User } from '../lib/supabase'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          display_name: session.user.user_metadata?.display_name || session.user.email?.split('@')[0] || '',
          avatar_url: session.user.user_metadata?.avatar_url || null,
          plan: session.user.user_metadata?.plan || 'free',
          xp: session.user.user_metadata?.xp || 0,
          streak: session.user.user_metadata?.streak || 0,
        })
      }
      setLoading(false)
    }).catch((error) => {
      console.error('Error getting session:', error)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          display_name: session.user.user_metadata?.display_name || session.user.email?.split('@')[0] || '',
          avatar_url: session.user.user_metadata?.avatar_url || null,
          plan: session.user.user_metadata?.plan || 'free',
          xp: session.user.user_metadata?.xp || 0,
          streak: session.user.user_metadata?.streak || 0,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      })
      if (error) throw error
    } catch (error) {
      console.error('Error signing in:', error)
      throw error
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setUser(null)
    } catch (error) {
      console.error('Error signing out:', error)
      throw error
    }
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) return

    try {
      const { error } = await supabase.auth.updateUser({
        data: updates
      })
      if (error) throw error
      setUser({ ...user, ...updates })
    } catch (error) {
      console.error('Error updating profile:', error)
      throw error
    }
  }

  return {
    user,
    loading,
    signInWithGoogle,
    signOut,
    updateProfile,
    isAuthenticated: !!user,
  }
}