"use client"

import { motion } from "framer-motion"
import { Check, Facebook, Linkedin, Link as LinkIcon, Share2, Twitter } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
    title: string
    slug: string
    layout?: "horizontal" | "vertical"
}

export function ShareButtons({ title, slug, layout = "vertical" }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    // Construct the full URL
    const url = typeof window !== 'undefined' ? `${window.location.origin}/blogs/${slug}` : ''

    const shareData = {
        title,
        url
    }

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData)
            } catch (err) {
                console.log('Share cancelled or failed')
            }
        } else {
            setShowMenu(!showMenu)
        }
    }

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }

    const containerClass = layout === "vertical"
        ? "flex flex-col gap-3"
        : "flex flex-row gap-3"

    return (
        <div className="relative">
            {/* Main Share Button */}
            <div className={containerClass}>
                <motion.button
                    onClick={handleNativeShare}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-3 rounded-full border border-[#222] text-[#888] hover:bg-[#C9A962] hover:text-black hover:border-[#C9A962] transition-all duration-300 relative"
                    title="Share this article"
                >
                    <Share2 className="w-4 h-4" />
                </motion.button>

                {/* Share Menu (shows if native share is not available) */}
                {showMenu && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute left-full ml-4 top-0 bg-[#111]/95 backdrop-blur-md border border-[#222] rounded-2xl p-3 shadow-xl z-50 min-w-[200px]"
                    >
                        <div className="flex flex-col gap-2">
                            {/* Twitter */}
                            <a
                                href={shareLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1d9bf0]/10 hover:text-[#1d9bf0] transition-colors group"
                            >
                                <Twitter className="w-4 h-4" />
                                <span className="text-sm">Share on Twitter</span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={shareLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#0077b5]/10 hover:text-[#0077b5] transition-colors group"
                            >
                                <Linkedin className="w-4 h-4" />
                                <span className="text-sm">Share on LinkedIn</span>
                            </a>

                            {/* Facebook */}
                            <a
                                href={shareLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1877f2]/10 hover:text-[#1877f2] transition-colors group"
                            >
                                <Facebook className="w-4 h-4" />
                                <span className="text-sm">Share on Facebook</span>
                            </a>

                            {/* Divider */}
                            <div className="h-px bg-[#222] my-1" />

                            {/* Copy Link */}
                            <button
                                onClick={handleCopyLink}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#C9A962]/10 hover:text-[#C9A962] transition-colors group text-left"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 text-green-500" />
                                        <span className="text-sm text-green-500">Link copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <LinkIcon className="w-4 h-4" />
                                        <span className="text-sm">Copy link</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Copy Link Button (separate) */}
                <motion.button
                    onClick={handleCopyLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-3 rounded-full border border-[#222] text-[#888] hover:bg-[#E8E8E8] hover:text-black hover:border-[#E8E8E8] transition-all duration-300"
                    title="Copy link"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                    ) : (
                        <LinkIcon className="w-4 h-4" />
                    )}
                </motion.button>
            </div>
        </div>
    )
}

// Mobile Share Button (appears at bottom on mobile)
export function MobileShareButton({ title, slug }: { title: string; slug: string }) {
    const url = typeof window !== 'undefined' ? `${window.location.origin}/blogs/${slug}` : ''
    const [copied, setCopied] = useState(false)

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, url })
            } catch (err) {
                console.log('Share cancelled')
            }
        } else {
            // Fallback: copy to clipboard
            await navigator.clipboard.writeText(url)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="lg:hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-[#C9A962] text-black font-medium rounded-full shadow-lg shadow-[#C9A962]/20 hover:shadow-[#C9A962]/40 transition-all duration-300"
        >
            {copied ? (
                <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                </>
            ) : (
                <>
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                </>
            )}
        </motion.button>
    )
}
