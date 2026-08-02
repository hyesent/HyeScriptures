// src/lib/notifications.ts

export interface ReminderSettings {
  enabled: boolean
  morning: boolean
  morningTime: string
  evening: boolean
  eveningTime: string
  custom: boolean
  customTime: string
}

export const defaultReminderSettings: ReminderSettings = {
  enabled: true,
  morning: true,
  morningTime: '05:00',
  evening: true,
  eveningTime: '20:00',
  custom: false,
  customTime: '12:00'
}

export const getMorningMessages = () => [
  '🌅 Good Morning, Beloved! Before the world wakes up, He is already thinking of you. Start your day in His presence. ✨',
  '🌄 Rise and Shine! His mercies are new every morning. Let His joy be your strength today. ☀️',
  '☀️ Morning Light! You are the light of the world. Let your light shine before others today. 🌟',
  '🌸 Good Morning! He has plans to prosper you and give you hope. Trust Him with this new day. 💫',
  '🌅 The Lord is Here! "I am with you always." Rest in His presence as you begin your day. 🤍'
]

export const getEveningMessages = () => [
  '🌙 Good Evening, Dear One! Lay your burdens at His feet. He cares for you and will give you rest. 🕊️',
  '⭐ Evening Peace! "Be still and know that I am God." Let His peace guard your heart tonight. 🌙',
  '🌃 Quiet Evening! Before you sleep, remember you are loved with an everlasting love. 💙',
  '🌟 Night Prayer! Give thanks for today. He has been faithful, and He will be faithful tomorrow. 🙏',
  '🌙 Rest in Him! "I will both lie down in peace, and sleep; for You alone make me dwell in safety." 💤'
]

export const getRandomMessage = (messages: string[]): string => {
  return messages[Math.floor(Math.random() * messages.length)]
}

export const registerServiceWorkerForNotifications = async (): Promise<boolean> => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers not supported')
    return false
  }

  try {
    const registration = await navigator.serviceWorker.ready
    
    // Request notification permission
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        // Send settings to service worker
        const savedSettings = localStorage.getItem('reminder_settings')
        if (savedSettings) {
          const settings = JSON.parse(savedSettings)
          registration.active?.postMessage({
            type: 'UPDATE_REMINDER_SETTINGS',
            payload: settings
          })
        }
        return true
      }
    }
    return false
  } catch (error) {
    console.error('Service worker registration error:', error)
    return false
  }
}

export const testNotification = (): void => {
  if ('Notification' in window && Notification.permission === 'granted') {
    const messages = [
      '💌 Just a gentle reminder: You are loved beyond measure.',
      '📖 Open your Bible today. He has something to say to you.',
      '🙏 Take a moment to pray. He is listening.',
      '✨ Let your light shine. The world needs your light today.',
      '🌿 Be still and know that He is God.'
    ]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    
    new Notification('💫 A Gentle Reminder', {
      body: randomMessage,
      icon: '/icons/icon-192x192.png'
    })
  }
}

export const saveReminderSettings = async (settings: ReminderSettings): Promise<void> => {
  // Save to localStorage
  localStorage.setItem('reminder_settings', JSON.stringify(settings))
  
  // Send to service worker
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready
    registration.active?.postMessage({
      type: 'UPDATE_REMINDER_SETTINGS',
      payload: settings
    })
  }
}

export const getReminderSettings = (): ReminderSettings => {
  try {
    const saved = localStorage.getItem('reminder_settings')
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error loading reminder settings:', error)
  }
  return defaultReminderSettings
}