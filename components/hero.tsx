"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="relative">
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 h-screen flex flex-col justify-between py-16 md:py-20">
            
            {/* Top Section - Header and Image */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12 items-start flex-1">
              {/* Left - Intro (takes 3 columns) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-3 pt-4"
              >
                <h2 className="text-5xl md:text-6xl lg:text-6xl font-light mb-14 leading-tight tracking-tight text-balance">
                  Namaste नमस्ते<br />
                  I Write<br />
                  I Code,
                  I Read
                </h2>

                {/* Credentials Bar */}
                <div className="flex flex-wrap gap-8 md:gap-14 text-xs md:text-sm border-t border-white/20 pt-8">
                  <span className="text-white/70 tracking-wide">Backend Developer</span>
                  <span className="text-white/70 tracking-wide">B.Tech @JCBUST</span>
                  <span className="text-white/70 tracking-wide">Developer</span>
                </div>
              </motion.div>

              {/* Right - Image (takes 2 columns) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex lg:col-span-2 justify-end items-start pt-6"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur opacity-50"></div>
                  <div className="relative w-72 h-122 rounded-3xl overflow-hidden bg-white/5 border border-white/20 shadow-2xl">
                    <Image
                      src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770029437/WhatsApp_Image_2026-02-02_at_16.10.36_rjinks.jpg"
                      alt="Lakshya"
                      width={288}
                      height={384}
                      className="w-200 h-220 object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center - Huge Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex-1 flex flex-col justify-center"
            >
              <h1 className="text-9xl md:text-10xl lg:text-12xl font-black leading-none tracking-tighter text-white text-balance">
                Lakshya
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-white/60 to-white/20 mt-10"></div>
            </motion.div>

            {/* Bottom Section */}
            <div className="flex justify-between items-end pt-8 flex-shrink-0">
              {/* Left - Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xs text-white/40 font-light tracking-wide"
              >
                © PERSONAL PROFILE स्वयंपरिणय
              </motion.div>

              {/* Right - CTA Badge */}
              <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                View Projects
              </motion.a>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}
