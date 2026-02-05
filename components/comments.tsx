"use client"

import Giscus from "@giscus/react"
import { MessageSquare } from "lucide-react"

interface CommentsSectionProps {
  postSlug: string
}

export function CommentsSection({ postSlug }: CommentsSectionProps) {
  return (
    <section className="mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-[#C9A962]" />
        <h3 className="text-2xl font-light text-[#E8E8E8]">
          Discussion
        </h3>
      </div>

      <div className="text-sm text-[#888] mb-6">
        <p>
          💬 Comments are powered by{" "}
          <a
            href="https://giscus.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A962] hover:text-[#E8E8E8] transition-colors underline decoration-[#C9A962]/30"
          >
            GitHub Discussions
          </a>
          . Sign in with your GitHub account to leave a comment.
        </p>
      </div>

      {/* Giscus Comments */}
      <Giscus
        id="comments"
        repo="LAKSHYA1509/BeautyInSomeCode"
        repoId="R_kgDORGKZ8g" // You'll need to get this from giscus.app
        category="General"
        categoryId="DIC_kwDORGKZ8s4C17Tr" // You'll need to get this from giscus.app
        mapping="pathname"
        term={postSlug}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />

      {/* Instructions */}
      <div className="mt-8 p-4 rounded-xl bg-[#1A1A1A]/30 border border-[#1A1A1A]">
        <p className="text-xs text-[#666] leading-relaxed">
          <strong className="text-[#888]">First time here?</strong> The comment system uses GitHub Discussions.
          Click the button above to sign in with GitHub. Your comments will appear both here and in the
          repository's discussions tab.
        </p>
      </div>
    </section>
  )
}
