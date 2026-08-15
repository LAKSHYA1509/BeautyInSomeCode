"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

type Props = {
  children: ReactNode
  /**
   * "lift"  — opacity + translate + scale. Only safe on sections with no
   *           background of their own; moving one would expose a seam.
   * "fade"  — opacity only. Required for sections that paint a background,
   *           and for any section containing `fixed` or `sticky` descendants,
   *           since a transform on an ancestor becomes their containing block
   *           and would break them (Awards' floating certificate, the sticky
   *           book cover, the sticky Philosophy images).
   */
  variant?: "lift" | "fade"
}

/**
 * Scroll-linked arrival and departure.
 *
 * The gaps between sections used to be genuinely dead — 320px of black at
 * every boundary with nothing happening in it. Halving the padding fixed the
 * size; this makes the remaining space do work. A section resolves as it
 * arrives and recedes as it leaves, so the space between two sections reads
 * as a handover rather than a hole.
 */
export function SectionReveal({ children, variant = "lift" }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // Two independent ranges, so timing is the same whether a section is 600px
  // or 3000px tall. A single start-to-end range would make tall sections
  // (Work, now) animate far too slowly.
  const { scrollYProgress: enter } = useScroll({
    target: ref,
    offset: ["start end", "start 60%"],
  })
  const { scrollYProgress: leave } = useScroll({
    target: ref,
    offset: ["end 40%", "end start"],
  })

  const opacity = useTransform([enter, leave], ([e, l]: number[]) => Math.min(e, 1 - l * 0.8))
  const y = useTransform(enter, [0, 1], [56, 0])
  const scale = useTransform([enter, leave], ([e, l]: number[]) => 0.97 + e * 0.03 - l * 0.015)

  if (reduceMotion) {
    return <div ref={ref}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={variant === "fade" ? { opacity } : { opacity, y, scale }}
    >
      {children}
    </motion.div>
  )
}
