"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AppleStory() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const scaleText = useTransform(scrollYProgress, [0, 0.2], [1, 1.2])
  const fade = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const yParallax = useTransform(scrollYProgress, [0.15, 0.4], [0, -150])

  return (
    <section ref={ref} className="relative bg-[#0B0B0F] text-white">

      {/* SCENE 1 — BIG INTRO */}
      <div className="min-h-screen flex items-center justify-center py-20">
        <motion.h1
          style={{ scale: scaleText, opacity: fade }}
          className="text-[10vw] font-light tracking-tight text-center px-4"
        >
          नमस्कार,
          <br />मैं लक्ष्य
        </motion.h1>
      </div>

      {/* SCENE 2 — PINNED IMAGE WITH CONTENT */}
      <div className="relative">

        <div className="sticky top-0 h-screen flex items-center justify-center bg-[#0B0B0F]">

          <motion.img
            style={{ y: yParallax }}
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            className="w-[70vw] max-w-5xl rounded-2xl shadow-2xl object-cover"
            alt="Workspace collaboration"
          />

        </div>

        {/* Content scrolls on top */}
        <div className="relative bg-[#0B0B0F] py-24 px-4">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-2xl md:text-4xl text-center max-w-3xl mx-auto text-[#6E6E73] leading-relaxed"
          >
            I design systems that scale.
            <br />
            <span className="text-white">I build ideas that last.</span>
          </motion.p>
        </div>
      </div>

      {/* SCENE 3 — PRODUCT STYLE IMAGE */}
      <div className="py-24 px-4 flex items-center justify-center">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          className="w-[60vw] max-w-4xl rounded-2xl shadow-2xl object-cover"
          alt="Development workspace"
        />
      </div>

      {/* SCENE 4 — AUTHORITY */}
      <div className="py-28 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl font-light mb-4">
            Engineering.
          </h2>
          <h2 className="text-6xl md:text-8xl font-light text-[#C9A962]">
            Creativity.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-[#888888] mt-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with precision and purpose.
          </motion.p>
        </motion.div>
      </div>

    </section>
  )
}
