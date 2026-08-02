import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { 
  initialSync, 
  startAutoSync, 
  stopAutoSync,
  syncWithCloud,
  getSyncQueue
} from '../lib/cache'

interface SyncContextType {
  // Expose nothing - silent sync only
}

const SyncContext = createContext<SyncContextType>({})

export const useSync = () => useContext(SyncContext)

export const SyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth()

  // Initial sync on login - silent
  useEffect(() => {
    if (user) {
      const doSync = async () => {
        try {
          await initialSync(user.id)
          startAutoSync(user.id)
        } catch {
          // Silent fail - no UI feedback
        }
      }
      doSync()
    } else {
      stopAutoSync()
    }

    return () => stopAutoSync()
  }, [user])

  // Listen for online event - silent sync
  useEffect(() => {
    const handleOnline = async () => {
      if (user) {
        try {
          await syncWithCloud(user.id)
        } catch {
          // Silent fail
        }
      }
    }

    window.addEventListener('app-online', handleOnline)
    return () => window.removeEventListener('app-online', handleOnline)
  }, [user])

  return (
    <SyncContext.Provider value={{}}>
      {children}
    </SyncContext.Provider>
  )
}