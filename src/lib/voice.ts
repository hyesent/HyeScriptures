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
  return verseText
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
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
const isWebSpeechSupported = (): boolean => {
  return 'speechSynthesis' in window
}

const getWebSpeechVoice = (gender: 'male' | 'female'): SpeechSynthesisVoice | null => {
  if (!isWebSpeechSupported()) return null
  
  const voices = window.speechSynthesis.getVoices()
  
  const preferred = voices.find(v => {
    const name = v.name.toLowerCase()
    if (gender === 'male') {
      return name.includes('male') || name.includes('david') || name.includes('daniel')
    } else {
      return name.includes('female') || name.includes('samantha') || name.includes('zira')
    }
  })
  
  return preferred || voices[0] || null
}

// ========== PREMIUM VOICES (BACKEND) ==========
export const PREMIUM_VOICES: Voice[] = [
  { id: 'en-US-GuyNeural', name: 'Guy', gender: 'male', accent: 'American', language: 'English' },
  { id: 'en-US-JennyNeural', name: 'Jenny', gender: 'female', accent: 'American', language: 'English' },
  { id: 'es-ES-ElviraNeural', name: 'Elvira', gender: 'female', accent: 'Castilian', language: 'Spanish' },
  { id: 'el-GR-AthinaNeural', name: 'Athina', gender: 'female', accent: 'Greek', language: 'Greek' },
]

// ========== TRANSLATION → VOICE MAPPING ==========
export const TRANSLATION_VOICE_MAP: Record<string, { voiceId?: string; useWebSpeech: boolean }> = {
  'en_kjv': { voiceId: 'en-US-GuyNeural', useWebSpeech: false },
  'en_bbe': { voiceId: 'en-US-JennyNeural', useWebSpeech: false },
  'fr_ape': { voiceId: 'es-ES-ElviraNeural', useWebSpeech: false },
  'el_greek': { voiceId: 'el-GR-AthinaNeural', useWebSpeech: false },
}

export const getVoiceForTranslation = (translationId: string) => {
  return TRANSLATION_VOICE_MAP[translationId] || { useWebSpeech: true }
}

export const VOICE_LABELS: Record<string, string> = {
  'en-US-GuyNeural': 'English (Guy)',
  'en-US-JennyNeural': 'English (Jenny)',
  'es-ES-ElviraNeural': 'Spanish (Elvira)',
  'el-GR-AthinaNeural': 'Greek (Athina)',
}

export const VOICE_TOASTS: Record<string, string> = {
  'en-US-GuyNeural': '🎙️ Premium English voice ready — tap play to hear narration',
  'en-US-JennyNeural': '🎙️ Premium English voice ready — tap play to hear narration',
  'es-ES-ElviraNeural': '🎙️ Voz española premium lista — toca reproducir',
  'el-GR-AthinaNeural': '🎙️ Premium ελληνική φωνή έτοιμη — πατήστε play',
}

// ========== VOICE API ==========
export const voice = {
  getVoices: async (type: 'realistic' | 'standard' = 'realistic'): Promise<Voice[]> => {
    try {
      const response = await fetch(`${API_BASE_VOICE}/api/voices/${type}`)
      if (!response.ok) throw new Error('Failed to fetch voices')
      const data = await response.json()
      return data.voices || data || []
    } catch {
      return []
    }
  },

  synthesize: async (
    text: string,
    voiceId: string,
    speed: VoiceSpeed = 1.0
  ): Promise<VoiceResponse | null> => {
    try {
      const formattedText = formatForSpeech(text)
      const response = await fetch(`${API_BASE_VOICE}/api/tts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: formattedText,
          voice: voiceId,
          type: 'realistic',
          speed: speed
        })
      })

      if (!response.ok) throw new Error('Failed to synthesize speech')
      const data = await response.json()
      return {
        audio_url: data.url ? `${API_BASE_VOICE}${data.url}` : null,
        duration: data.duration || 0,
        voice_id: data.voice || voiceId
      }
    } catch {
      return null
    }
  },

  stream: async (
    text: string,
    voiceId: string,
    speed: VoiceSpeed = 1.0,
    onChunk?: (chunk: ArrayBuffer) => void
  ): Promise<ReadableStream | null> => {
    try {
      const formattedText = formatForSpeech(text)
      const response = await fetch(`${API_BASE_VOICE}/api/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: formattedText,
          voice: voiceId,
          type: 'realistic',
          speed: speed
        })
      })

      if (!response.ok) throw new Error('Failed to stream audio')
      return response.body!
    } catch {
      return null
    }
  },

  getVoice: async (voiceId: string): Promise<Voice | null> => {
    try {
      const response = await fetch(`${API_BASE_VOICE}/api/voices/${voiceId}`)
      if (!response.ok) throw new Error('Failed to fetch voice')
      return await response.json()
    } catch {
      return null
    }
  },

  // ========== WEB SPEECH FALLBACK ==========
  speakWithWebSpeech: (
    text: string,
    speed: VoiceSpeed = 1.0,
    gender: 'male' | 'female' = 'male',
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (error: any) => void
  ): SpeechSynthesisUtterance | null => {
    if (!isWebSpeechSupported()) return null

    try {
      const formattedText = formatForSpeech(text)
      const utterance = new SpeechSynthesisUtterance(formattedText)
      const voice = getWebSpeechVoice(gender)
      
      if (voice) {
        utterance.voice = voice
      }
      
      utterance.rate = speed
      utterance.pitch = gender === 'male' ? 1.0 : 1.2
      utterance.lang = 'en-US'
      
      if (onStart) utterance.onstart = onStart
      if (onEnd) utterance.onend = onEnd
      if (onError) utterance.onerror = onError
      
      window.speechSynthesis.speak(utterance)
      return utterance
    } catch {
      return null
    }
  },

  cancelWebSpeech: (): void => {
    if (isWebSpeechSupported()) {
      window.speechSynthesis.cancel()
    }
  },

  pauseWebSpeech: (): void => {
    if (isWebSpeechSupported()) {
      window.speechSynthesis.pause()
    }
  },

  resumeWebSpeech: (): void => {
    if (isWebSpeechSupported()) {
      window.speechSynthesis.resume()
    }
  },

  isWebSpeechSpeaking: (): boolean => {
    if (!isWebSpeechSupported()) return false
    return window.speechSynthesis.speaking
  },

  getWebSpeechVoices: (): SpeechSynthesisVoice[] => {
    if (!isWebSpeechSupported()) return []
    return window.speechSynthesis.getVoices()
  }
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
  
  return {
    speed: 1.0,
    voiceId: '',
    autoScroll: true,
    autoPlay: false
  }
}

export const saveAudioSettings = (settings: AudioSettings): void => {
  localStorage.setItem(AUDIO_SETTINGS_KEY, JSON.stringify(settings))
}

export const speedOptions: VoiceSpeed[] = [0.5, 0.75, 1.0, 1.25, 1.5]

export const getSpeedLabel = (speed: VoiceSpeed): string => {
  return `${speed}x`
}

export const getSpeedIcon = (speed: VoiceSpeed): string => {
  if (speed <= 0.75) return '🐢'
  if (speed >= 1.25) return '🐇'
  return '🐕'
}