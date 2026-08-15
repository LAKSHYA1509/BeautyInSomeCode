"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const highlights = [
  { label: "Backend Architecture", description: "Scalable systems" },
  { label: "700+ DSA", description: "Problems solved" },
  { label: "Hackathon Winner", description: "Multiple wins" },
  { label: "Speaker & Writer", description: "Tech community" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-xs sm:text-sm text-[#C9A962] tracking-[0.2em] uppercase mb-4 sm:mb-6"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#E8E8E8] mb-6 sm:mb-8 leading-tight"
            >
              Twelve clients. One codebase. Mine to keep running.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 sm:space-y-6 text-[#888888] text-base sm:text-lg leading-relaxed"
            >
              <p>
                I&apos;m a backend and platform engineer. Right now that means owning a
                multi-tenant loyalty platform in production — one codebase serving
                twelve white-labelled clients, and everything underneath it: the
                Postgres schema, the tenancy rules, the CI that ships it, and the
                pager when it doesn&apos;t.
              </p>
              <p>
                Most of what I actually know came from running things that were already
                live. Idempotent rollouts, blast-radius reasoning, row-level isolation —
                those aren&apos;t ideas I read about. They&apos;re the shape of problems
                I&apos;ve had to fix at an inconvenient hour, with real users on the
                other side.
              </p>
              <p>
                I write too — a book, and whatever else is bothering me that week.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12"
            >
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="group p-3 sm:p-4 rounded-xl border border-[#1A1A1A] hover:border-[#2A2A2A] hover:bg-[#1A1A1A]/30 transition-all duration-300"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <span className="block text-sm sm:text-base text-[#E8E8E8] font-medium mb-1">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm text-[#888888]">
                      {item.description}
                    </span>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative order-first lg:order-last"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              {/* Abstract gradient visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-[#2A2A2A]"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-8 rounded-full border border-[#8B7EC8]/30"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-16 rounded-full border border-[#4A6FA5]/30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#C9A962] shadow-[0_0_40px_rgba(201,169,98,0.5)]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
              <Image src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770026507/_MG_1193_y6h7kx.jpg" alt="Hero" fill className="object-cover" />
              <Image src="https://res.cloudinary.com/dgmrrew73/image/upload/v1770026507/_MG_1193_y6h7kx.jpg" alt="Hero" fill className="object-cover" />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-[#8B7EC8]/20 to-transparent backdrop-blur-sm border border-[#8B7EC8]/10"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-[#4A6FA5]/20 to-transparent backdrop-blur-sm border border-[#4A6FA5]/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
