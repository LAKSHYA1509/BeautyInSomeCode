"use client"

import { motion, useScroll } from "framer-motion"

/**
 * Page-level reading progress bar.
 *
 * This previously lived inside TestimonialsSection, which meant a global,
 * page-wide indicator only existed once that one section had mounted. It
 * belongs at the page root.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed left-0 right-0 top-0 z-50 hidden h-1 bg-border md:block">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-primary via-purple-500 to-primary"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
