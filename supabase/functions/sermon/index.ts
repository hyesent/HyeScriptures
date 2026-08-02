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
    const { prompt } = await req.json()
    if (!prompt) throw new Error("Prompt is required")

    const systemPrompt = `You are a seasoned pastor and Bible scholar creating sermon outlines. 
Return ONLY valid JSON. No markdown, no explanations outside the JSON.
The JSON must have ALL these fields filled with meaningful content (never empty strings):
{
  "title": "Compelling sermon title",
  "theme": "Central theme in one powerful sentence",
  "opening_prayer": "A reverent opening prayer (2-3 sentences)",
  "context": "Historical and cultural background (2-3 sentences)",
  "greek_hebrew": "Key original language word study with Strong's references where possible",
  "introduction": "Engaging opening that hooks the congregation (3-4 sentences)",
  "illustration": "A relatable, vivid illustration or story that illuminates the topic",
  "point1": "Main Point 1 — include explanation, scripture support, and practical application",
  "point2": "Main Point 2 — include explanation, scripture support, and practical application",
  "point3": "Main Point 3 — include explanation, scripture support, and practical application",
  "cross_references": "List 4-6 supporting scriptures as bullet points with brief relevance notes",
  "application": "Practical life application broken into: Personal, Family, Church",
  "questions": "3-5 thought-provoking reflection questions",
  "challenge": "A specific weekly challenge for the congregation to apply this message",
  "closing_prayer": "A powerful closing prayer (2-3 sentences)",
  "altar_call": "A gentle, invitational altar call (2-3 sentences)"
}

User request: ${prompt}`

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }],
        generationConfig: {
          temperature: 0.8,
          topP: 0.95,
          maxOutputTokens: 4096,
        },
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`Gemini error: ${response.status} - ${errText}`)
    }

    const json = await response.json()
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ""

    if (!text) throw new Error("Empty response from AI")

    // Clean the response
    const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim()
    const parsed = JSON.parse(cleaned)

    return new Response(JSON.stringify({ success: true, response: parsed }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("Sermon error:", message)

    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  }
})