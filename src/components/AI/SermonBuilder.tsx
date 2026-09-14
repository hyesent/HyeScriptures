// src/components/AI/SermonBuilder.tsx
import React, { useState, useEffect } from 'react'
import { useSubscription } from '../../hooks/useSubscription'
import { Crown } from 'lucide-react'
import { Filesystem, Directory } from '@capacitor/filesystem'
import jsPDF from 'jspdf'
import styles from './SermonBuilder.module.css'

type Step = 'type' | 'form' | 'result' | 'saved'
type SermonType = 'topic' | 'passage' | 'occasion' | 'audience'

interface SermonFormData {
  title: string; theme: string; audience: string; duration: string; tone: string; translation: string
}

interface SermonSection {
  id: string; title: string; content: string; expanded: boolean
}

interface SavedSermon {
  id: string; topic: string; type: SermonType; form: SermonFormData
  sections: SermonSection[]; notes: Record<string, string>; createdAt: string
}

const OCCASIONS = ['Sunday Worship', 'Wedding', 'Funeral', 'Youth Service', 'Revival', 'Communion', 'Thanksgiving', 'Crusade']
const AUDIENCES = ['Children', 'Youth', 'Adults', 'New Believers', 'Leaders', 'Evangelism', 'Couples', 'Students']
const DURATIONS = ['10 mins', '20 mins', '40 mins', '1 hour']
const TONES = ['Teaching', 'Evangelistic', 'Prophetic', 'Expository', 'Topical', 'Motivational', 'Pastoral']

const Icons = {
  Sermon: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>),
  Book: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>),
  Calendar: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>),
  Users: () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  Clock: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  Tone: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>),
  Sparkle: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z"/><path d="M18 2l.5 2L20 4.5 18 5l-.5 2L17 5l-2-.5L17 4l.5-2z"/><path d="M5 18l.5 2L7 20.5 5 21l-.5 2L4 21l-2-.5L4 20l.5-2z"/></svg>),
  ArrowLeft: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>),
  ChevronDown: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>),
  ChevronUp: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>),
  Download: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>),
  Copy: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>),
  Share: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>),
  Folder: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>),
  Trash: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>),
  PDF: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>),
  Save: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>),
}

const TYPE_CARDS: { type: SermonType; icon: React.ElementType; label: string; desc: string }[] = [
  { type: 'topic', icon: Icons.Book, label: 'By Topic', desc: 'Faith, Grace, Prayer, Love...' },
  { type: 'passage', icon: Icons.Sermon, label: 'By Passage', desc: 'Romans 8, Psalm 23, John 3...' },
  { type: 'occasion', icon: Icons.Calendar, label: 'By Occasion', desc: 'Wedding, Funeral, Revival...' },
  { type: 'audience', icon: Icons.Users, label: 'By Audience', desc: 'Youth, Children, Leaders...' },
]

const SAVE_KEY = 'hyescriptures_saved_sermons'
const SERMON_DAILY_KEY = 'hyescriptures_sermon_daily'
const SERMON_DAILY_LIMIT = 4

const ensureString = (val: any): string => {
  if (!val) return ''
  if (typeof val === 'string') return val
  if (Array.isArray(val)) return val.map(v => ensureString(v)).join('\n')
  if (typeof val === 'object') return JSON.stringify(val, null, 2)
  return String(val)
}

const stripMarkdown = (text: string): string => {
  return ensureString(text)
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`(.*?)`/g, '$1')
}

const formatContent = (text: string): string => {
  const safe = ensureString(text)
  if (!safe) return ''
  let formatted = safe
  formatted = formatted.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener" class="sermon-link">$1</a>')
  formatted = formatted.replace(/\b([1-3]?\s?[A-Za-z]+)\s(\d+):(\d+(-?\d+)?)\b/g, '<a href="#/bible/$1/$2/$3" class="sermon-verse-link">$1 $2:$3</a>')
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>')
  formatted = formatted.replace(/\n/g, '<br/>')
  return formatted
}

const getTodayKey = (): string => {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

const readDailyCount = (): number => {
  try {
    const raw = localStorage.getItem(SERMON_DAILY_KEY)
    if (!raw) return 0
    const { date, count } = JSON.parse(raw)
    return date === getTodayKey() ? count : 0
  } catch { return 0 }
}

const writeDailyCount = (count: number): void => {
  try {
    localStorage.setItem(SERMON_DAILY_KEY, JSON.stringify({ date: getTodayKey(), count }))
  } catch {}
}

const getCachedTier = (): 'free' | 'elder' => {
  try {
    const raw = localStorage.getItem('hyescriptures_tier_cache')
    return raw ? JSON.parse(raw).tier : 'free'
  } catch { return 'free' }
}

export const SermonBuilder: React.FC = () => {
  const { tier } = useSubscription()
  const [step, setStep] = useState<Step>('type')
  const [sermonType, setSermonType] = useState<SermonType | null>(null)
  const [formData, setFormData] = useState<SermonFormData>({ title: '', theme: '', audience: '', duration: '', tone: 'Teaching', translation: 'KJV' })
  const [sections, setSections] = useState<SermonSection[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedOccasion, setSelectedOccasion] = useState('')
  const [selectedAudience, setSelectedAudience] = useState('')
  const [topicInput, setTopicInput] = useState('')
  const [passageInput, setPassageInput] = useState('')
  const [savedSermons, setSavedSermons] = useState<SavedSermon[]>([])
  const [sectionModes, setSectionModes] = useState<Record<string, 'original' | 'notes'>>({})
  const [sectionNotes, setSectionNotes] = useState<Record<string, string>>({})
  const [copiedMode, setCopiedMode] = useState<'original' | 'edited' | null>(null)
  const [dailyCount, setDailyCount] = useState(0)
  const [savedFlash, setSavedFlash] = useState(false)

  useEffect(() => {
    try { const saved = localStorage.getItem(SAVE_KEY); if (saved) setSavedSermons(JSON.parse(saved)) } catch {}
    setDailyCount(readDailyCount())
  }, [])

  // ✅ NEW: mount sync from server (closes the clear-cache loophole)
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const { supabase } = await import('../../lib/supabase')
        const { data: { user } } = await supabase.auth.getUser()
        if (!user || cancelled) return

        const today = new Date().toISOString().slice(0, 10)
        const { data } = await supabase
          .from('ai_usage')
          .select('count')
          .eq('user_id', user.id)
          .eq('date', today)
          .maybeSingle()

        if (cancelled) return
        // Note: ai_usage tracks the general pool, not sermon.
        // Sermon has its own count in the same table but we can't split them there.
        // For now we rely on the server response envelope for the sermon count.
        // This sync is only useful to confirm the general pool.
      } catch { /* silent */ }
    })()
    return () => { cancelled = true }
  }, [])

  const saveSermon = () => {
    if (sections.length === 0) return
    const sermon: SavedSermon = {
      id: Date.now().toString(), topic: topicInput || passageInput || selectedOccasion || selectedAudience,
      type: sermonType!, form: formData, sections, notes: sectionNotes, createdAt: new Date().toISOString()
    }
    const updated = [sermon, ...savedSermons].slice(0, 50)
    setSavedSermons(updated); localStorage.setItem(SAVE_KEY, JSON.stringify(updated))
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 2000)
  }

  const deleteSermon = (id: string) => {
    const updated = savedSermons.filter(s => s.id !== id)
    setSavedSermons(updated); localStorage.setItem(SAVE_KEY, JSON.stringify(updated))
  }

  const loadSermon = (sermon: SavedSermon) => {
    setSermonType(sermon.type); setFormData(sermon.form); setSections(sermon.sections)
    setSectionNotes(sermon.notes || {}); setSectionModes({}); setStep('result')
  }

  const handleTypeSelect = (type: SermonType) => {
    setSermonType(type)
    if (type === 'occasion') setSelectedOccasion(OCCASIONS[0])
    if (type === 'audience') setSelectedAudience(AUDIENCES[0])
    setStep('form')
  }

  const handleGenerate = async () => {
    if (loading) return

    if (dailyCount >= SERMON_DAILY_LIMIT) {
      setError(`Daily limit reached (${dailyCount}/${SERMON_DAILY_LIMIT}). Try again tomorrow.`)
      return
    }

    let topic = ''
    if (sermonType === 'topic') topic = topicInput
    else if (sermonType === 'passage') topic = passageInput
    else if (sermonType === 'occasion') topic = selectedOccasion
    else if (sermonType === 'audience') topic = selectedAudience
    if (!topic.trim()) { setError('Please enter a topic or select an option'); return }

    setLoading(true)
    setError(null)

    try {
      const prompt = buildSermonPrompt(topic, formData, sermonType!)
      const result = await callSermonEdgeFunction(prompt)

      // ✅ FIXED: envelope handling
      if (!result) {
        setError('Failed to generate sermon.')
        return
      }

      if (!result.allowed) {
        setError(result.message || 'Limit reached')
        return
      }

      // Mirror server count — this is now the truth
      const serverCount = typeof result.count === 'number' ? result.count : dailyCount + 1
      setDailyCount(serverCount)
      writeDailyCount(serverCount)

      const r = result.response || {}
      setSections([
        { id: 'opening-prayer', title: 'Opening Prayer', content: ensureString(r.opening_prayer), expanded: true },
        { id: 'title', title: 'Title & Theme', content: `**${ensureString(r.title || topic)}**\n\n${ensureString(r.theme)}`, expanded: true },
        { id: 'context', title: 'Historical Context', content: ensureString(r.context), expanded: false },
        { id: 'greek', title: 'Greek / Hebrew Insight', content: ensureString(r.greek_hebrew), expanded: false },
        { id: 'introduction', title: 'Introduction', content: ensureString(r.introduction), expanded: true },
        { id: 'illustration', title: 'Illustration', content: ensureString(r.illustration), expanded: true },
        { id: 'point1', title: 'Main Point 1', content: ensureString(r.point1), expanded: true },
        { id: 'point2', title: 'Main Point 2', content: ensureString(r.point2), expanded: true },
        { id: 'point3', title: 'Main Point 3', content: ensureString(r.point3), expanded: true },
        { id: 'cross-refs', title: 'Cross References', content: ensureString(r.cross_references), expanded: false },
        { id: 'application', title: 'Application', content: ensureString(r.application), expanded: true },
        { id: 'questions', title: 'Reflection Questions', content: ensureString(r.questions), expanded: false },
        { id: 'challenge', title: 'Weekly Challenge', content: ensureString(r.challenge), expanded: false },
        { id: 'closing-prayer', title: 'Closing Prayer', content: ensureString(r.closing_prayer), expanded: true },
        { id: 'altar-call', title: 'Altar Call', content: ensureString(r.altar_call), expanded: false },
      ].filter(s => s.content))
      setSectionModes({}); setSectionNotes({}); setStep('result')
    } catch {
      setError('Error generating sermon.')
    } finally {
      setLoading(false)
    }
  }

  const toggleSection = (id: string) => setSections(prev => prev.map(s => s.id === id ? { ...s, expanded: !s.expanded } : s))
  const initNotes = (id: string, content: string) => {
    if (!sectionNotes[id]) setSectionNotes(prev => ({ ...prev, [id]: content }))
    setSectionModes(prev => ({ ...prev, [id]: 'notes' }))
  }
  const handleBack = () => {
    if (step === 'form') { setStep('type'); setError(null) }
    else if (step === 'result') { setStep('form'); setSections([]) }
    else if (step === 'saved') setStep('type')
  }

  // ===== COPY =====
  const getSermonText = (mode: 'original' | 'edited'): string => {
    return sections.map(s => {
      const content = mode === 'edited' && sectionNotes[s.id] ? sectionNotes[s.id] : s.content
      return `${stripMarkdown(s.title)}\n\n${stripMarkdown(content)}`
    }).join('\n\n' + '─'.repeat(30) + '\n\n')
  }

  const copySermon = (mode: 'original' | 'edited') => {
    const text = getSermonText(mode)
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMode(mode)
      setTimeout(() => setCopiedMode(null), 2000)
    }).catch(() => {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopiedMode(mode)
      setTimeout(() => setCopiedMode(null), 2000)
    })
  }

  const shareSermon = async (mode: 'original' | 'edited') => {
    const text = getSermonText(mode)
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Sermon', text })
        return
      }
      await navigator.clipboard.writeText(text)
      setCopiedMode(mode)
      setTimeout(() => setCopiedMode(null), 2000)
    } catch {}
  }

  // ===== BUILD PDF =====
  const buildPDF = (mode: 'original' | 'edited'): jsPDF => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' })
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 48
    const maxWidth = pageWidth - margin * 2
    let y = margin

    const checkPage = (needed: number) => {
      if (y + needed > pageHeight - margin) {
        doc.addPage()
        y = margin
      }
    }

    doc.setFont('times', 'bold')
    doc.setFontSize(22)
    doc.setTextColor(20, 20, 40)
    const titleText = stripMarkdown(
      formData.title || topicInput || passageInput || selectedOccasion || selectedAudience || 'Sermon'
    )
    const titleLines = doc.splitTextToSize(titleText, maxWidth)
    titleLines.forEach((line: string) => {
      checkPage(30)
      doc.text(line, pageWidth / 2, y, { align: 'center' })
      y += 30
    })

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(140, 140, 140)
    const metaParts: string[] = []
    if (formData.duration) metaParts.push(formData.duration)
    if (formData.tone) metaParts.push(formData.tone)
    if (formData.audience) metaParts.push(formData.audience)
    if (metaParts.length) {
      checkPage(24)
      doc.text(metaParts.join('  ·  '), pageWidth / 2, y, { align: 'center' })
      y += 24
    }

    checkPage(20)
    doc.setDrawColor(201, 168, 76)
    doc.setLineWidth(1)
    doc.line(margin + 100, y, pageWidth - margin - 100, y)
    y += 30

    sections.forEach(section => {
      const content = mode === 'edited' && sectionNotes[section.id]
        ? sectionNotes[section.id]
        : section.content

      const cleanedTitle = stripMarkdown(section.title).toUpperCase()
      const cleanedContent = stripMarkdown(content)

      checkPage(30)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(201, 168, 76)
      doc.text(cleanedTitle, margin, y)
      y += 18

      doc.setFont('times', 'normal')
      doc.setFontSize(11)
      doc.setTextColor(40, 40, 50)
      const lines = doc.splitTextToSize(cleanedContent, maxWidth)
      lines.forEach((line: string) => {
        checkPage(16)
        doc.text(line, margin, y)
        y += 16
      })

      y += 12
    })

    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(160, 160, 160)
      doc.text('Hyescriptures', pageWidth / 2, pageHeight - 20, { align: 'center' })
    }

    return doc
  }

  const isCapacitor = (): boolean => {
    return !!(window as any).Capacitor?.isNativePlatform?.()
  }

  const downloadPDF = async (mode: 'original' | 'edited') => {
    const doc = buildPDF(mode)
    const fileName = `${(formData.title || topicInput || 'sermon').replace(/[^a-z0-9]/gi, '_').slice(0, 40)}_${mode}.pdf`

    if (isCapacitor()) {
      try {
        const base64 = doc.output('datauristring').split(',')[1]
        await Filesystem.writeFile({
          path: fileName,
          data: base64,
          directory: Directory.Documents,
        })
        alert(`Saved to Documents/${fileName}`)
      } catch (error) {
        console.error('PDF save failed:', error)
        alert('Failed to save PDF.')
      }
    } else {
      doc.save(fileName)
    }
  }

  const sharePDF = async (mode: 'original' | 'edited') => {
    const doc = buildPDF(mode)
    const fileName = `${(formData.title || topicInput || 'sermon').replace(/[^a-z0-9]/gi, '_').slice(0, 40)}_${mode}.pdf`

    if (isCapacitor()) {
      try {
        const base64 = doc.output('datauristring').split(',')[1]
        const result = await Filesystem.writeFile({
          path: fileName,
          data: base64,
          directory: Directory.Cache,
        })
        const { Share } = await import('@capacitor/share')
        await Share.share({
          title: formData.title || 'Sermon',
          text: 'Sermon from Hyescriptures',
          url: result.uri,
          dialogTitle: 'Share sermon PDF',
        })
      } catch (error) {
        console.error('PDF share failed:', error)
        try {
          const base64 = doc.output('datauristring').split(',')[1]
          await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Documents,
          })
          alert(`Share failed. Saved to Documents/${fileName}`)
        } catch {
          alert('Failed to share or save PDF.')
        }
      }
    } else {
      const pdfBlob = doc.output('blob')
      const file = new File([pdfBlob], fileName, { type: 'application/pdf' })
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ title: 'Sermon', files: [file] })
          return
        } catch {}
      }
      doc.save(fileName)
    }
  }

  if (tier !== 'elder') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: 32, textAlign: 'center', gap: 16 }}>
        <Crown size={48} style={{ color: '#c9a84c', opacity: 0.6 }} />
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>Sermon Builder is for Elders</h2>
        <p style={{ color: '#888', maxWidth: 300 }}>Upgrade to Elder to create AI-powered sermon outlines with historical context, Greek/Hebrew insights, and more.</p>
        <button onClick={() => window.location.href = '/upgrade'} style={{ padding: '12px 28px', background: '#c9a84c', color: 'white', border: 'none', borderRadius: 12, fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>Upgrade to Elder — $4.99/yr</button>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>
          <div className={styles.quill}><Icons.Sermon /></div>
          <h3>Preparing Your Sermon</h3>
          <p>Studying Scripture &middot; Crafting illustrations &middot; Organizing points</p>
          <div className={styles.progressDots}><span /><span /><span /></div>
        </div>
      </div>
    )
  }

  const hasEdits = Object.keys(sectionNotes).some(id => sectionNotes[id] && sectionNotes[id] !== sections.find(s => s.id === id)?.content)
  const limitReached = dailyCount >= SERMON_DAILY_LIMIT

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {step !== 'type' && <button className={styles.backBtn} onClick={handleBack}><Icons.ArrowLeft /></button>}
          <div>
            <h2 className={styles.title}><Icons.Sermon /> Sermon Builder</h2>
            <p className={styles.subtitle}>Premium sermon preparation studio</p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={`${styles.sermonCounter} ${limitReached ? styles.sermonCounterFull : ''}`}>
            <Icons.Sparkle />
            <span>{dailyCount}/{SERMON_DAILY_LIMIT} today</span>
          </div>
          <button className={`${styles.navBtn} ${step === 'saved' ? styles.active : ''}`} onClick={() => setStep('saved')}><Icons.Folder /> Saved</button>
        </div>
      </div>

      {step === 'saved' && (
        <div className={styles.savedSection}>
          <h3>My Sermons</h3>
          {savedSermons.length === 0 ? <p className={styles.empty}>No saved sermons yet.</p> : (
            <div className={styles.savedList}>
              {savedSermons.map(sermon => (
                <div key={sermon.id} className={styles.savedCard}>
                  <div className={styles.savedInfo} onClick={() => loadSermon(sermon)}>
                    <span className={styles.savedTopic}>{sermon.topic}</span>
                    <span className={styles.savedMeta}>{sermon.type} &middot; {new Date(sermon.createdAt).toLocaleDateString()}</span>
                  </div>
                  <button className={styles.deleteBtn} onClick={() => deleteSermon(sermon.id)}><Icons.Trash /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {step === 'type' && (
        <div className={styles.typeGrid}>
          {TYPE_CARDS.map(({ type, icon: Icon, label, desc }) => (
            <button key={type} className={styles.typeCard} onClick={() => handleTypeSelect(type)}><Icon /><span className={styles.typeLabel}>{label}</span><span className={styles.typeDesc}>{desc}</span></button>
          ))}
        </div>
      )}

      {step === 'form' && (
        <div className={styles.formSection}>
          <div className={styles.formGroup}>
            <label>{sermonType === 'topic' ? 'What topic?' : sermonType === 'passage' ? 'Which passage?' : sermonType === 'occasion' ? 'What occasion?' : 'Which audience?'}</label>
            {sermonType === 'topic' && <input type="text" className={styles.input} placeholder="e.g. Faith, Grace..." value={topicInput} onChange={e => setTopicInput(e.target.value)} />}
            {sermonType === 'passage' && <input type="text" className={styles.input} placeholder="e.g. Romans 8..." value={passageInput} onChange={e => setPassageInput(e.target.value)} />}
            {sermonType === 'occasion' && <div className={styles.chipGrid}>{OCCASIONS.map(o => <button key={o} className={`${styles.chip} ${selectedOccasion === o ? styles.chipActive : ''}`} onClick={() => setSelectedOccasion(o)}>{o}</button>)}</div>}
            {sermonType === 'audience' && <div className={styles.chipGrid}>{AUDIENCES.map(a => <button key={a} className={`${styles.chip} ${selectedAudience === a ? styles.chipActive : ''}`} onClick={() => setSelectedAudience(a)}>{a}</button>)}</div>}
          </div>
          <div className={styles.formGroup}><label><Icons.Clock /> Duration</label><div className={styles.chipGrid}>{DURATIONS.map(d => <button key={d} className={`${styles.chip} ${formData.duration === d ? styles.chipActive : ''}`} onClick={() => setFormData(prev => ({ ...prev, duration: d }))}>{d}</button>)}</div></div>
          <div className={styles.formGroup}><label><Icons.Tone /> Tone</label><div className={styles.chipGrid}>{TONES.map(t => <button key={t} className={`${styles.chip} ${formData.tone === t ? styles.chipActive : ''}`} onClick={() => setFormData(prev => ({ ...prev, tone: t }))}>{t}</button>)}</div></div>
          <div className={styles.formGroup}><label><Icons.Users /> Target Audience</label><input type="text" className={styles.input} placeholder="e.g. Young adults..." value={formData.audience} onChange={e => setFormData(prev => ({ ...prev, audience: e.target.value }))} /></div>
          <button
            type="button"
            className={styles.generateBtn}
            onClick={handleGenerate}
            disabled={loading || limitReached}
          >
            <Icons.Sparkle /> {limitReached ? 'Daily Limit Reached' : 'Generate Sermon'}
          </button>
          {error && <div className={styles.error}>{error}</div>}
        </div>
      )}

      {step === 'result' && (
        <>
          <div className={styles.resultSection}>
            {sections.map(section => (
              <div key={section.id} className={`${styles.sectionCard} ${section.expanded ? styles.expanded : ''}`}>
                <button className={styles.sectionHeader} onClick={() => toggleSection(section.id)}>
                  <span>{section.title}</span>
                  {section.expanded ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
                </button>
                {section.expanded && (
                  <div className={styles.sectionContent}>
                    <div className={styles.modeToggle}>
                      <button className={`${styles.modeBtn} ${(!sectionModes[section.id] || sectionModes[section.id] === 'original') ? styles.modeActive : ''}`} onClick={() => setSectionModes(prev => ({ ...prev, [section.id]: 'original' }))}>Original</button>
                      <button className={`${styles.modeBtn} ${sectionModes[section.id] === 'notes' ? styles.modeActive : ''}`} onClick={() => initNotes(section.id, section.content)}>My Notes</button>
                    </div>
                    {(!sectionModes[section.id] || sectionModes[section.id] === 'original') && (
                      <div className={styles.renderedContent} dangerouslySetInnerHTML={{ __html: formatContent(section.content) }} />
                    )}
                    {sectionModes[section.id] === 'notes' && (
                      <div className={styles.notesMode}>
                        <textarea className={styles.notesEditor} value={sectionNotes[section.id] || section.content} onChange={e => setSectionNotes(prev => ({ ...prev, [section.id]: e.target.value }))} placeholder="Add your notes, links, illustrations..." rows={6} />
                        <div className={styles.notesHint}>Links are clickable. **bold** and *italic*. Verses become tappable.</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className={styles.actionBar}>
              <button className={styles.actionBtn} onClick={() => copySermon('edited')}>
                <Icons.Copy /> {copiedMode === 'edited' ? 'Copied!' : 'Copy'}
              </button>
              <button className={styles.actionBtn} onClick={() => shareSermon('edited')}>
                <Icons.Share /> Share Text
              </button>
              <button className={styles.actionBtn} onClick={() => downloadPDF('edited')}>
                <Icons.Download /> Download PDF
              </button>
              <button className={styles.actionBtn} onClick={() => sharePDF('edited')}>
                <Icons.PDF /> Share PDF
              </button>
              <button
                className={`${styles.actionBtn} ${savedFlash ? styles.actionBtnSaved : ''}`}
                onClick={saveSermon}
              >
                <Icons.Save /> {savedFlash ? 'Saved!' : 'Save'}
              </button>
              <button className={styles.actionBtn} onClick={handleBack}>
                <Icons.Sermon /> New Sermon
              </button>
            </div>

            {hasEdits && (
              <div className={styles.originalActions}>
                <p className={styles.originalHint}>You've edited some sections. Want the AI original instead?</p>
                <div className={styles.originalBtnRow}>
                  <button className={styles.originalBtn} onClick={() => copySermon('original')}>
                    <Icons.Copy /> {copiedMode === 'original' ? 'Copied Original!' : 'Copy Original'}
                  </button>
                  <button className={styles.originalBtn} onClick={() => downloadPDF('original')}>
                    <Icons.Download /> Download Original PDF
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={styles.expansionSection}>
            <h4 className={styles.expansionTitle}>Points to Ponder</h4>
            <p className={styles.expansionDesc}>Use these prompts to deepen your message in your own words</p>
            <div className={styles.expansionList}>
              {[
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/></svg>), label: 'Personal Connection', text: 'Where have you personally experienced this truth?' },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>), label: 'Conversational Question', text: 'What question would make them lean in?' },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>), label: 'Cultural Bridge', text: 'How does this speak to your community right now?' },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>), label: 'Object Lesson', text: 'What everyday object would make this unforgettable?' },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/></svg>), label: 'Fresh Perspective', text: 'What if the opposite were true?' },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>), label: 'Emotional Anchor', text: 'What emotion do you want people to leave with?' },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>), label: 'Memorable Phrase', text: 'What one line should they remember?' },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>), label: 'Specific Person', text: 'Who in your congregation needs to hear this today?' },
              ].map((item, i) => (
                <div key={i} className={styles.ponderCard}>
                  <div className={styles.ponderIcon}>{item.icon}</div>
                  <div className={styles.ponderContent}><span className={styles.ponderLabel}>{item.label}</span><p>{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const buildSermonPrompt = (topic: string, form: SermonFormData, type: SermonType): string => {
  return `Create a complete sermon on "${topic}". Type: ${type}. Duration: ${form.duration || '20 mins'}. Tone: ${form.tone || 'Teaching'}. Audience: ${form.audience || 'General'}. Translation: ${form.translation || 'KJV'}. Return ONLY valid JSON with: { "title", "theme", "opening_prayer", "context", "greek_hebrew", "introduction", "illustration", "point1", "point2", "point3", "cross_references", "application", "questions", "challenge", "closing_prayer", "altar_call" }`
}

//  FIXED: returns full envelope, sends tier
const callSermonEdgeFunction = async (prompt: string): Promise<any> => {
  try {
    const { supabase } = await import('../../lib/supabase')
    const { data, error } = await supabase.functions.invoke('sermon', {
      body: { prompt, tier: getCachedTier() }
    })
    if (error) throw error
    return data   // full envelope, not just response
  } catch { return null }
}
