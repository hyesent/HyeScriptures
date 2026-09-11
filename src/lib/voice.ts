// src/lib/voice.ts

const API_BASE_VOICE = import.meta.env.VITE_VOICE_API_URL || 'https://hyezen.onrender.com'

export interface Voice {
  id: string
  name: string
  gender: 'male' | 'female'
  accent: string
  language: string
  preview_url?: string
}

export interface VoiceResponse {
  audio_url: string
  duration: number
  voice_id: string
}

export type VoiceSpeed = 0.5 | 0.75 | 1.0 | 1.25 | 1.5

// ========== SPEECH FORMATTING ==========
export const formatForSpeech = (text: string): string => {
  return text.replace(/(\d+):(\d+)/g, '$1 verse $2')
}

export const formatVerseTextForSpeech = (verseText: string): string => {
  return verseText.replace(/\[/g, '').replace(/\]/g, '').replace(/\s+/g, ' ').trim()
}

export const formatReferenceForSpeech = (reference: string): string => {
  return reference.replace(/(\d+):(\d+)/g, '$1 verse $2')
}

export const formatFullVerseForSpeech = (reference: string, verseText: string): string => {
  const ref = formatReferenceForSpeech(reference)
  const text = formatVerseTextForSpeech(verseText)
  return `${ref}. ${text}`
}

// ========== WEB SPEECH API ==========
const isWebSpeechSupported = (): boolean => 'speechSynthesis' in window

const getWebSpeechVoice = (gender: 'male' | 'female', lang: string = 'en-US'): SpeechSynthesisVoice | null => {
  if (!isWebSpeechSupported()) return null
  const voices = window.speechSynthesis.getVoices()
  
  // Try to find voice matching language first
  const langMatch = voices.find(v => v.lang.startsWith(lang.split('-')[0]))
  if (langMatch) return langMatch
  
  // Fall back to gender
  const preferred = voices.find(v => {
    const name = v.name.toLowerCase()
    if (gender === 'male') return name.includes('male') || name.includes('david') || name.includes('daniel')
    return name.includes('female') || name.includes('samantha') || name.includes('zira')
  })
  return preferred || voices[0] || null
}

// ========== VOICE LIBRARY (All available backend voices) ==========
export const PREMIUM_VOICES: Voice[] = [
  // English (used for en_kjv and en_bbe when not auto-matched)
  { id: 'en-US-GuyNeural', name: 'Guy', gender: 'male', accent: 'American', language: 'English' },
  { id: 'en-US-JennyNeural', name: 'Jenny', gender: 'female', accent: 'American', language: 'English' },
  { id: 'en-GB-RyanNeural', name: 'Ryan', gender: 'male', accent: 'British', language: 'English' },
  { id: 'en-GB-SoniaNeural', name: 'Sonia', gender: 'female', accent: 'British', language: 'English' },
  { id: 'en-NG-AbeoNeural', name: 'Abeo', gender: 'male', accent: 'Nigerian', language: 'English' },
  { id: 'en-NG-EzinneNeural', name: 'Ezinne', gender: 'female', accent: 'Nigerian', language: 'English' },
  // French
  { id: 'fr-FR-DeniseNeural', name: 'Denise', gender: 'female', accent: 'Parisian', language: 'French' },
  { id: 'fr-FR-HenriNeural', name: 'Henri', gender: 'male', accent: 'Parisian', language: 'French' },
  // Greek
  { id: 'el-GR-AthinaNeural', name: 'Athina', gender: 'female', accent: 'Athenian', language: 'Greek' },
  { id: 'el-GR-NestorasNeural', name: 'Nestoras', gender: 'male', accent: 'Athenian', language: 'Greek' },
  // Spanish (used for Esperanto since no Esperanto Neural exists)
  { id: 'es-ES-ElviraNeural', name: 'Elvira', gender: 'female', accent: 'Castilian', language: 'Spanish' },
  { id: 'es-ES-AlvaroNeural', name: 'Alvaro', gender: 'male', accent: 'Castilian', language: 'Spanish' },
]

// ========== TRANSLATION → VOICE MAPPING ==========
// Auto-matched voices per translation. KJV/BBE can be manually overridden by user.
export const TRANSLATION_VOICE_MAP: Record<string, { voiceId?: string; useWebSpeech: boolean; language: string }> = {
  'en_kjv': { voiceId: 'en-US-GuyNeural', useWebSpeech: false, language: 'English' },
  'en_bbe': { voiceId: 'en-US-JennyNeural', useWebSpeech: false, language: 'English' },
  'fr_ape': { voiceId: 'fr-FR-DeniseNeural', useWebSpeech: false, language: 'French' },
  'eo_esperanto': { voiceId: 'es-ES-ElviraNeural', useWebSpeech: false, language: 'Spanish' },
  'el_greek': { voiceId: 'el-GR-AthinaNeural', useWebSpeech: false, language: 'Greek' },
}

export const getVoiceForTranslation = (translationId: string) => {
  return TRANSLATION_VOICE_MAP[translationId] || { useWebSpeech: true, language: 'English' }
}

// Check if a translation allows manual voice override
export const allowsVoiceOverride = (translationId: string): boolean => {
  return translationId === 'en_kjv' || translationId === 'en_bbe'
}

// Get voices available for a specific translation (used in Audio Bible picker)
export const getVoicesForTranslation = (translationId: string): Voice[] => {
  if (!allowsVoiceOverride(translationId)) return [] // Auto-matched only
  const config = TRANSLATION_VOICE_MAP[translationId]
  if (!config) return PREMIUM_VOICES.filter(v => v.language === 'English')
  return PREMIUM_VOICES.filter(v => v.language === config.language)
}

export const VOICE_LABELS: Record<string, string> = {
  'en-US-GuyNeural': 'English (Guy)',
  'en-US-JennyNeural': 'English (Jenny)',
  'en-GB-RyanNeural': 'English (Ryan)',
  'en-GB-SoniaNeural': 'English (Sonia)',
  'en-NG-AbeoNeural': 'English (Abeo)',
  'en-NG-EzinneNeural': 'English (Ezinne)',
  'fr-FR-DeniseNeural': 'French (Denise)',
  'fr-FR-HenriNeural': 'French (Henri)',
  'el-GR-AthinaNeural': 'Greek (Athina)',
  'el-GR-NestorasNeural': 'Greek (Nestoras)',
  'es-ES-ElviraNeural': 'Spanish (Elvira)',
  'es-ES-AlvaroNeural': 'Spanish (Alvaro)',
}

export const VOICE_TOASTS: Record<string, string> = {
  'en-US-GuyNeural': 'Guy is ready — tap play to hear narration',
  'en-US-JennyNeural': 'Jenny is ready — tap play to hear narration',
  'fr-FR-DeniseNeural': 'Denise est prête — appuyez sur play',
  'el-GR-AthinaNeural': 'Η Αθηνά είναι έτοιμη — πατήστε play',
  'es-ES-ElviraNeural': 'Elvira está lista — toca reproducir',
}

// ========== VOICE API ==========
export const voice = {
  getVoices: async (type: 'realistic' | 'standard' = 'realistic'): Promise<Voice[]> => {
    try {
      const response = await fetch(`${API_BASE_VOICE}/api/voices/${type}`)
      if (!response.ok) throw new Error('Failed to fetch voices')
      const data = await response.json()
      return data.voices || data || []
    } catch { return [] }
  },

  synthesize: async (text: string, voiceId: string, speed: VoiceSpeed = 1.0): Promise<VoiceResponse | null> => {
    try {
      const formattedText = formatForSpeech(text)
      const response = await fetch(`${API_BASE_VOICE}/api/tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: formattedText, voice: voiceId, type: 'realistic', speed })
      })
      if (!response.ok) throw new Error('Failed to synthesize speech')
      const data = await response.json()
      return {
        audio_url: data.url ? `${API_BASE_VOICE}${data.url}` : null,
        duration: data.duration || 0,
        voice_id: data.voice || voiceId
      }
    } catch { return null }
  },

  stream: async (text: string, voiceId: string, speed: VoiceSpeed = 1.0): Promise<ReadableStream | null> => {
    try {
      const formattedText = formatForSpeech(text)
      const response = await fetch(`${API_BASE_VOICE}/api/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: formattedText, voice: voiceId, type: 'realistic', speed })
      })
      if (!response.ok) throw new Error('Failed to stream audio')
      return response.body!
    } catch { return null }
  },

  getVoice: async (voiceId: string): Promise<Voice | null> => {
    try {
      const response = await fetch(`${API_BASE_VOICE}/api/voices/${voiceId}`)
      if (!response.ok) throw new Error('Failed to fetch voice')
      return await response.json()
    } catch { return null }
  },

  speakWithWebSpeech: (
    text: string,
    speed: VoiceSpeed = 1.0,
    gender: 'male' | 'female' = 'male',
    lang: string = 'en-US',
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (error: any) => void
  ): SpeechSynthesisUtterance | null => {
    if (!isWebSpeechSupported()) return null
    try {
      const formattedText = formatForSpeech(text)
      const utterance = new SpeechSynthesisUtterance(formattedText)
      const v = getWebSpeechVoice(gender, lang)
      if (v) utterance.voice = v
      utterance.rate = speed
      utterance.pitch = gender === 'male' ? 1.0 : 1.2
      utterance.lang = lang
      if (onStart) utterance.onstart = onStart
      if (onEnd) utterance.onend = onEnd
      if (onError) utterance.onerror = onError
      window.speechSynthesis.speak(utterance)
      return utterance
    } catch { return null }
  },

  cancelWebSpeech: (): void => { if (isWebSpeechSupported()) window.speechSynthesis.cancel() },
  pauseWebSpeech: (): void => { if (isWebSpeechSupported()) window.speechSynthesis.pause() },
  resumeWebSpeech: (): void => { if (isWebSpeechSupported()) window.speechSynthesis.resume() },
  isWebSpeechSpeaking: (): boolean => isWebSpeechSupported() && window.speechSynthesis.speaking,
  getWebSpeechVoices: (): SpeechSynthesisVoice[] => isWebSpeechSupported() ? window.speechSynthesis.getVoices() : []
}

// ========== SETTINGS ==========
export interface AudioSettings {
  speed: VoiceSpeed
  voiceId: string
  autoScroll: boolean
  autoPlay: boolean
}

const AUDIO_SETTINGS_KEY = 'hyescriptures_audio_settings'

export const getAudioSettings = (): AudioSettings => {
  try {
    const data = localStorage.getItem(AUDIO_SETTINGS_KEY)
    if (data) return JSON.parse(data)
  } catch {}
  return { speed: 1.0, voiceId: '', autoScroll: true, autoPlay: false }
}

export const saveAudioSettings = (settings: AudioSettings): void => {
  localStorage.setItem(AUDIO_SETTINGS_KEY, JSON.stringify(settings))
}

export const speedOptions: VoiceSpeed[] = [0.5, 0.75, 1.0, 1.25, 1.5]
export const getSpeedLabel = (speed: VoiceSpeed): string => `${speed}x`
export const getSpeedIcon = (speed: VoiceSpeed): string => {
  if (speed <= 0.75) return '🐢'
  if (speed >= 1.25) return '🐇'
  return '🐕'
}
