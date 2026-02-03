"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { CAREER_TIMELINE } from "@/lib/content"
import { Briefcase, Calendar, Building2 } from "lucide-react"

export function CareerJourney() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Progress bar logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section id="journey" ref={containerRef} className="relative bg-background text-foreground py-20 md:py-40">

      {/* HEADER */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-6 border-b border-white/5 mb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-3xl md:text-5xl font-light tracking-tight"
           >
             <span className="text-muted-foreground">30 Years of </span>
             <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">Excellence</span>
           </motion.h2>
        </div>
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent origin-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* VERTICAL LINE */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

        <div className="space-y-24 md:space-y-40 pb-20">
          {CAREER_TIMELINE.map((job, index) => (
            <TimelineItem key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ job, index }: { job: any, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>

      {/* TIMELINE DOT (Desktop) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(214,158,46,0.5)] z-20 hidden md:block" />

      {/* CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2"
      >
        <div className="relative group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 shadow-lg shadow-black/20">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 text-accent mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono tracking-wider">{job.period}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
              {job.role}
            </h3>

            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-lg">{job.company}</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {job.description}
            </p>

            <ul className="space-y-2">
              {job.achievements.map((achievement: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* VISUAL / IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 aspect-video md:aspect-[4/3] relative rounded-2xl overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 mix-blend-overlay z-10" />
        <img
          src={`https://placehold.co/800x600/1a365d/eaeaea?text=${encodeURIComponent(job.company)}`}
          alt={job.company}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out filter grayscale hover:grayscale-0"
        />

        {/* Overlay Text/Number */}
        <div className="absolute bottom-4 right-4 z-20 text-9xl font-bold text-white/5 pointer-events-none select-none">
          0{index + 1}
        </div>
      </motion.div>

    </div>
  )
}
