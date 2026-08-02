import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

const API_URL = 'https://hyelearner-api.onrender.com'

export const UpgradeSuccess: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  
  const reference = searchParams.get('reference')
  const plan = searchParams.get('plan')

  useEffect(() => {
    if (!reference) {
      setStatus('error')
      setMessage('No payment reference found.')
      return
    }

    fetch(`${API_URL}/subscriptions/verify?reference=${reference}`)
      .then(r => r.json())
      .then(data => {
        if (data.success || data.data?.status === 'success') {
          setStatus('success')
          setMessage(`Welcome to ${plan === 'elder' ? 'Elder' : 'Pro'}! Your subscription is now active.`)
          setTimeout(() => navigate('/'), 3000)
        } else {
          setStatus('error')
          setMessage('Payment verification failed. Please contact support if money was deducted.')
        }
      })
      .catch(() => {
        setStatus('error')
        setMessage('Could not verify payment. Please check your connection.')
      })
  }, [reference, plan])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '60vh', padding: 32, textAlign: 'center',
    }}>
      {status === 'loading' && (
        <>
          <Loader2 size={48} style={{ animation: 'spin 1s linear infinite', color: '#c9a84c', marginBottom: 16 }} />
          <h2>Verifying your payment...</h2>
          <p style={{ color: '#666' }}>Please wait while we confirm your subscription.</p>
        </>
      )}
      
      {status === 'success' && (
        <>
          <CheckCircle size={48} style={{ color: '#22c55e', marginBottom: 16 }} />
          <h2>Payment Successful!</h2>
          <p style={{ color: '#666', maxWidth: 400 }}>{message}</p>
          <p style={{ color: '#999', fontSize: 13, marginTop: 16 }}>Redirecting you home...</p>
        </>
      )}
      
      {status === 'error' && (
        <>
          <XCircle size={48} style={{ color: '#ef4444', marginBottom: 16 }} />
          <h2>Verification Failed</h2>
          <p style={{ color: '#666', maxWidth: 400 }}>{message}</p>
          <button
            onClick={() => navigate('/')}
            style={{
              marginTop: 20, padding: '12px 32px', background: '#c9a84c',
              color: 'white', border: 'none', borderRadius: 12, fontWeight: 600, cursor: 'pointer',
            }}
          >
            Go Home
          </button>
        </>
      )}
    </div>
  )
}