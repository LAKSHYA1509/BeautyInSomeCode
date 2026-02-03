"use client"

import { COMPETENCIES } from "@/lib/content"
import Marquee from "./Marquee"

export function ProcurementCompetencies() {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden border-y border-white/5">
      <div className="mb-10 text-center">
        <p className="text-sm font-mono text-accent tracking-[0.2em] uppercase">Core Expertise</p>
      </div>

      <Marquee speed={40}>
        <div className="flex gap-8 px-4">
          {COMPETENCIES.map((skill, idx) => (
             <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-accent/30 transition-colors cursor-default whitespace-nowrap"
            >
              <skill.icon className="w-5 h-5 text-accent" />
              <span className="text-foreground/90 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  )
}
