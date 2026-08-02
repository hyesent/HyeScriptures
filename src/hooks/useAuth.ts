import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { User } from '../lib/supabase'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setUser(mapUser(session.user))
      setLoading(false)
    }).catch(() => setLoading(false))

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) setUser(mapUser(session.user))
      else setUser(null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const mapUser = (authUser: any): User => ({
    id: authUser.id,
    email: authUser.email || '',
    display_name: authUser.user_metadata?.display_name || authUser.email?.split('@')[0] || '',
    avatar_url: authUser.user_metadata?.avatar_url || null,
    plan: authUser.user_metadata?.plan || 'free',
    xp: authUser.user_metadata?.xp || 0,
    streak: authUser.user_metadata?.streak || 0,
  })

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'com.hyescriptures.app://login-callback'
      }
    })
    if (error) throw error
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    setUser(null)
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) return
    const { error } = await supabase.auth.updateUser({ data: updates })
    if (error) throw error
    setUser({ ...user, ...updates })
  }

  return { user, loading, signInWithGoogle, signOut, updateProfile, isAuthenticated: !!user }
    }
