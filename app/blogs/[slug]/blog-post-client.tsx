"use client"

import { CommentsSection } from "@/components/comments"
import { MobileShareButton, ShareButtons } from "@/components/share-buttons"
import { CodeBlock } from "@/components/ui/code-block"
import { getBlogPost } from "@/lib/blog-data"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export function BlogPostClient({ slug }: { slug: string }) {
  const post = getBlogPost(slug)

  if (!post) notFound()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="min-h-screen bg-[#050505] text-[#E8E8E8] selection:bg-[#C9A962]/30 relative overflow-x-hidden">

      {/* Background Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C9A962]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#8B7EC8]/5 rounded-full blur-[120px]" />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#C9A962] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Back Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 z-40"
      >
        <Link
          href="/blogs"
          className="group flex items-center gap-2 px-4 py-2 bg-[#111]/80 backdrop-blur-md border border-[#222] rounded-full hover:border-[#444] transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-[#888] group-hover:text-[#E8E8E8] group-hover:-translate-x-1 transition-all" />
          <span className="text-sm text-[#888] group-hover:text-[#E8E8E8] transition-colors">Back</span>
        </Link>
      </motion.header>

      <article className="relative z-10 pt-32 pb-20">
        <div className="mx-auto max-w-[1400px] px-6">

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-[#222] pb-12">
            <div className="lg:col-span-8 lg:col-start-3 text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium tracking-wide text-[#C9A962] bg-[#C9A962]/10 border border-[#C9A962]/20 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#E8E8E8] mb-8 leading-[1.1]">
                {post.title}
              </h1>

              <div className="flex items-center justify-center gap-8 text-sm text-[#666]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar Share */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-4 pt-4 sticky top-32 h-fit">
              <p className="text-xs font-mono text-[#444] uppercase tracking-widest mb-2">Share</p>
              <ShareButtons title={post.title} slug={post.slug} layout="vertical" />
            </div>

            {/* Main Content Area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <ReactMarkdown
                components={{
                  // Headers
                  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-[#E8E8E8] mt-12 mb-6" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-semibold text-[#E8E8E8] mt-16 mb-6 tracking-tight" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-xl font-medium text-[#C9A962] mt-10 mb-4" {...props} />,

                  // Paragraphs
                  p: ({ node, ...props }) => <p className="text-[#A0A0A0] text-lg leading-8 mb-6 font-light" {...props} />,

                  // Lists
                  ul: ({ node, ...props }) => <ul className="space-y-3 mb-8" {...props} />,
                  ol: ({ node, ...props }) => <ol className="space-y-3 mb-8 list-decimal list-inside text-[#A0A0A0]" {...props} />,
                  li: ({ children, ...props }) => (
                    <li className="flex gap-3 text-[#A0A0A0] leading-7" {...props}>
                      <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#C9A962]" />
                      <span>{children}</span>
                    </li>
                  ),

                  // Blockquotes
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-2 border-[#C9A962] pl-6 my-8 italic text-xl text-[#888]" {...props} />
                  ),

                  // Inline formatting
                  strong: ({ node, ...props }) => <strong className="text-[#E8E8E8] font-semibold" {...props} />,
                  a: ({ node, ...props }) => (
                    <a className="text-[#C9A962] hover:text-[#E8E8E8] underline decoration-[#C9A962]/30 hover:decoration-[#E8E8E8] transition-all" {...props} />
                  ),

                  // --- NEW: ULTRA-MODERN IMAGE COMPONENT ---
                  img: ({ src, alt }) => {
                    return (
                      <figure className="my-16">
                        {/* Image Container with Glow and Border */}
                        <div className="relative rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-[0_0_40px_-10px_rgba(201,169,98,0.15)] bg-[#0A0A0A]">
                          {/* We use standard img tag for broad compatibility, but styled heavily */}
                          <img
                            src={src}
                            alt={alt}
                            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                          />
                        </div>

                        {/* Editorial Caption */}
                        {alt && (
                          <figcaption className="mt-4 text-center text-sm text-[#888] font-mono tracking-tight flex items-center justify-center gap-2">
                            <span className="w-4 h-px bg-[#C9A962]/50"></span>
                            {alt}
                            <span className="w-4 h-px bg-[#C9A962]/50"></span>
                          </figcaption>
                        )}
                      </figure>
                    )
                  },

                  // Code Blocks
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline && match ? (
                      <CodeBlock
                        language={match[1]}
                        value={String(children).replace(/\n$/, "")}
                      />
                    ) : (
                      <code className="bg-[#1A1A1A] text-[#C9A962] px-1.5 py-0.5 rounded text-sm font-mono border border-[#2A2A2A]" {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>

              <div className="my-20 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <CommentsSection postSlug={post.slug} />
          </div>
        </div>
      </article>

      {/* Mobile Share Button */}
      <MobileShareButton title={post.title} slug={post.slug} />
    </main>
  )
}