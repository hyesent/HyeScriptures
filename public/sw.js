// ============================================================
// HYESCRIPTURES SERVICE WORKER
// ============================================================

const CACHE_NAME = 'hyescriptures-v1'
const OFFLINE_URL = '/offline.html'

// Assets to cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/assets/index.css',
  '/assets/index.js',
]

// ============================================================
// INSTALL
// ============================================================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => self.skipWaiting())
  )
})

// ============================================================
// ACTIVATE
// ============================================================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      self.clients.claim()
      
      if ('periodicSync' in self.registration) {
        self.registration.periodicSync.register('daily-reminder', {
          minInterval: 60 * 60 * 1000
        }).catch(() => {
          console.log('Periodic sync not available')
        })
      }
    })
  )
})

// ============================================================
// FETCH
// ============================================================
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  if (!event.request.url.startsWith(self.location.origin)) return
  if (event.request.url.includes('supabase.co')) return

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          fetch(event.request).then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone()
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone)
              })
            }
          }).catch(() => {})
          return cachedResponse
        }

        return fetch(event.request)
          .then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone()
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone)
              })
            }
            return response
          })
          .catch(() => {
            return caches.match(OFFLINE_URL)
          })
      })
  )
})

// ============================================================
// BACKGROUND SYNC
// ============================================================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-user-data') {
    event.waitUntil(syncUserData())
  }
})

const syncUserData = async () => {
  try {
    const clients = await self.clients.matchAll()
    if (clients.length > 0) {
      clients[0].postMessage({ type: 'SYNC_START' })
    }
  } catch (error) {
    console.error('Background sync error:', error)
  }
}

// ============================================================
// PERIODIC SYNC - DAILY REMINDERS
// ============================================================
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'daily-reminder') {
    event.waitUntil(checkAndSendReminder())
  }
})

// ============================================================
// PUSH NOTIFICATIONS
// ============================================================
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {}
  
  const options = {
    body: data.body || 'Time to read God\'s word!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [200, 100, 200],
    requireInteraction: true,
    data: {
      url: data.url || '/',
      type: data.type || 'reminder'
    },
    actions: [
      {
        action: 'open',
        title: '📖 Read Now'
      },
      {
        action: 'snooze',
        title: '⏰ Snooze'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification(
      data.title || '🙏 Daily Devotional',
      options
    )
  )
})

// ============================================================
// NOTIFICATION CLICK
// ============================================================
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  const urlToOpen = event.notification.data?.url || '/'
  const type = event.notification.data?.type || ''

  if (event.action === 'snooze') {
    event.waitUntil(
      self.registration.showNotification('⏰ Reminder', {
        body: 'We\'ll remind you again in 10 minutes. 😊',
        icon: '/icons/icon-192x192.png',
        requireInteraction: true
      })
    )
    setTimeout(async () => {
      try {
        const gentleMessages = [
          '✨ Take a moment to rest in His presence.',
          '📖 Open your Bible and let God speak to you.',
          '🙏 He is waiting to meet with you.',
          '💫 Just a gentle reminder of His love for you.',
          '🌿 Breathe. He is with you.'
        ]
        const randomMessage = gentleMessages[Math.floor(Math.random() * gentleMessages.length)]
        
        await self.registration.showNotification('⏰ Gentle Reminder', {
          body: randomMessage,
          icon: '/icons/icon-192x192.png',
          requireInteraction: true,
          data: {
            url: '/',
            type: 'reminder'
          }
        })
      } catch (error) {
        console.error('Snooze notification error:', error)
      }
    }, 10 * 60 * 1000)
    return
  }

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen)
      }
    })
  )
})

// ============================================================
// MESSAGE HANDLER
// ============================================================
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'UPDATE_REMINDER_SETTINGS') {
    event.waitUntil(updateReminderSettings(event.data.payload))
  }
  
  if (event.data && event.data.type === 'TRIGGER_REMINDER') {
    event.waitUntil(sendManualReminder(event.data.payload))
  }
})

// ============================================================
// REMINDER FUNCTIONS
// ============================================================

async function checkAndSendReminder() {
  try {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()

    if ((hour === 5 && minute === 0) || (hour === 20 && minute === 0)) {
      const isMorning = hour === 5
      const settings = await getReminderSettings()
      
      if (settings && settings.enabled) {
        const shouldSend = isMorning ? settings.morning : settings.evening
        
        if (shouldSend) {
          const notification = isMorning ? getMorningMessage() : getEveningMessage()
          
          const clients = await self.clients.matchAll()
          clients.forEach(client => {
            client.postMessage({
              type: 'SHOW_REMINDER',
              payload: { 
                title: notification.title, 
                body: notification.body, 
                isMorning 
              }
            })
          })
          
          await self.registration.showNotification(notification.title, {
            body: notification.body,
            icon: '/icons/icon-192x192.png',
            badge: '/icons/badge-72x72.png',
            vibrate: [200, 100, 200],
            requireInteraction: true,
            data: {
              url: '/devotional',
              type: 'devotional',
              isMorning: isMorning
            }
          })
        }
      }
    }
  } catch (error) {
    console.error('Error checking reminder:', error)
  }
}

function getMorningMessage() {
  const messages = [
    {
      title: '🌅 Good Morning, Beloved!',
      body: 'Before the world wakes up, He is already thinking of you. Start your day in His presence. ✨'
    },
    {
      title: '🌄 Rise and Shine!',
      body: 'His mercies are new every morning. Let His joy be your strength today. ☀️'
    },
    {
      title: '☀️ Morning Light',
      body: 'You are the light of the world. Let your light shine before others today. 🌟'
    },
    {
      title: '🌸 Good Morning!',
      body: 'He has plans to prosper you and give you hope. Trust Him with this new day. 💫'
    },
    {
      title: '🌅 The Lord is Here',
      body: '"I am with you always." Rest in His presence as you begin your day. 🤍'
    }
  ]
  return messages[Math.floor(Math.random() * messages.length)]
}

function getEveningMessage() {
  const messages = [
    {
      title: '🌙 Good Evening, Dear One',
      body: 'Lay your burdens at His feet. He cares for you and will give you rest. 🕊️'
    },
    {
      title: '⭐ Evening Peace',
      body: '"Be still and know that I am God." Let His peace guard your heart tonight. 🌙'
    },
    {
      title: '🌃 Quiet Evening',
      body: 'Before you sleep, remember you are loved with an everlasting love. 💙'
    },
    {
      title: '🌟 Night Prayer',
      body: 'Give thanks for today. He has been faithful, and He will be faithful tomorrow. 🙏'
    },
    {
      title: '🌙 Rest in Him',
      body: '"I will both lie down in peace, and sleep; for You alone make me dwell in safety." 💤'
    }
  ]
  return messages[Math.floor(Math.random() * messages.length)]
}

async function getReminderSettings() {
  try {
    const cache = await caches.open(CACHE_NAME)
    const response = await cache.match('/reminder-settings')
    if (response) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.error('Error getting reminder settings:', error)
  }
  
  return {
    enabled: true,
    morning: true,
    morningTime: '05:00',
    evening: true,
    eveningTime: '20:00'
  }
}

async function updateReminderSettings(settings) {
  try {
    const cache = await caches.open(CACHE_NAME)
    const response = new Response(JSON.stringify(settings), {
      headers: { 'Content-Type': 'application/json' }
    })
    await cache.put('/reminder-settings', response)
    console.log('Reminder settings updated')
  } catch (error) {
    console.error('Error updating reminder settings:', error)
  }
}

async function sendManualReminder(payload) {
  try {
    const { title, body } = payload || {
      title: '💌 Just a Gentle Reminder',
      body: 'Take a moment to read His word today. He has something to say to you. ✨'
    }
    
    await self.registration.showNotification(title, {
      body: body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      vibrate: [200, 100, 200],
      requireInteraction: true,
      data: {
        url: '/',
        type: 'manual'
      }
    })
  } catch (error) {
    console.error('Error sending manual reminder:', error)
  }
}

console.log('🌿 Hyescriptures: Service Worker loaded with Daily Reminders')