"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Always run hooks
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const y = useTransform(smooth, [0, 1], [0, 150])
  const scale = useTransform(smooth, [0, 0.5], [1, 1.1])

  // THEN mount logic
  useEffect(() => setMounted(true), [])

  return (
    <div ref={ref} className="relative">

      {/* Hide content until mounted */}
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>

        <section className="h-screen bg-black text-white flex flex-col justify-center items-center">

          <motion.h1 style={{ y }} className="text-[12vw] font-bold">
            नमस्कार, मैं लक्ष्य!
          </motion.h1>

          <motion.img
            src="/lakshya.jpg"
            alt="Lakshya"
            style={{ scale }}
            className="h-[60vh] object-contain"
          />

        </section>

        <section className="h-[40vh] flex gap-6 justify-center items-center bg-black">

          <Link href="#projects" className="px-8 py-4 bg-white text-black rounded-full">
            View Work
          </Link>

          <Link href="/blogs" className="px-8 py-4 border border-gray-600 rounded-full">
            Blogs
          </Link>

        </section>

      </div>

    </div>
  )
}
