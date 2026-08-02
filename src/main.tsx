import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


// Register service worker silently - no console logs in production
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(() => {}) // Silent fail - user doesn't need to know
  })
}

// Register background sync for offline data
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.sync.register('sync-user-data')
      .catch(() => {}) // Silent fail
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)