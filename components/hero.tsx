"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import { useEffect, useState } from "react"

const snapshots = [
  "/assets/Untitleddesign.gif",
  "/assets/Untitleddesign.gif",
  "/assets/Untitleddesign.gif",
  "/assets/Untitleddesign.gif",
]



interface HeroProps {
  onComplete?: () => void
}

export function Hero({ onComplete }: HeroProps) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"initial" | "split" | "expanded">("initial")

  // 1. MASTER TIMELINE
  useEffect(() => {
    // Start Split
    const splitTimer = setTimeout(() => {
      setPhase("split")
    }, 1200)

    // Start Expansion
    const expandTimer = setTimeout(() => {
      setPhase("expanded")
      // Notify parent that loading is done
      setTimeout(() => {
        onComplete?.()
      }, 1800)
    }, 4400)

    return () => {
      clearTimeout(splitTimer)
      clearTimeout(expandTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // ^^^ THE FIX IS HERE: We pass an empty array [] so it NEVER runs again, 
  // even if the parent component updates.

  // 2. IMAGE CYCLING LOGIC
  useEffect(() => {
    if (phase !== "split") return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % snapshots.length)
    }, 200)

    return () => clearInterval(interval)
  }, [phase])

  return (
    <section className="relative h-screen w-full bg-[#0D0D0D] overflow-hidden text-[#Eaeaea] z-0">

      {/* LAYER 1: THE DYNAMIC IMAGE BOX */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
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
            <motion.img
              key={phase === "expanded" ? "final" : index}
              src={snapshots[index]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: phase === "expanded" ? "brightness(0.5)" : "brightness(1)" }}
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LAYER 2: THE TEXT (LAKSHYA) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div
          layout
          className={`flex w-full h-full transition-all duration-1000 ${phase === "expanded"
            ? "items-end justify-start p-4 sm:p-8 md:p-12 lg:p-16 pb-6 sm:pb-8 md:pb-12"
            : "items-center justify-center px-4"
            }`}
        >
          <motion.div
            layout
            className="flex flex-row items-center gap-0"
          >
            <motion.h1
              layout
              className={`font-bold leading-none tracking-tighter mix-blend-difference
                ${phase === "expanded" ? "text-[18vw] sm:text-[16vw] md:text-[14vw]" : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"}
              `}
            >
              LAK
            </motion.h1>

            <motion.div
              layout
              animate={{
                width: phase === "split" ? 180 : 0,
              }}
              transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            />

            <motion.h1
              layout
              className={`font-bold leading-none tracking-tighter mix-blend-difference
                ${phase === "expanded" ? "text-[18vw] sm:text-[16vw] md:text-[14vw]" : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"}
              `}
            >
              SHYA
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>

      {/* LAYER 3: THE HERO DETAILS */}
      <AnimatePresence>
        {phase === "expanded" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none flex justify-between p-4 sm:p-6 md:p-10 lg:p-14"
          >
            <div className="ml-auto text-right text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-wider sm:tracking-widest text-white/80">
              <p className="hidden sm:block">Java Developer</p>
              <p className="hidden sm:block">Based in India</p>
              <p className="text-green-400 mt-1 sm:mt-2">● Available</p>
            </div>

            <div className="absolute bottom-6 sm:bottom-10 md:bottom-14 right-6 sm:right-10 md:right-14">
              <div className="p-2 sm:p-3 md:p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-bounce">
                <ArrowDownRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}