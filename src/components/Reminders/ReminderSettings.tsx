import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bell, 
  BellOff, 
  Sun, 
  Moon, 
  Clock, 
  Save,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface ReminderSettingsProps {
  onBack: () => void
}

interface Settings {
  enabled: boolean
  morning: boolean
  morningTime: string
  evening: boolean
  eveningTime: string
  custom: boolean
  customTime: string
}

const defaultSettings: Settings = {
  enabled: true,
  morning: true,
  morningTime: '05:00',
  evening: true,
  eveningTime: '20:00',
  custom: false,
  customTime: '12:00'
}

export const ReminderSettings: React.FC<ReminderSettingsProps> = ({ onBack }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [notificationsPermission, setNotificationsPermission] = useState<NotificationPermission>('default')

  // Load settings on mount
  useEffect(() => {
    loadSettings()
    checkNotificationPermission()
  }, [])

  const checkNotificationPermission = () => {
    if ('Notification' in window) {
      setNotificationsPermission(Notification.permission)
    }
  }

  const loadSettings = () => {
    try {
      const saved = localStorage.getItem('reminder_settings')
      if (saved) {
        setSettings(JSON.parse(saved))
      }
    } catch (error) {
      console.error('Error loading settings:', error)
    }
  }

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      setError('Notifications are not supported in this browser.')
      return false
    }

    if (Notification.permission === 'granted') {
      return true
    }

    try {
      const permission = await Notification.requestPermission()
      setNotificationsPermission(permission)
      
      if (permission === 'granted') {
        // Register with service worker
        if ('serviceWorker' in navigator) {
          const registration = await navigator.serviceWorker.ready
          // Notify SW of settings update
          registration.active?.postMessage({
            type: 'UPDATE_REMINDER_SETTINGS',
            payload: settings
          })
        }
        return true
      } else {
        setError('Please enable notifications in your browser settings.')
        return false
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error)
      setError('Could not request notification permission.')
      return false
    }
  }

  const handleSave = async () => {
    setLoading(true)
    setError(null)
    setSaved(false)

    // Request permission if not granted
    if (notificationsPermission !== 'granted') {
      const granted = await requestNotificationPermission()
      if (!granted) {
        setLoading(false)
        return
      }
    }

    try {
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

      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
      
      // Show confirmation notification
      if (Notification.permission === 'granted') {
        new Notification('✅ Reminders Saved!', {
          body: settings.enabled 
            ? 'We\'ll remind you daily. 🙏' 
            : 'Reminders have been turned off.',
          icon: '/icons/icon-192x192.png'
        })
      }
    } catch (error) {
      console.error('Error saving settings:', error)
      setError('Failed to save settings. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleSetting = (key: keyof Settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            🔔 Daily Reminders
          </h1>
          <div className="w-16"></div>
        </div>

        {/* Permission Status */}
        {notificationsPermission !== 'granted' && (
          <div className="mb-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl flex items-start gap-3">
            <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                Notifications are not enabled
              </p>
              <p className="text-sm text-amber-600 dark:text-amber-400">
                Enable notifications to receive daily reminders.
              </p>
            </div>
          </div>
        )}

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Enable/Disable Toggle */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {settings.enabled ? (
                  <Bell className="text-blue-600 dark:text-blue-400" size={24} />
                ) : (
                  <BellOff className="text-gray-400" size={24} />
                )}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {settings.enabled ? 'Reminders are ON' : 'Reminders are OFF'}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {settings.enabled 
                      ? 'You\'ll receive daily reminders' 
                      : 'Tap to enable reminders'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('enabled')}
                className={`
                  relative w-14 h-8 rounded-full transition-all duration-300
                  ${settings.enabled 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
                  }
                `}
              >
                <div
                  className={`
                    absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300
                    ${settings.enabled ? 'left-7' : 'left-1'}
                  `}
                />
              </button>
            </div>
          </div>

          {/* Settings */}
          <AnimatePresence>
            {settings.enabled && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {/* Morning Reminder */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-900/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center">
                        <Sun size={20} className="text-amber-700 dark:text-amber-300" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Morning Devotional</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{settings.morningTime}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSetting('morning')}
                      className={`
                        relative w-12 h-7 rounded-full transition-all duration-300
                        ${settings.morning 
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600' 
                          : 'bg-gray-300 dark:bg-gray-600'
                        }
                      `}
                    >
                      <div
                        className={`
                          absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300
                          ${settings.morning ? 'left-6' : 'left-1'}
                        `}
                      />
                    </button>
                  </div>

                  {/* Evening Reminder */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-200 dark:bg-indigo-800 flex items-center justify-center">
                        <Moon size={20} className="text-indigo-700 dark:text-indigo-300" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Evening Devotional</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{settings.eveningTime}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSetting('evening')}
                      className={`
                        relative w-12 h-7 rounded-full transition-all duration-300
                        ${settings.evening 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                          : 'bg-gray-300 dark:bg-gray-600'
                        }
                      `}
                    >
                      <div
                        className={`
                          absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300
                          ${settings.evening ? 'left-6' : 'left-1'}
                        `}
                      />
                    </button>
                  </div>

                  {/* Message Preview */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Preview Message</p>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                         Good Morning, Beloved!
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Before the world wakes up, He is already thinking of you. Start your day in His presence. ✨
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Save Button */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleSave}
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                '⏳ Saving...'
              ) : saved ? (
                <>
                  <CheckCircle size={20} />
                  Saved!
                </>
              ) : (
                <>
                  <Save size={20} />
                  Save Reminder Settings
                </>
              )}
            </button>

            {error && (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400 text-center">
                {error}
              </p>
            )}
          </div>
        </motion.div>

        {/* Info Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
             You will receive notifications at your chosen times.
            <br />
             Make sure your browser allows notifications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReminderSettings