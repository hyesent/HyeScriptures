import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://ogcbhejzjlrmuyfdeacs.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nY2JoZWp6amxybXV5ZmRlYWNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4Mjg4OTc4NywiZXhwIjoyMDk4NDY1Nzg3fQ.qSGvQAaL0gqx6wtSZEPgVV2FXwU4pBf-SP0ZQuky-fk";
const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY")!;

if (!SUPABASE_URL) throw new Error("SUPABASE_URL missing");
if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error("SERVICE_ROLE_KEY missing");
if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY missing");

const GEMINI_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST,GET,OPTIONS",
};

async function callGemini(prompt: string): Promise<string> {
  const res = await fetch(GEMINI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini Error: ${res.status} - ${errText}`);
  }

  const json = await res.json();
  const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
}

async function generateDevotional(theme: "morning" | "night") {
  const tone = theme === "morning"
    ? "uplifting, energizing, focused on starting the day with God"
    : "peaceful, reflective, focused on ending the day with God and resting in His presence";

  const devotionalPrompt = `
Create a ${theme} Christian devotional.

Theme:
${tone}

Return ONLY valid JSON. No markdown. No code blocks.

{
  "reference": "Book Chapter:Verse",
  "verse": "Full Bible verse text",
  "reflection": "Two short paragraphs explaining the meaning and application of the verse.",
  "prayer": "A heartfelt Christian prayer in four sentences ending with Amen."
}

Rules:
- Choose one meaningful Bible verse suitable for a ${theme} devotional.
- Explore ALL books of the Bible — from Genesis to Revelation.
- Favor lesser-known passages over famous ones.
- Make the devotional feel fresh and unique each time.
- The reflection must connect naturally to the verse.
- The prayer must match the verse and reflection.
- Keep the writing warm, biblical, and encouraging.
- Do not mention AI.
`;

  const devotionalText = await callGemini(devotionalPrompt);

  const devotional = JSON.parse(
    devotionalText.replace(/```json/g, "").replace(/```/g, "").trim()
  );

  return {
    scripture: `${devotional.reference} - ${devotional.verse}`,
    reflection: devotional.reflection,
    prayer: devotional.prayer,
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    console.log("Starting daily devotional generation...");
    const today = new Date().toISOString().split("T")[0];
    console.log("Today's date:", today);

    // Auto-cleanup: delete rows older than 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0];
    await supabase
      .from("daily_ai_content")
      .delete()
      .lt("date", sevenDaysAgo);

    // Check if today's devotional already exists
    const { data: existing } = await supabase
      .from("daily_ai_content")
      .select("id")
      .eq("date", today)
      .maybeSingle();

    if (existing) {
      console.log("Devotional already exists for today");
      return new Response(
        JSON.stringify({ success: true, message: "Already exists." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate both morning and night
    console.log("Generating morning devotional...");
    const morning = await generateDevotional("morning");

    console.log("Generating night devotional...");
    const night = await generateDevotional("night");

    // Save to database
    console.log("Saving to database...");
    const { error } = await supabase
      .from("daily_ai_content")
      .insert({
        date: today,
        morning_scripture: morning.scripture,
        morning_reflection: morning.reflection,
        morning_prayer: morning.prayer,
        night_scripture: night.scripture,
        night_reflection: night.reflection,
        night_prayer: night.prayer,
      });

    if (error) {
      console.error("Insert error:", error);
      throw error;
    }

    console.log("Successfully saved daily devotional!");

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Error:", message, err);

    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});