"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AppleStory() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.4])
  const fade = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <section ref={ref} className="relative bg-[#0B0B0F] text-white">

      {/* SCENE 1 — BIG INTRO */}
      <div className="h-[120vh] flex items-center justify-center">
        <motion.h1
          style={{ scale: scaleText, opacity: fade }}
          className="text-[10vw] font-light tracking-tight text-center"
        >
          नमस्कार,
          <br />मैं लक्ष्य
        </motion.h1>
      </div>

      {/* SCENE 2 — PINNED IMAGE */}
      <div className="relative h-[160vh]">

        <div className="sticky top-0 h-screen flex items-center justify-center">

          <motion.img
            style={{ y: yParallax }}
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            className="w-[70vw] max-w-5xl rounded-2xl shadow-2xl"
          />

        </div>
      </div>

      {/* SCENE 3 — TEXT STORY */}
      <div className="h-[120vh] flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl text-center max-w-4xl text-[#6E6E73]"
        >
          I design systems that scale.
          <br />
          I build ideas that last.
        </motion.p>
      </div>

      {/* SCENE 4 — PRODUCT STYLE IMAGE */}
      <div className="h-[140vh] flex items-center justify-center">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="w-[60vw] rounded-2xl shadow-2xl"
        />
      </div>

      {/* SCENE 5 — AUTHORITY */}
      <div className="h-[120vh] flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[8vw] font-light text-center"
        >
          Engineering.
          <br />
          <span className="text-[#C9A962]">Creativity.</span>
        </motion.h2>
      </div>

    </section>
  )
}
