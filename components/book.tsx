"use client"

import cover from "@/public/book/fcuk-around-and-find-out-cover.jpg"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, BookOpen } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

/**
 * Copy here is the book's own published back-cover text, not a paraphrase.
 * Cover art is served from /public rather than hotlinked off Amazon's CDN —
 * their image URLs carry size directives that change and would break silently.
 */
const BOOK = {
  title: "Fcuk Around and Find Out",
  subtitle: "Own Your Consequences Or Get Owned by Them",
  hook: "The questions of “what-ifs” take a part of your present.",
  paragraphs: [
    "Taking risks can be daunting, unpredictable, and at times, downright uncomfortable. But it’s also essential for growth, learning, and discovering what we’re truly capable of.",
    "This book is a raw, unfiltered exploration of the consequences that come with stepping outside your comfort zone and embracing the unknown.",
    "It’s for those who are tired of playing it safe and are ready to face life’s challenges head-on. If you’re willing to bet on yourself, break the boundaries, and accept the repercussions, then it’s time to…",
  ],
  punchline: "fcuk around and find out.",
  publisher: "OrangeBooks Publication",
  isbn: "978-93-6554-497-8",
  format: "Non-fiction · Paperback & eBook",
  buyUrl: "https://www.amazon.in/dp/9365544971",
}

export function BookSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="book"
      className="relative overflow-hidden py-16 sm:py-24 md:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-bl from-[#C9A962]/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#C9A962] sm:mb-4 sm:text-sm">
            Also an author
          </span>
          <h2 className="text-2xl font-light text-[#E8E8E8] sm:text-3xl md:text-4xl lg:text-5xl">
            I wrote a book.
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,280px),1fr] md:gap-16">
          {/* Cover */}
          <motion.a
            href={BOOK.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${BOOK.title} on Amazon`}
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: -2 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="group mx-auto block w-full max-w-[240px] md:mx-0 md:sticky md:top-24 md:max-w-none"
          >
            <div className="relative overflow-hidden rounded-r-lg rounded-l-sm shadow-2xl shadow-black/60 ring-1 ring-[#2A2A2A]">
              <Image
                src={cover}
                alt={`Front cover of ${BOOK.title} by Lakshya Bhardwaj`}
                placeholder="blur"
                sizes="(max-width: 768px) 240px, 280px"
                className="w-full"
              />
              {/* Spine shading so it reads as a physical object, not a flat jpg */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/60 to-transparent"
              />
            </div>
          </motion.a>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="mb-2 text-2xl font-medium text-[#E8E8E8] sm:text-3xl md:text-4xl">
              {BOOK.title}
            </h3>
            <p className="mb-8 font-mono text-sm text-[#8B7EC8]">{BOOK.subtitle}</p>

            <p className="mb-6 max-w-2xl text-lg font-light italic leading-snug text-[#C9A962] sm:text-xl">
              {BOOK.hook}
            </p>

            <div className="mb-6 max-w-2xl space-y-4">
              {BOOK.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-[#888888] sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mb-10 text-xl font-medium text-[#E8E8E8] sm:text-2xl">
              {BOOK.punchline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BOOK.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#C9A962] px-6 py-3 text-sm font-medium text-[#0D0D0D] transition-all duration-300 hover:bg-[#E8E8E8] sm:text-base"
              >
                <BookOpen className="h-4 w-4" />
                Read it on Amazon
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#1A1A1A] pt-6 font-mono text-xs text-[#666666] sm:text-sm">
              <div>
                <dt className="inline text-[#444444]">Publisher / </dt>
                <dd className="inline">{BOOK.publisher}</dd>
              </div>
              <div>
                <dt className="inline text-[#444444]">ISBN / </dt>
                <dd className="inline">{BOOK.isbn}</dd>
              </div>
              <div>
                <dt className="inline text-[#444444]">Format / </dt>
                <dd className="inline">{BOOK.format}</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
