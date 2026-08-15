"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

/**
 * Drop the real cover in here when it's available — set `coverSrc` to a path
 * under /public (or a Cloudinary URL) and the CSS stand-in below is replaced
 * automatically. Left null rather than shipping a broken <img>.
 */
const coverSrc: string | null = null

const BOOK = {
  title: "Fcuk Around and Find Out",
  subtitle: "A book about not waiting.",
  blurb:
    "A raw, unfiltered call to action — against waiting, against perfection, against needing permission or applause before you start. It argues for taking the risk, owning whatever follows, and learning from it either way. Direct, conversational, and mostly concerned with the difference between planning a life and living one.",
  themes: ["Radical self-acceptance", "Owning consequences", "Boundaries", "Living authentically"],
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

        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,300px),1fr] md:gap-16">
          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: -2 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="mx-auto w-full max-w-[260px] md:mx-0 md:max-w-none"
          >
            {coverSrc ? (
              <img
                src={coverSrc}
                alt={`Cover of ${BOOK.title}`}
                className="w-full rounded-r-lg rounded-l-sm shadow-2xl shadow-black/60"
              />
            ) : (
              <div className="relative aspect-[2/3] overflow-hidden rounded-r-lg rounded-l-sm border border-[#2A2A2A] bg-gradient-to-br from-[#161616] via-[#111111] to-[#0A0A0A] shadow-2xl shadow-black/60">
                {/* Spine */}
                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/80 to-transparent" />

                <div className="flex h-full flex-col justify-between p-6 pl-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#666666]">
                    Lakshya Bhardwaj
                  </span>

                  <div>
                    <p className="text-3xl font-bold leading-[0.95] tracking-tight text-[#E8E8E8]">
                      FCUK
                      <br />
                      AROUND
                    </p>
                    <div className="my-3 h-px w-12 bg-[#C9A962]" />
                    <p className="text-3xl font-bold leading-[0.95] tracking-tight text-[#C9A962]">
                      AND
                      <br />
                      FIND OUT
                    </p>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#444444]">
                    Non-fiction
                  </span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="mb-3 text-2xl font-medium text-[#E8E8E8] sm:text-3xl md:text-4xl">
              {BOOK.title}
            </h3>
            <p className="mb-8 font-mono text-sm text-[#8B7EC8]">{BOOK.subtitle}</p>

            <p className="mb-10 max-w-2xl text-base leading-relaxed text-[#888888] sm:text-lg">
              {BOOK.blurb}
            </p>

            <div className="flex flex-wrap gap-2">
              {BOOK.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-1.5 text-[10px] font-medium text-[#888888] sm:text-xs"
                >
                  {theme}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
