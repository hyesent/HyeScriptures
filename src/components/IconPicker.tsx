// src/components/IconPicker.tsx
import React from 'react'
import { useSubscription } from '../hooks/useSubscription'

const ICONS = [
  { id: 'default', name: 'Default' },
  { id: 'messiah', name: 'Messiah' },
  { id: 'rose', name: 'Rose' },
  { id: 'ocean', name: 'Ocean' },
  { id: 'genesis', name: 'Genesis' },
  { id: 'heaven', name: 'Heaven' },
  { id: 'eden', name: 'Eden' },
  { id: 'eclipse', name: 'Eclipse' },
  { id: 'sapphire', name: 'Sapphire' },
  { id: 'midnight', name: 'Midnight' },
  { id: 'amethyst', name: 'Amethyst' },
  { id: 'aurora', name: 'Aurora' },
  { id: 'glory', name: 'Glory' },
  { id: 'judgement', name: 'Judgement' },
  { id: 'moonlight', name: 'Moonlight' },
  { id: 'sunrise', name: 'Sunrise' },
]

export const IconPicker: React.FC = () => {
  const { tier } = useSubscription()
  const [selected, setSelected] = React.useState(localStorage.getItem('app_icon') || 'default')

  if (tier !== 'elder') return null

  const handleSelect = (id: string) => {
    setSelected(id)
    localStorage.setItem('app_icon', id)
  }

  return (
    <div style={{ padding: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px', color: 'var(--text)' }}>App Icon</h3>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 20px' }}>Choose your app icon theme</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {ICONS.map(icon => (
          <button
            key={icon.id}
            onClick={() => handleSelect(icon.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <div style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              overflow: 'hidden',
              border: selected === icon.id ? '2px solid #c9a84c' : '2px solid var(--border-light)',
              transition: 'all 0.2s',
              boxShadow: selected === icon.id ? '0 0 0 3px rgba(201,168,76,0.15)' : 'none',
              background: 'var(--bg-card)',
            }}>
              <img
                src={`/icons/app/${icon.id}.svg`}
                alt={icon.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            </div>
            <span style={{
              fontSize: 10,
              fontWeight: selected === icon.id ? 700 : 500,
              color: selected === icon.id ? '#c9a84c' : 'var(--text-muted)',
              textAlign: 'center',
            }}>
              {icon.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}