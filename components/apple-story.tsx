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
              src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770047445/_MG_1942_t7bm33.jpg"
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
<div className="py-32 px-4 flex flex-col items-center justify-center relative">
  {/* Ambient background glow to make the 3D graph "pop" */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50" />

  <motion.div
    initial={{ scale: 0.85, opacity: 0, rotateY: 15 }}
    whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: "-150px" }}
    className="relative group"
  >
    {/* The Glass Container Wrapper */}
    <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 p-4 md:p-10 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-5xl mx-auto">
      
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
      <div className="mt-8 flex justify-between items-center px-4 opacity-40">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Contribution_Architecture.sys</span>
        </div>
        <span className="text-[10px] font-mono tracking-widest">v2.0.26</span>
      </div>
    </div>

    {/* Secondary floating glow behind the card */}
    <div className="absolute -inset-4 bg-primary/10 blur-[80px] -z-10 rounded-full group-hover:bg-primary/20 transition-colors duration-1000" />
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
              <span className="text-white">Spring Boot Microservices</span>
              <span className="text-[#86868B]"> to </span>
              <span className="text-white">Distributed Systems</span>
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
                src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770047961/download_geliue.jpg"
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
                src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770047967/download_smcy4q.jpg"
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
