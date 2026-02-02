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

        <div className="sticky top-0 h-screen flex items-center justify-center bg-[#0B0B0F] px-4">

          <motion.div
            style={{ y: yParallax, scale: imageScale }}
            className="relative w-full"
          >
            <img
              src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770047445/_MG_1942_t7bm33.jpg"
              className="w-full sm:w-[85vw] md:w-[75vw] max-w-6xl mx-auto rounded-2xl sm:rounded-3xl shadow-[0_25px_100px_-12px_rgba(0,0,0,0.8)] object-cover"
              alt="Backend architecture and code"
            />
            {/* Image overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-purple-500/20 rounded-2xl sm:rounded-3xl mix-blend-overlay" />
          </motion.div>

        </div>

        {/* Content scrolls on top */}
        <div className="relative bg-gradient-to-b from-[#0B0B0F] via-[#0F0F14] to-[#0B0B0F] py-16 sm:py-24 md:py-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-light mb-4 sm:mb-6 md:mb-8">
              <span className="text-[#86868B]">Building </span>
              <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">backend systems</span>
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-light">
              <span className="text-[#86868B]">that power </span>
              <span className="bg-gradient-to-r from-primary via-purple-400 to-white bg-clip-text text-transparent">millions.</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* SCENE 2 — TECHNICAL EXPERTISE */}
      <div className="py-16 sm:py-24 md:py-32 px-4 flex flex-col items-center justify-center relative">
        {/* Ambient background glow to make the 3D graph "pop" */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50" />

        <motion.div
          initial={{ scale: 0.85, opacity: 0, rotateY: 15 }}
          whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-150px" }}
          className="relative group w-full"
        >
          {/* The Glass Container Wrapper */}
          <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 p-3 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden max-w-5xl mx-auto">

            {/* Subtle light streak across the card */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* THE GITHUB 3D IMAGE */}
            <motion.img
              src="https://raw.githubusercontent.com/LAKSHYA1509/LAKSHYA1509/main/profile-3d-contrib/profile-night-view.svg"
              alt="GitHub 3D Stats"
              className="w-full relative z-10 select-none filter brightness-110"
              style={{
                // Adding a drop shadow to the SVG itself to give it depth
                filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.7))"
              }}
            />

            {/* Bottom Status Bar for that "System" feel */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-between items-center gap-2 px-2 sm:px-4 opacity-40">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.2em]">Contribution_Architecture.sys</span>
              </div>
              <span className="text-[8px] sm:text-[10px] font-mono tracking-widest">v2.0.26</span>
            </div>
          </div>

          {/* Secondary floating glow behind the card */}
          <div className="absolute -inset-4 bg-primary/10 blur-[80px] -z-10 rounded-full group-hover:bg-primary/20 transition-colors duration-1000" />
        </motion.div>
      </div>

      {/* SCENE 3 — WORKFLOW */}
      <div className="py-16 sm:py-24 md:py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-light px-4">
              <span className="text-[#86868B]">From </span>
              <span className="text-white">Spring Boot Microservices</span>
              <span className="text-[#86868B]"> to </span>
              <span className="text-white">Distributed Systems</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770047961/download_geliue.jpg"
                className="w-full h-full object-cover"
                alt="System design"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-light">System Design</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <img
                src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770047967/download_smcy4q.jpg"
                className="w-full h-full object-cover"
                alt="Database optimization"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-light">Data Architecture</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCENE 4 — AUTHORITY */}
      <div className="py-24 sm:py-32 md:py-40 px-4 flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: "-150px" }}
          className="text-center relative z-10"
        >
          <div className="mb-8 sm:mb-12 md:mb-16">
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight mb-4 sm:mb-6 tracking-tight"
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#86868B] mt-8 sm:mt-12 md:mt-16 max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            Architecting robust{" "}
            <span className="text-white">Java applications</span> with{" "}
            <span className="text-white">scalability</span> at the core.
          </motion.p>
        </motion.div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-gradient-radial from-[#C9A962]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

    </section>
  )
}
