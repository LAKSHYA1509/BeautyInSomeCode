"use client"

import { Eye } from "lucide-react"
import { useEffect, useState } from "react"

interface PageViewsProps {
    slug: string
    className?: string
}

/**
 * Simple page view counter using localStorage
 * This is a client-side only solution that tracks views in the browser
 * 
 * For real analytics across all users, use Vercel Analytics (already enabled)
 * or implement a backend solution with Redis/Supabase
 */
export function PageViews({ slug, className = "" }: PageViewsProps) {
    const [views, setViews] = useState<number>(0)

    useEffect(() => {
        // Get or initialize view count from localStorage
        const storageKey = `blog-views-${slug}`
        const stored = localStorage.getItem(storageKey)
        const currentViews = stored ? parseInt(stored, 10) : 0

        // Increment view count
        const newViews = currentViews + 1
        localStorage.setItem(storageKey, newViews.toString())
        setViews(newViews)
    }, [slug])

    if (!views) return null

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Eye className="w-4 h-4" />
            <span>{views.toLocaleString()} views</span>
        </div>
    )
}

/**
 * To use this component, add it to your blog post:
 * 
 * import { PageViews } from "@/components/page-views"
 * 
 * <PageViews slug={post.slug} className="text-sm text-[#666]" />
 * 
 * Note: This only tracks views in the current browser.
 * For real cross-user analytics, use Vercel Analytics or add a backend.
 */
