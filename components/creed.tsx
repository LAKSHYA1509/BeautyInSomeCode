"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

/**
 * Quotes are stored as segments rather than one string so emphasis is part of
 * the data, not markup scattered through JSX. `strong` carries the weight,
 * `em` the italic aside, `accent` the gold hit for the words that should land.
 */
type Segment = {
  text: string
  style?: "strong" | "em" | "accent"
}

type Quote = {
  segments: Segment[]
  author: string
  note?: string
  scale: "lead" | "body"
}

const t = (text: string): Segment => ({ text })
const strong = (text: string): Segment => ({ text, style: "strong" })
const em = (text: string): Segment => ({ text, style: "em" })
const accent = (text: string): Segment => ({ text, style: "accent" })

const quotes: Quote[] = [
  {
    scale: "lead",
    segments: [t("Get "), accent("inspired to learn"), t(". Then "), accent("learn to inspire"), t(".")],
    author: "Lakshya Bhardwaj",
    note: "Mine.",
  },
  {
    scale: "body",
    segments: [
      t("The fastest way to attract what you want in life is to "),
      strong("deserve"),
      t(" it — by doing so much work that it becomes "),
      em("unreasonable"),
      t(" not to achieve it. Do so much work that it becomes unreasonable that you fail. The seat at the table is yours if you want it. Do the hard work. Build the skills "),
      strong("no one can ignore"),
      t(". Adjust the mindset to where you want to go, then pull up a chair and sit down. Do so much work with "),
      accent("relentless obsession"),
      t(" that when people see you, they are grateful they don't have to compete against you. "),
      em("The fastest shortcut is to stop looking for shortcuts."),
      t(" Do the work."),
    ],
    author: "Alex Hormozi",
    note: "Not mine. Still runs my week.",
  },
]

function Rendered({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((segment, i) => {
        if (segment.style === "strong") {
          return (
            <strong key={i} className="font-semibold text-[#E8E8E8]">
              {segment.text}
            </strong>
          )
        }
        if (segment.style === "em") {
          return (
            <em key={i} className="italic text-[#B8B8B8]">
              {segment.text}
            </em>
          )
        }
        if (segment.style === "accent") {
          return (
            <em key={i} className="font-semibold not-italic text-[#C9A962]">
              {segment.text}
            </em>
          )
        }
        return <span key={i}>{segment.text}</span>
      })}
    </>
  )
}

export function CreedSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="creed"
      className="relative overflow-hidden bg-[#0D0D0D] py-16 sm:py-24 md:py-32 lg:py-40"
    >
      {/* Oversized watermark. aria-hidden so screen readers get the word once,
          from the visible heading below, rather than twice. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-6 select-none overflow-hidden"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className="whitespace-nowrap text-center text-[22vw] font-bold leading-none tracking-tighter text-[#141414]"
        >
          RELENTLESS
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-[#C9A962] sm:mb-4 sm:text-sm">
            The one word
          </span>
          <h2 className="text-3xl font-light tracking-tight text-[#E8E8E8] sm:text-4xl md:text-5xl lg:text-6xl">
            Relentless.
          </h2>
        </motion.div>

        <div className="space-y-14 sm:space-y-20">
          {quotes.map((quote, index) => (
            <motion.figure
              key={quote.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 + index * 0.2 }}
              className="group relative border-l-2 border-[#1A1A1A] pl-6 transition-colors duration-500 hover:border-[#C9A962]/60 sm:pl-10"
            >
              <span
                aria-hidden
                className="absolute -top-6 left-3 select-none font-serif text-6xl leading-none text-[#C9A962]/20 sm:left-5 sm:text-7xl"
              >
                &ldquo;
              </span>

              <blockquote
                className={
                  quote.scale === "lead"
                    ? "relative text-2xl font-light leading-snug text-[#D8D8D8] sm:text-3xl md:text-4xl lg:text-5xl"
                    : "relative text-base font-light leading-relaxed text-[#9A9A9A] sm:text-lg md:text-xl"
                }
              >
                <Rendered segments={quote.segments} />
              </blockquote>

              <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.15em] sm:text-sm">
                <span className="text-[#888888]">— {quote.author}</span>
                {quote.note && (
                  <>
                    <span className="text-[#2A2A2A]">/</span>
                    <span className="normal-case tracking-normal text-[#555555]">{quote.note}</span>
                  </>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
