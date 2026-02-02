"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AppleStory() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, -200])
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1])

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-black via-[#0F0F14] to-[#0B0B0F] text-white">

      {/* SCENE 1 — PINNED IMAGE WITH CONTENT */}
      <div className="relative">

        <div className="sticky top-0 h-screen flex items-center justify-center bg-[#0B0B0F]">

          <motion.div
            style={{ y: yParallax, scale: imageScale }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=800&fit=crop"
              className="w-[75vw] max-w-6xl rounded-3xl shadow-[0_25px_100px_-12px_rgba(0,0,0,0.8)] object-cover"
              alt="Backend architecture and code"
            />
            {/* Image overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-purple-500/20 rounded-3xl mix-blend-overlay" />
          </motion.div>

        </div>

        {/* Content scrolls on top */}
        <div className="relative bg-gradient-to-b from-[#0B0B0F] via-[#0F0F14] to-[#0B0B0F] py-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-3xl md:text-5xl lg:text-6xl leading-tight font-light mb-8">
              <span className="text-[#86868B]">Building </span>
              <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">backend systems</span>
            </p>
            <p className="text-3xl md:text-5xl lg:text-6xl leading-tight font-light">
              <span className="text-[#86868B]">that power </span>
              <span className="bg-gradient-to-r from-primary via-purple-400 to-white bg-clip-text text-transparent">millions.</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* SCENE 2 — TECHNICAL EXPERTISE */}
      <div className="py-32 px-4 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />

        <motion.div
          initial={{ scale: 0.85, opacity: 0, rotateY: 15 }}
          whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: "-150px" }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop"
            className="w-[65vw] max-w-5xl rounded-3xl shadow-[0_35px_120px_-15px_rgba(139,92,246,0.4)] object-cover"
            alt="Clean code and architecture"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl" />
        </motion.div>
      </div>

      {/* SCENE 3 — WORKFLOW */}
      <div className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <p className="text-3xl md:text-5xl leading-tight font-light">
              <span className="text-[#86868B]">From </span>
              <span className="text-white">Spring Boot microservices</span>
              <span className="text-[#86868B]"> to </span>
              <span className="text-white">distributed systems</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop"
                className="w-full h-full object-cover"
                alt="System design"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-light">System Design</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop"
                className="w-full h-full object-cover"
                alt="Database optimization"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-light">Data Architecture</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCENE 4 — AUTHORITY */}
      <div className="py-40 px-4 flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: "-150px" }}
          className="text-center relative z-10"
        >
          <div className="mb-16">
            <motion.h2
              className="text-7xl md:text-9xl font-extralight mb-6 tracking-tight"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Backend.
              </span>
            </motion.h2>
            <motion.h2
              className="text-7xl md:text-9xl font-extralight tracking-tight"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-[#C9A962] via-[#D4AF37] to-[#C9A962] bg-clip-text text-transparent">
                Excellence.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[#86868B] mt-16 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Architecting robust{" "}
            <span className="text-white">Java applications</span> with{" "}
            <span className="text-white">scalability</span> at the core.
          </motion.p>
        </motion.div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#C9A962]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

    </section>
  )
}
