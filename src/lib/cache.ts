// ============================================================
// OFFLINE CACHE SYSTEM
// ============================================================

import { supabase } from './supabase'

export interface CacheItem {
  key: string
  data: any
  timestamp: number
  expiresAt?: number
}

export interface SyncQueueItem {
  id: string
  table: string
  operation: 'insert' | 'update' | 'delete'
  data: any
  timestamp: number
  retries: number
}

const CACHE_DB_NAME = 'hyescriptures_cache'
const CACHE_VERSION = 1
const SYNC_QUEUE_KEY = 'hyescriptures_sync_queue'

// ========== INDEXEDDB HELPERS ==========
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(CACHE_DB_NAME, CACHE_VERSION)
    request.onerror = () => reject(request.error)
    request.onsuccess = () => resolve(request.result)
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains('cache')) {
        db.createObjectStore('cache', { keyPath: 'key' })
      }
      if (!db.objectStoreNames.contains('syncQueue')) {
        const store = db.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true })
        store.createIndex('timestamp', 'timestamp')
      }
    }
  })
}

// ========== CACHE OPERATIONS ==========
export const cacheSet = async (key: string, data: any, ttlSeconds: number = 86400): Promise<void> => {
  try {
    const db = await openDB()
    const transaction = db.transaction(['cache'], 'readwrite')
    const store = transaction.objectStore('cache')
    const item: CacheItem = {
      key,
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + (ttlSeconds * 1000)
    }
    store.put(item)
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => resolve()
      transaction.onerror = () => reject(transaction.error)
    })
  } catch (error) {
    console.error('Cache set error:', error)
  }
}

export const cacheGet = async <T>(key: string): Promise<T | null> => {
  try {
    const db = await openDB()
    const transaction = db.transaction(['cache'], 'readonly')
    const store = transaction.objectStore('cache')
    const request = store.get(key)
    
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const result = request.result as CacheItem | undefined
        if (!result) {
          resolve(null)
          return
        }
        // Check expiry
        if (result.expiresAt && Date.now() > result.expiresAt) {
          resolve(null)
          return
        }
        resolve(result.data as T)
      }
      request.onerror = () => reject(request.error)
    })
  } catch (error) {
    console.error('Cache get error:', error)
    return null
  }
}

export const cacheDelete = async (key: string): Promise<void> => {
  try {
    const db = await openDB()
    const transaction = db.transaction(['cache'], 'readwrite')
    const store = transaction.objectStore('cache')
    store.delete(key)
  } catch (error) {
    console.error('Cache delete error:', error)
  }
}

export const cacheClear = async (): Promise<void> => {
  try {
    const db = await openDB()
    const transaction = db.transaction(['cache'], 'readwrite')
    const store = transaction.objectStore('cache')
    store.clear()
  } catch (error) {
    console.error('Cache clear error:', error)
  }
}

// ========== SYNC QUEUE ==========
export const addToSyncQueue = async (
  table: string,
  operation: 'insert' | 'update' | 'delete',
  data: any
): Promise<void> => {
  try {
    const db = await openDB()
    const transaction = db.transaction(['syncQueue'], 'readwrite')
    const store = transaction.objectStore('syncQueue')
    const item: Omit<SyncQueueItem, 'id'> = {
      table,
      operation,
      data,
      timestamp: Date.now(),
      retries: 0
    }
    store.add(item)
  } catch (error) {
    console.error('Sync queue add error:', error)
  }
}

export const getSyncQueue = async (): Promise<SyncQueueItem[]> => {
  try {
    const db = await openDB()
    const transaction = db.transaction(['syncQueue'], 'readonly')
    const store = transaction.objectStore('syncQueue')
    const index = store.index('timestamp')
    const request = index.getAll()
    
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  } catch (error) {
    console.error('Get sync queue error:', error)
    return []
  }
}

export const removeFromSyncQueue = async (id: number): Promise<void> => {
  try {
    const db = await openDB()
    const transaction = db.transaction(['syncQueue'], 'readwrite')
    const store = transaction.objectStore('syncQueue')
    store.delete(id)
  } catch (error) {
    console.error('Remove from sync queue error:', error)
  }
}

export const clearSyncQueue = async (): Promise<void> => {
  try {
    const db = await openDB()
    const transaction = db.transaction(['syncQueue'], 'readwrite')
    const store = transaction.objectStore('syncQueue')
    store.clear()
  } catch (error) {
    console.error('Clear sync queue error:', error)
  }
}

// ========== SYNC ENGINE ==========
export const syncWithCloud = async (userId: string): Promise<void> => {
  const queue = await getSyncQueue()
  if (queue.length === 0) return

  for (const item of queue) {
    try {
      const { table, operation, data } = item
      
      if (operation === 'insert') {
        const { error } = await supabase
          .from(table)
          .insert(data)
        if (error) throw error
      } else if (operation === 'update') {
        const { error } = await supabase
          .from(table)
          .update(data)
          .eq('id', data.id)
        if (error) throw error
      } else if (operation === 'delete') {
        const { error } = await supabase
          .from(table)
          .delete()
          .eq('id', data.id)
        if (error) throw error
      }
      
      // Remove from queue on success
      await removeFromSyncQueue(item.id as number)
    } catch (error) {
      console.error('Sync error for item:', item, error)
      // Increment retries
      if (item.retries >= 5) {
        await removeFromSyncQueue(item.id as number)
      }
    }
  }
}

// ========== DATA PERSISTENCE ==========
export const saveUserData = async (userId: string, data: any): Promise<void> => {
  const key = `user_${userId}_data`
  await cacheSet(key, data)
}

export const loadUserData = async (userId: string): Promise<any> => {
  const key = `user_${userId}_data`
  return await cacheGet(key)
}

export const saveBookmarks = async (userId: string, bookmarks: string[]): Promise<void> => {
  const key = `user_${userId}_bookmarks`
  await cacheSet(key, bookmarks)
  await addToSyncQueue('user_data', 'update', { id: userId, bookmarks })
}

export const saveHighlights = async (userId: string, highlights: any[]): Promise<void> => {
  const key = `user_${userId}_highlights`
  await cacheSet(key, highlights)
  await addToSyncQueue('user_data', 'update', { id: userId, highlights })
}

export const saveNotes = async (userId: string, notes: any[]): Promise<void> => {
  const key = `user_${userId}_notes`
  await cacheSet(key, notes)
  await addToSyncQueue('notes', 'insert', { user_id: userId, notes })
}

export const loadAllUserData = async (userId: string): Promise<any> => {
  const data = await loadUserData(userId)
  if (data) return data
  
  // Try cloud
  const { data: cloudData, error } = await supabase
    .from('user_data')
    .select('*')
    .eq('user_id', userId)
    .single()
  
  if (cloudData && !error) {
    await saveUserData(userId, cloudData)
    return cloudData
  }
  
  return null
}

// ========== INITIAL SYNC ON LOGIN ==========
export const initialSync = async (userId: string): Promise<void> => {
  // Pull cloud data
  const cloudData = await loadAllUserData(userId)
  
  // Push local queue
  await syncWithCloud(userId)
  
  return cloudData
}

// ========== AUTO SYNC INTERVAL ==========
let syncInterval: NodeJS.Timeout | null = null

export const startAutoSync = (userId: string, intervalMinutes: number = 5): void => {
  if (syncInterval) clearInterval(syncInterval)
  
  syncInterval = setInterval(() => {
    syncWithCloud(userId)
  }, intervalMinutes * 60 * 1000)
}

export const stopAutoSync = (): void => {
  if (syncInterval) {
    clearInterval(syncInterval)
    syncInterval = null
  }
}