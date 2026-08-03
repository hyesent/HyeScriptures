// src/components/AI/AIChat.tsx
import React, { useState, useRef, useEffect } from 'react'
import type { AIMessage } from '../../lib/ai'
import { chatWithAI } from '../../lib/ai'
import { useAILimits } from '../../hooks/useAILimits'
import { useSubscription } from '../../hooks/useSubscription'
import { AICounter } from '../AICounter'
import { Crown } from 'lucide-react'
import styles from './AIChat.module.css'

const DoveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H22M19 15.5c-2-1.5-4-1.5-6 0M12 8c0-2 1.5-3.5 3.5-3.5S19 6 19 8c0 3-3.5 6-7 9.5C8.5 14 5 11 5 8c0-2 1.5-3.5 3.5-3.5S12 6 12 8z" />
    <path d="M8 14c-1.5 1-3.5 1-5 0" opacity="0.4" />
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

export const AIChat: React.FC = () => {
  const { tier } = useSubscription()
  const [messages, setMessages] = useState<AIMessage[]>([
    { role: 'assistant', content: 'Hello! I\'m your Bible study assistant. Ask me anything about Scripture, theology, or faith.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { checkAndIncrement, remaining } = useAILimits()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const { allowed, message } = checkAndIncrement()
    if (!allowed) {
      setError(message || 'AI limit reached')
      setTimeout(() => setError(null), 4000)
      return
    }

    const userMessage: AIMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const response = await chatWithAI([...messages, userMessage])
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I could not respond at this time.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (tier !== 'elder') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: 32, textAlign: 'center', gap: 16 }}>
        <Crown size={48} style={{ color: '#c9a84c', opacity: 0.6 }} />
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>Shepherd is for Elders</h2>
        <p style={{ color: '#888', maxWidth: 300 }}>Upgrade to Elder to chat with Shepherd, your AI Bible study assistant.</p>
        <button
          onClick={() => window.location.href = '/upgrade'}
          style={{ padding: '12px 28px', background: '#c9a84c', color: 'white', border: 'none', borderRadius: 12, fontWeight: 600, cursor: 'pointer', fontSize: 14 }}
        >
          Upgrade to Elder — $4.99/yr
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.role === 'assistant' ? styles.assistant : styles.user}`}
          >
            <div className={styles.avatar}>
              {msg.role === 'assistant' ? <DoveIcon /> : <UserIcon />}
            </div>
            <div className={styles.bubble}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className={styles.message}>
            <div className={styles.avatar}><DoveIcon /></div>
            <div className={`${styles.bubble} ${styles.typing}`}>...</div>
          </div>
        )}
        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        <AICounter />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          className={styles.input}
          disabled={loading}
        />
        <button
          className={styles.sendBtn}
          onClick={handleSend}
          disabled={!input.trim() || loading}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  )
}
