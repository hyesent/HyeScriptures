// supabase/functions/scripture/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts"

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY")!
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders })

  try {
    const { input } = await req.json()
    if (!input || typeof input !== 'string') {
      throw new Error('Input is required')
    }

    const prompt = `
A person has shared this with you:

"${input}"

Your task is to respond with Scripture for this moment.

Return ONLY valid JSON. No markdown. No code blocks.

{
  "references": ["James 1:22", "Psalm 37:5"],
  "word": "One warm, well-crafted paragraph (3-4 sentences) about this moment.",
  "prayer": "A short, personal prayer (2-3 sentences) ending with Amen."
}

RULES:
- Give 1 or 2 Bible verse references ONLY. Just the reference (Book Chapter:Verse). Do NOT include the verse text.
- The verses must be from the Bible. Real references only.
- The word is a warm, pastoral paragraph that speaks directly to what they shared.
- The prayer is personal and honest — no religious clichés.
- Never mention AI or that you're generating this.
- Do NOT include verse text anywhere in your response.
`;

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.9, maxOutputTokens: 512 },
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`Gemini error: ${response.status} - ${errText}`)
    }

    const json = await response.json()
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ""
    if (!text) throw new Error('Empty AI response')

    const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim()
    const parsed = JSON.parse(cleaned)

    // Validate structure
    if (!Array.isArray(parsed.references) || parsed.references.length === 0) {
      throw new Error('AI did not return any verse references')
    }

    return new Response(
      JSON.stringify({
        success: true,
        response: {
          references: parsed.references.slice(0, 2),
          word: String(parsed.word || ''),
          prayer: String(parsed.prayer || ''),
        },
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("Scripture moment error:", message)
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
})
