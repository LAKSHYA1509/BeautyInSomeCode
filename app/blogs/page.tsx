"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-data"

export default function BlogsPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[#1A1A1A]"
      >
        <nav className="mx-auto max-w-5xl px-6 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <span className="text-sm text-[#888888]">Blog</span>
          </div>
        </nav>
      </motion.header>

      <div className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="inline-block text-sm text-[#C9A962] tracking-[0.2em] uppercase mb-4">
              Writings
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8E8E8] mb-6">
              Thoughts on code, design, and craft.
            </h1>
            <p className="text-lg text-[#888888] max-w-2xl">
              Exploring ideas at the intersection of technology, architecture, and problem-solving.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blogs/${post.slug}`} className="group block">
                  <div className="relative p-8 md:p-10 rounded-2xl border border-[#1A1A1A] hover:border-[#2A2A2A] bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40 transition-all duration-500">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7EC8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs text-[#888888] bg-[#1A1A1A] rounded-full border border-[#2A2A2A]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-medium text-[#E8E8E8] mb-4 group-hover:text-[#C9A962] transition-colors duration-300">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[#888888] leading-relaxed mb-6 max-w-3xl">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-6 text-sm text-[#555555]">
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
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
