import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// ========== GEMINI API ==========
const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') || ''
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`

const callGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Gemini API Error:', response.status, errorText)
      return ''
    }

    const data = await response.json()
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || ''
  } catch (error) {
    console.error('Gemini API Error:', error)
    return ''
  }
}

// ========== PROMPTS ==========
const prompts = {
  explain: (verse: string) => `
    Explain the Bible verse "${verse}" in simple, clear English.
    Keep it to 3-4 sentences max.
    Include: what it means, why it matters, and how to apply it.
  `,

  chat: (messages: any[]) => {
    const history = messages.map(m => `${m.role}: ${m.content}`).join('\n')
    return `
      You are a helpful Bible scholar and spiritual guide.
      Answer the following question or continue the conversation.
      Keep responses to 3-4 sentences max.

      Conversation history:
      ${history}

      Respond as a friendly, knowledgeable Christian guide.
      Always base your answers on Scripture and sound theology.
    `
  },

  sermon: (topic: string) => `
    Generate a complete sermon outline on "${topic}".
    Return ONLY valid JSON with this exact structure:
    {
      "context": "Historical and cultural context (1-2 sentences)",
      "greek_hebrew": "Key Greek/Hebrew word meanings (1-2 sentences)",
      "explanation": "Main explanation of the sermon (2-3 sentences)",
      "application": "How to apply this (2-3 sentences)",
      "verses": ["Verse 1 reference", "Verse 2 reference", "Verse 3 reference"]
    }
    Keep each field concise and meaningful.
  `,

  quiz: (topic: string) => `
    Generate just 10 Bible quiz questions about "${topic}".
    Return ONLY valid JSON array:
    [
      {
        "question": "Question text?",
        "options": ["A", "B", "C", "D"],
        "correct": 0,
        "explanation": "Brief explanation of the correct answer"
      }
    ]
    Make questions challenging but fair. Include a mix of difficulty levels.
  `,

  dreamverse: `
    Choose a random Bible verse and explain its meaning.
    Return ONLY valid JSON:
    {
      "verse": "Book Chapter:Verse - Verse text",
      "meaning": "Brief explanation of what it means (1-2 sentences)"
    }
  `,

  summarize: (book: string, chapter: number) => `
    Summarize ${book} chapter ${chapter} in 3 bullet points.
    Each bullet should be 1 sentence max.
    Focus on the main events and key verses.
  `
}

// ========== SERVER ==========
serve(async (req) => {
  // ✅ CORS - Allow all headers including x-client-info
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type, x-client-info, apikey'
      }
    })
  }

  try {
    const { action, verse, messages, topic, book, chapter } = await req.json()

    let prompt = ''
    let response = ''

    switch (action) {
      case 'explain':
        prompt = prompts.explain(verse)
        break
      case 'chat':
        prompt = prompts.chat(messages)
        break
      case 'sermon':
        prompt = prompts.sermon(topic)
        break
      case 'quiz':
        prompt = prompts.quiz(topic)
        break
      case 'dreamverse':
        prompt = prompts.dreamverse
        break
      case 'summarize':
        prompt = prompts.summarize(book, chapter)
        break
      default:
        return new Response(JSON.stringify({ error: 'Unknown action' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
    }

    const result = await callGemini(prompt)

    let parsedResponse = result
    if (action === 'sermon' || action === 'quiz' || action === 'dreamverse') {
      try {
        const jsonMatch = result.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          parsedResponse = JSON.parse(jsonMatch[0])
        } else {
          parsedResponse = result
        }
      } catch {
        parsedResponse = result
      }
    }

    return new Response(JSON.stringify({ success: true, response: parsedResponse }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
})