"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowDownRight } from "lucide-react"

const snapshots = [
  "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2000&auto=format&fit=crop",
]

interface HeroProps {
  onComplete?: () => void
}

export function Hero({ onComplete }: HeroProps) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"initial" | "split" | "expanded">("initial")

  // 1. MASTER TIMELINE (Runs once on mount)
  useEffect(() => {
    // Start Split
    const splitTimer = setTimeout(() => {
      setPhase("split")
    }, 500)

    // Start Expansion
    const expandTimer = setTimeout(() => {
      setPhase("expanded")
      // Notify parent that loading is done after the expansion animation (1.2s) finishes
      setTimeout(() => {
        onComplete?.()
      }, 1200)
    }, 3500)

    return () => {
      clearTimeout(splitTimer)
      clearTimeout(expandTimer)
    }
  }, [onComplete])

  // 2. IMAGE CYCLING LOGIC (Only runs when phase is 'split')
  useEffect(() => {
    if (phase !== "split") return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % snapshots.length)
    }, 200)

    return () => clearInterval(interval)
  }, [phase])

  return (
    <section className="relative h-screen w-full bg-[#0D0D0D] overflow-hidden text-[#Eaeaea] z-0">
      
      {/* --- LAYER 1: THE DYNAMIC IMAGE BOX --- */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          layout
          initial={{ width: 0, height: 0, borderRadius: "20px" }}
          animate={
            phase === "initial" ? { width: 0, height: 0 } :
            phase === "split" ? { width: "320px", height: "200px", borderRadius: "20px" } : 
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

      {/* --- LAYER 2: THE TEXT (LAKSHYA) --- */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div 
          layout
          className={`flex w-full h-full transition-all duration-1000 ${
            phase === "expanded" 
              ? "items-end justify-start p-10 md:p-14 pb-12" 
              : "items-center justify-center"          
          }`}
        >
          <motion.div layout className="flex items-center gap-0">
            <motion.h1 
              layout
              className={`font-bold leading-none tracking-tighter mix-blend-difference
                ${phase === "expanded" ? "text-[14vw]" : "text-8xl md:text-9xl"}
              `}
            >
              LAK
            </motion.h1>
            
            <motion.div 
              layout
              animate={{ width: phase === "split" ? 340 : 0 }}
              transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            />

            <motion.h1 
              layout
              className={`font-bold leading-none tracking-tighter mix-blend-difference
                ${phase === "expanded" ? "text-[14vw]" : "text-8xl md:text-9xl"}
              `}
            >
              SHYA
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>

      {/* --- LAYER 3: THE HERO DETAILS --- */}
      <AnimatePresence>
        {phase === "expanded" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none flex justify-between p-10 md:p-14"
          >
            <div className="ml-auto text-right text-xs md:text-sm font-mono uppercase tracking-widest text-white/80">
              <p>Java Developer</p>
              <p>Based in India</p>
              <p className="text-green-400 mt-2">● Available for work</p>
            </div>

            <div className="absolute bottom-14 right-14">
                <div className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-bounce">
                    <ArrowDownRight className="text-white w-6 h-6" />
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}