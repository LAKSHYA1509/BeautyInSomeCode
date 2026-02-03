"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

const achievements = [
  { number: 500, suffix: "+", label: "Cr Portfolio", description: "Annual procurement managed" },
  { number: 30, suffix: "+", label: "Years Experience", description: "Industry leadership" },
  { number: 3, suffix: "", label: "Plants Managed", description: "Multi-location operations" },
  { number: 25, suffix: "%", label: "Cost Reduction", description: "Supplier rationalization" },
]

const milestones = [
  { title: "MBA – Operations Management", description: "Annamalai University (78%) – Strategic business acumen" },
  { title: "ISO Certified Internal Auditor", description: "ISO 9001, 14001, OHSAS 18001 – Quality excellence" },
  { title: "SAP MM & ERP Expert", description: "Advanced procurement systems and data analytics" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix
      }
    })
    return unsubscribe
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full bg-[#C9A962]/3 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-24 text-center"
        >
          <span className="inline-block text-xs sm:text-sm text-[#C9A962] tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Achievements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#E8E8E8]">
            Milestones that matter.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-[#1A1A1A]/50 border border-[#1A1A1A] hover:border-[#2A2A2A] backdrop-blur-sm transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A962]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#E8E8E8] mb-2">
                  <AnimatedCounter value={achievement.number} suffix={achievement.suffix} />
                </div>
                <div className="text-sm sm:text-base text-[#E8E8E8] font-medium mb-1">{achievement.label}</div>
                <div className="text-xs sm:text-sm text-[#888888]">{achievement.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestones */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#1A1A1A] hover:border-[#8B7EC8]/30 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7EC8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#8B7EC8]/20 to-[#4A6FA5]/20 flex items-center justify-center mb-4 sm:mb-6">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#C9A962]" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#E8E8E8] mb-2 group-hover:text-[#C9A962] transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
