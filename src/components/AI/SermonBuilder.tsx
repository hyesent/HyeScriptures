// src/components/AI/SermonBuilder.tsx
import React, { useState, useEffect } from 'react'
import { useAILimits } from '../../hooks/useAILimits'
import { useSubscription } from '../../hooks/useSubscription'
import { AICounter } from '../AICounter'
import { Crown } from 'lucide-react'
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
}

const TYPE_CARDS: { type: SermonType; icon: React.ElementType; label: string; desc: string }[] = [
  { type: 'topic', icon: Icons.Book, label: 'By Topic', desc: 'Faith, Grace, Prayer, Love...' },
  { type: 'passage', icon: Icons.Sermon, label: 'By Passage', desc: 'Romans 8, Psalm 23, John 3...' },
  { type: 'occasion', icon: Icons.Calendar, label: 'By Occasion', desc: 'Wedding, Funeral, Revival...' },
  { type: 'audience', icon: Icons.Users, label: 'By Audience', desc: 'Youth, Children, Leaders...' },
]

const SAVE_KEY = 'hyescriptures_saved_sermons'

const ensureString = (val: any): string => {
  if (!val) return ''
  if (typeof val === 'string') return val
  if (Array.isArray(val)) return val.map(v => ensureString(v)).join('\n')
  if (typeof val === 'object') return JSON.stringify(val, null, 2)
  return String(val)
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
  const { checkAndIncrement } = useAILimits()

  useEffect(() => {
    try { const saved = localStorage.getItem(SAVE_KEY); if (saved) setSavedSermons(JSON.parse(saved)) } catch {}
  }, [])

  const saveSermon = () => {
    if (sections.length === 0) return
    const sermon: SavedSermon = {
      id: Date.now().toString(), topic: topicInput || passageInput || selectedOccasion || selectedAudience,
      type: sermonType!, form: formData, sections, notes: sectionNotes, createdAt: new Date().toISOString()
    }
    const updated = [sermon, ...savedSermons].slice(0, 50)
    setSavedSermons(updated); localStorage.setItem(SAVE_KEY, JSON.stringify(updated))
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
    const { allowed, message } = checkAndIncrement()
    if (!allowed) { setError(message || 'AI limit reached'); return }
    let topic = ''
    if (sermonType === 'topic') topic = topicInput
    else if (sermonType === 'passage') topic = passageInput
    else if (sermonType === 'occasion') topic = selectedOccasion
    else if (sermonType === 'audience') topic = selectedAudience
    if (!topic.trim()) { setError('Please enter a topic or select an option'); return }
    setLoading(true); setError(null)
    try {
      const prompt = buildSermonPrompt(topic, formData, sermonType!)
      const result = await callSermonEdgeFunction(prompt)
      if (result) {
        setSections([
          { id: 'opening-prayer', title: 'Opening Prayer', content: ensureString(result.opening_prayer), expanded: true },
          { id: 'title', title: 'Title & Theme', content: `**${ensureString(result.title || topic)}**\n\n${ensureString(result.theme)}`, expanded: true },
          { id: 'context', title: 'Historical Context', content: ensureString(result.context), expanded: false },
          { id: 'greek', title: 'Greek / Hebrew Insight', content: ensureString(result.greek_hebrew), expanded: false },
          { id: 'introduction', title: 'Introduction', content: ensureString(result.introduction), expanded: true },
          { id: 'illustration', title: 'Illustration', content: ensureString(result.illustration), expanded: true },
          { id: 'point1', title: 'Main Point 1', content: ensureString(result.point1), expanded: true },
          { id: 'point2', title: 'Main Point 2', content: ensureString(result.point2), expanded: true },
          { id: 'point3', title: 'Main Point 3', content: ensureString(result.point3), expanded: true },
          { id: 'cross-refs', title: 'Cross References', content: ensureString(result.cross_references), expanded: false },
          { id: 'application', title: 'Application', content: ensureString(result.application), expanded: true },
          { id: 'questions', title: 'Reflection Questions', content: ensureString(result.questions), expanded: false },
          { id: 'challenge', title: 'Weekly Challenge', content: ensureString(result.challenge), expanded: false },
          { id: 'closing-prayer', title: 'Closing Prayer', content: ensureString(result.closing_prayer), expanded: true },
          { id: 'altar-call', title: 'Altar Call', content: ensureString(result.altar_call), expanded: false },
        ].filter(s => s.content))
        setSectionModes({}); setSectionNotes({}); setStep('result')
      } else { setError('Failed to generate sermon.') }
    } catch { setError('Error generating sermon.') }
    finally { setLoading(false) }
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
  const copySermon = () => {
    const text = sections.map(s => `${s.title}\n\n${sectionNotes[s.id] || s.content}`).join('\n\n---\n\n')
    navigator.clipboard.writeText(text)
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
          <AICounter />
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
          <button className={styles.generateBtn} onClick={handleGenerate}><Icons.Sparkle /> Generate Sermon</button>
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
              <button className={styles.actionBtn} onClick={copySermon}><Icons.Copy /> Copy</button>
              <button className={styles.actionBtn}><Icons.Share /> Share</button>
              <button className={styles.actionBtn} onClick={saveSermon}><Icons.Download /> Save</button>
              <button className={styles.actionBtn} onClick={handleBack}><Icons.Sermon /> New Sermon</button>
            </div>
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

const callSermonEdgeFunction = async (prompt: string): Promise<any> => {
  try {
    const { supabase } = await import('../../lib/supabase')
    const { data, error } = await supabase.functions.invoke('sermon', { body: { prompt } })
    if (error) throw error
    return data?.response || null
  } catch { return null }
}
