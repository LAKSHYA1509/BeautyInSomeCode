"use client"

import { AnimatePresence, easeOut, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [phase, setPhase] = useState(0) // 0: initial, 1: name reveal, 2: tagline

  const [mounted, setMounted] = useState(false)

  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    setMounted(true)
    setParticles([...Array(20)].map((_, i) => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      targetY: Math.random() * -500,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    })))

    // Phase transitions for dramatic effect
    const phaseTimers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
    ]

    return () => phaseTimers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const duration = 4000 // Total duration
    const interval = 30
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          // Reduced delay to match exit animation better
          setTimeout(onComplete, 850)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: easeOut,
      },
    }),
  }

  const name = "LAKSHYA"

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
          }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D0D0D] overflow-hidden"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-[#C9A962]/30"
                initial={{
                  x: p.x,
                  y: p.y,
                  opacity: 0
                }}
                animate={{
                  y: [null, p.targetY],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Gradient orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#8B7EC8]/10 blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#C9A962]/10 blur-[100px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-12"
          >
            {/* Name with letter-by-letter reveal */}
            <div className="flex overflow-hidden perspective-1000">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate={phase >= 1 ? "visible" : "hidden"}
                  className="text-6xl md:text-8xl font-extralight tracking-[0.3em] text-[#E8E8E8] inline-block"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-sm md:text-base text-[#888888] tracking-[0.4em] uppercase"
            >
              Creating Digital Excellence
            </motion.p>

            {/* Progress indicator */}
            <div className="w-64 md:w-80 flex flex-col items-center gap-6 mt-8">
              <div className="relative w-full h-[2px] bg-[#1A1A1A] overflow-hidden rounded-full">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#8B7EC8] via-[#4A6FA5] to-[#C9A962]"
                  style={{ width: `${progress}%` }}
                />
                {/* Glowing effect on progress edge */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#C9A962] blur-md"
                  style={{ left: `${Math.min(progress, 98)}%` }}
                />
              </div>

              <div className="flex items-center justify-between w-full text-[#888888]">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-xs tracking-[0.2em] uppercase"
                >
                  Loading Experience
                </motion.span>
                <motion.span
                  className="text-lg font-mono text-[#C9A962] tabular-nums"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
