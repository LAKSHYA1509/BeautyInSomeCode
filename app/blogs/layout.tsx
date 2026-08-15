import { SITE } from "@/lib/site"
import type { Metadata } from "next"
import type { ReactNode } from "react"

/**
 * app/blogs/page.tsx is a client component, so it can't export `metadata`
 * itself. Segment-level metadata lives here instead; individual posts override
 * it from their own generateMetadata.
 */
export const metadata: Metadata = {
  title: `Writing | ${SITE.name}`,
  description:
    "Notes on backend engineering, multi-tenant architecture, and running systems in production.",
  alternates: { canonical: `${SITE.url}/blogs` },
  openGraph: {
    type: "website",
    title: `Writing | ${SITE.name}`,
    description:
      "Notes on backend engineering, multi-tenant architecture, and running systems in production.",
    url: `${SITE.url}/blogs`,
    siteName: SITE.name,
  },
}

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
