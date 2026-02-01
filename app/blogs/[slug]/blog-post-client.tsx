"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { getBlogPost } from "@/lib/blog-data"
import { CommentsSection } from "@/components/comments"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export function BlogPostClient({ slug }: { slug: string }) {
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[#1A1A1A]"
      >
        <nav className="mx-auto max-w-4xl px-6 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/blogs"
              className="flex items-center gap-2 text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">All Posts</span>
            </Link>
          </div>
        </nav>
      </motion.header>

      <article className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-[#888888] bg-[#1A1A1A] rounded-full border border-[#2A2A2A]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#E8E8E8] mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-[#888888]">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-light prose-headings:text-[#E8E8E8]
              prose-h1:text-3xl prose-h1:mb-8
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-[#1A1A1A] prose-h2:pb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[#C9A962]
              prose-p:text-[#AAAAAA] prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#8B7EC8] prose-a:no-underline hover:prose-a:text-[#C9A962]
              prose-strong:text-[#E8E8E8] prose-strong:font-medium
              prose-code:text-[#C9A962] prose-code:bg-[#1A1A1A] prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-pre:bg-[#1A1A1A] prose-pre:border prose-pre:border-[#2A2A2A] prose-pre:rounded-xl prose-pre:overflow-x-auto
              prose-ul:text-[#AAAAAA] prose-ol:text-[#AAAAAA]
              prose-li:marker:text-[#555555]
              prose-blockquote:border-l-[#8B7EC8] prose-blockquote:text-[#888888] prose-blockquote:italic"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>

          {/* Comments Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 pt-12 border-t border-[#1A1A1A]"
          >
            <CommentsSection postSlug={post.slug} />
          </motion.div>
        </div>
      </article>
    </main>
  )
}
