import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { User } from '../lib/supabase'

const AUTH_CACHE_KEY = 'hyescriptures_auth_cache'

interface AuthCache {
  userId: string
  email: string
  display_name: string
  avatar_url: string | null
  cachedAt: number
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    // STEP 1: Check localStorage cache first (instant load)
    const cached = getCachedAuth()
    if (cached) {
      setUser({
        id: cached.userId,
        email: cached.email,
        display_name: cached.display_name,
        avatar_url: cached.avatar_url,
        plan: 'free',
        xp: 0,
        streak: 0,
      })
      setLoading(false)
    }

    // STEP 2: Verify with Supabase session
    const { data: { session } } = await supabase.auth.getSession()
    if (session?.user) {
      const mappedUser = mapUser(session.user)
      setUser(mappedUser)
      saveAuthCache(mappedUser)
    } else if (!cached) {
      setUser(null)
    }
    setLoading(false)

    // STEP 3: Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const mappedUser = mapUser(session.user)
        setUser(mappedUser)
        saveAuthCache(mappedUser)
      } else {
        setUser(null)
        clearAuthCache()
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }

  const getCachedAuth = (): AuthCache | null => {
    try {
      const data = localStorage.getItem(AUTH_CACHE_KEY)
      if (!data) return null
      const cache: AuthCache = JSON.parse(data)
      if (Date.now() - cache.cachedAt > 7 * 24 * 60 * 60 * 1000) {
        localStorage.removeItem(AUTH_CACHE_KEY)
        return null
      }
      return cache
    } catch { return null }
  }

  const saveAuthCache = (userData: User) => {
    const cache: AuthCache = {
      userId: userData.id,
      email: userData.email,
      display_name: userData.display_name || userData.email?.split('@')[0] || '',
      avatar_url: userData.avatar_url,
      cachedAt: Date.now(),
    }
    localStorage.setItem(AUTH_CACHE_KEY, JSON.stringify(cache))
  }

  const clearAuthCache = () => localStorage.removeItem(AUTH_CACHE_KEY)

  const mapUser = (authUser: any): User => ({
    id: authUser.id,
    email: authUser.email || '',
    display_name: authUser.user_metadata?.display_name || authUser.email?.split('@')[0] || '',
    avatar_url: authUser.user_metadata?.avatar_url || null,
    plan: authUser.user_metadata?.plan || 'free',
    xp: authUser.user_metadata?.xp || 0,
    streak: authUser.user_metadata?.streak || 0,
  })

  const isCapacitor = (): boolean => {
    return !!(window as any).Capacitor?.isNativePlatform?.()
  }

  // ==========================================
  // AUTH METHODS
  // ==========================================

  const signInWithEmail = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  const signUp = async (email: string, password: string, displayName: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName },
      }
    })
    if (error) throw error
  }

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
  }

  const signInWithGoogle = async () => {
    const options: any = {}
    if (isCapacitor()) options.redirectTo = 'com.hyescriptures.app://login-callback'
    await supabase.auth.signInWithOAuth({ provider: 'google', options })
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    clearAuthCache()
    setUser(null)
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user) return
    const { error } = await supabase.auth.updateUser({ data: updates })
    if (error) throw error
    const updated = { ...user, ...updates }
    setUser(updated)
    saveAuthCache(updated)
  }

  return {
    user,
    loading,
    signInWithEmail,
    signUp,
    resetPassword,
    signInWithGoogle,
    signOut,
    updateProfile,
    isAuthenticated: !!user,
  }
        }
