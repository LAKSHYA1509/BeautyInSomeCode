"use client"

import { AWARDS } from "@/lib/content"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

export function IndustryRecognition() {
  return (
    <section className="py-24 bg-muted/10 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-accent text-sm font-mono uppercase tracking-widest">Recognition</span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mt-2">
              Industry <span className="font-semibold">Awards</span>
            </h2>
          </div>
          <div className="h-px bg-border flex-1 ml-8 hidden md:block opacity-50" />
        </div>

        <div className="space-y-8">
          {AWARDS.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 group"
            >
              <div className="hidden md:flex flex-col items-center gap-2 min-w-[100px] text-right">
                <span className="text-3xl font-bold text-muted-foreground/30 group-hover:text-accent transition-colors">
                  {award.year}
                </span>
              </div>

              <div className="flex-1 bg-card border border-border p-6 rounded-lg hover:border-accent/40 transition-all flex items-center gap-4 relative overflow-hidden">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                 <div className="p-3 bg-accent/10 rounded-full text-accent">
                   <Trophy className="w-6 h-6" />
                 </div>

                 <div>
                   <span className="md:hidden text-xs text-accent font-mono mb-1 block">{award.year}</span>
                   <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                     {award.title}
                   </h3>
                   <p className="text-muted-foreground text-sm">{award.organization}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
