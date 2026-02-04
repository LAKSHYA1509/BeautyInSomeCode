"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import { useEffect, useState } from "react"

const snapshots = [
  "https://res.cloudinary.com/dgmrrew73/video/upload/v1770221532/202602042113_wd9l4q.mp4",
  "https://res.cloudinary.com/dgmrrew73/video/upload/v1770221532/202602042113_wd9l4q.mp4",
  "https://res.cloudinary.com/dgmrrew73/video/upload/v1770221532/202602042113_wd9l4q.mp4",
  "https://res.cloudinary.com/dgmrrew73/video/upload/v1770221532/202602042113_wd9l4q.mp4",
]

const words = ["DEV", "WRITER", "READER", "ARCHITECT", "LAKSHYA"]

interface HeroProps {
  onComplete?: () => void
}

export function Hero({ onComplete }: HeroProps) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"initial" | "split" | "expanded">("initial")

  // ✅ WORD CYCLING STATE
  const [wordIndex, setWordIndex] = useState(0)

  // 1️⃣ MASTER TIMELINE
  useEffect(() => {
    const splitTimer = setTimeout(() => setPhase("split"), 1200)

    const expandTimer = setTimeout(() => {
      setPhase("expanded")
      setTimeout(() => onComplete?.(), 1800)
    }, 4400)

    return () => {
      clearTimeout(splitTimer)
      clearTimeout(expandTimer)
    }
  }, [])

  // 2️⃣ IMAGE CYCLING
  useEffect(() => {
    if (phase !== "split") return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % snapshots.length)
    }, 200)

    return () => clearInterval(interval)
  }, [phase])

  // 3️⃣ WORD CYCLING (ONLY AFTER EXPANDED)
  useEffect(() => {
    if (phase !== "expanded") return

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [phase])

  return (
    <section className="relative h-screen w-full bg-[#0D0D0D] overflow-hidden text-[#Eaeaea]">

      {/* LAYER 1: IMAGE BOX */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          layout
          initial={{ width: 0, height: 0, borderRadius: "20px" }}
          animate={
            phase === "initial" ? { width: 0, height: 0 } :
            phase === "split" ? { width: "200px", height: "120px", borderRadius: "12px", x: -30 } :
            { width: "100%", height: "100%", borderRadius: "0px" }
          }
          transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          className="relative overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            <motion.video
              key={phase === "expanded" ? "final" : index}
              src={snapshots[index]}
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: phase === "expanded" ? "brightness(0.5)" : "brightness(1)" }}
/>

          </AnimatePresence>
        </motion.div>
      </div>

      {/* LAYER 2: TEXT */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div
          layout
          className={`flex w-full h-full transition-all duration-1000 ${
            phase === "expanded"
              ? "items-end justify-start p-6 md:p-12"
              : "items-center justify-center"
          }`}
        >
          <motion.div layout className="flex items-center">

            {phase === "expanded" ? (
              // ✅ CYCLING WORDS
              <AnimatePresence mode="wait">
                <motion.h1
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  className="font-bold leading-none tracking-tighter mix-blend-difference text-[18vw] sm:text-[16vw] md:text-[14vw]"
                >
                  {words[wordIndex]}
                </motion.h1>
              </AnimatePresence>
            ) : (
              // ✅ ORIGINAL SPLIT NAME
              <>
                <motion.h1
                  layout
                  className="font-bold mix-blend-difference text-6xl md:text-8xl"
                >
                  LAK
                </motion.h1>

                <motion.div
                  layout
                  animate={{ width: phase === "split" ? 180 : 0 }}
                  transition={{ duration: 1 }}
                />

                <motion.h1
                  layout
                  className="font-bold mix-blend-difference text-6xl md:text-8xl"
                >
                  SHYA
                </motion.h1>
              </>
            )}

          </motion.div>
        </motion.div>
      </div>

      {/* LAYER 3: DETAILS */}
      <AnimatePresence>
        {phase === "expanded" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0 z-30 pointer-events-none flex justify-between p-6 md:p-12"
          >
            <div className="ml-auto text-right text-xs font-mono uppercase text-white/80">
              <p>Java Developer</p>
              <p>Based in India</p>
              <p className="text-green-400 mt-2">● Available</p>
            </div>

            <div className="absolute bottom-10 right-10">
              <div className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-bounce">
                <ArrowDownRight className="text-white w-5 h-5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
