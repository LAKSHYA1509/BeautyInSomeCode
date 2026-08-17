"use client"

import { Eye } from "lucide-react"
import { useEffect, useState } from "react"

interface PageViewsProps {
  slug: string
  className?: string
}

/**
 * Real page views, counted across everyone who visits.
 *
 * The previous version read localStorage, so it counted the current browser's
 * own refreshes and nothing else — every first-time visitor was shown
 * "1 views". This calls our own /api/views route, which does the counting
 * server-side.
 *
 * If the counter is unavailable it renders nothing at all. A missing number is
 * invisible; a broken or obviously wrong one is not.
 */
export function PageViews({ slug, className = "" }: PageViewsProps) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    // StrictMode mounts effects twice in development, which would double-count.
    let cancelled = false

    const controller = new AbortController()

    fetch(`/api/views?key=${encodeURIComponent(slug)}`, {
      method: "POST",
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { views?: number | null } | null) => {
        if (cancelled) return
        if (typeof data?.views === "number") setViews(data.views)
      })
      .catch(() => {
        // Silent by design — see the note above.
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [slug])

  if (views === null) return null

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Eye className="h-4 w-4" aria-hidden />
      <span>
        {views.toLocaleString()} {views === 1 ? "view" : "views"}
      </span>
    </div>
  )
}
