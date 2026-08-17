import { NextResponse } from "next/server"

/**
 * Real, cross-visitor page views.
 *
 * The previous counter read localStorage, which meant it counted the current
 * browser's own refreshes and nobody else's — a first-time visitor saw
 * "1 views". Worse than showing nothing.
 *
 * This proxies a free, no-signup counter (abacus.jasoncameron.dev) from the
 * server rather than the browser, for three reasons: it has no CORS headers so
 * a client-side fetch would be blocked, proxying keeps the third party out of
 * the page source, and it means swapping to Redis or KV later is a change to
 * this one file.
 *
 * Honest limitation: the upstream namespace is public, so the count is not
 * tamper-proof. Fine for a personal site; do not treat it as analytics.
 */

const UPSTREAM = "https://abacus.jasoncameron.dev"
const NAMESPACE = "lakshyabhardwaj-com"

/** Keep keys tame — they become part of a URL path. */
function safeKey(raw: string | null): string {
  if (!raw) return "home"
  return raw.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 60) || "home"
}

export async function POST(request: Request) {
  const key = safeKey(new URL(request.url).searchParams.get("key"))

  try {
    const response = await fetch(`${UPSTREAM}/hit/${NAMESPACE}/${key}`, {
      // Never let a counter be cached — every call is meant to increment.
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    })

    if (!response.ok) throw new Error(`upstream ${response.status}`)

    const data: unknown = await response.json()
    const value =
      typeof data === "object" && data !== null && "value" in data
        ? Number((data as { value: unknown }).value)
        : Number.NaN

    if (!Number.isFinite(value)) throw new Error("upstream sent no usable value")

    return NextResponse.json({ views: value })
  } catch {
    // A dead counter must never be a visible error on the page. The component
    // renders nothing when views is null.
    return NextResponse.json({ views: null }, { status: 200 })
  }
}
