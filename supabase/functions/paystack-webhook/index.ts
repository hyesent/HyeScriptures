import { serve } from "https://deno.land/std@0.224.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import * as crypto from "https://deno.land/std@0.224.0/crypto/mod.ts"

const PAYSTACK_SECRET = Deno.env.get("PAYSTACK_SECRET_KEY")!
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

serve(async (req) => {
  const body = await req.text()
  const signature = req.headers.get("x-paystack-signature") || ""

  // Verify signature
  const hash = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(body))
  const hex = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("")
  if (hex !== signature) return new Response("Invalid", { status: 401 })

  const event = JSON.parse(body)
  console.log("Webhook received:", event.event)

  if (event.event === "charge.success") {
    const { email, metadata } = event.data
    
    // Find user by email
    const { data: { users } } = await supabase.auth.admin.listUsers()
    const user = users?.find(u => u.email === email)
    
    if (!user) {
      console.log("User not found:", email)
      return new Response("User not found", { status: 404 })
    }

    const plan = metadata?.plan || "pro"
    const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()

    await supabase.from("subscriptions").upsert({
      user_id: user.id,
      tier: plan,
      status: "active",
      provider: "paystack",
      provider_id: String(event.data.id),
      expires_at: expiresAt,
    })

    console.log(`✅ ${email} upgraded to ${plan}`)
  }

  if (event.event === "subscription.disable") {
    await supabase.from("subscriptions")
      .update({ status: "expired", tier: "free" })
      .eq("provider_id", String(event.data.subscription_code))
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
  })
})