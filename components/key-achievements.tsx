"use client"

import { KEY_ACHIEVEMENTS } from "@/lib/content"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function KeyAchievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-accent text-yellow-500 text-sm font-mono uppercase tracking-widest block mb-4">Impact & Results</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Key <span className="text-accent text-yellow-500 font-semibold">Achievements</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {KEY_ACHIEVEMENTS.map((item, index) => (
            <AchievementCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-1 rounded-2xl bg-gradient-to-br text-yellow-500 from-white/10 to-transparent hover:from-accent/20 hover:to-primary/20 transition-all duration-500"
    >
      <div className="relative h-full bg-card/90 backdrop-blur-xl text-yellow-500 p-8 rounded-xl border border-white/5 group-hover:border-accent/20 transition-all duration-500 overflow-hidden">

        {/* Large Icon Background */}
        <item.icon className="absolute -bottom-8 -right-8 w-40 h-40 text-blue-700 group-hover:text-yellow-500 transition-colors duration-500 transform rotate-12" />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <item.icon className="w-6 h-6 text-accent text-yellow-500" />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-3 text">{item.title}</h3>

          <div className="h-px w-12 bg-accent/50 mb-4 group-hover:w-full transition-all duration-500" />

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {item.description}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-sm text-yellow-500">
            {item.impact}
          </div>
        </div>
      </div>
    </motion.div>
  )
}