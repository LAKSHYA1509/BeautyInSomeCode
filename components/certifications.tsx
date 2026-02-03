"use client"

import { CERTIFICATIONS } from "@/lib/content"
import { motion } from "framer-motion"
import { Award } from "lucide-react"

export function Certifications() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">
            Professional <span className="text-accent font-semibold">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Commitment to continuous learning and professional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl hover:border-accent/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <cert.icon className="w-24 h-24 text-accent rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  <cert.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">{cert.institution}</p>
                {cert.score && (
                  <span className="inline-block mt-2 px-2 py-1 rounded bg-secondary/20 text-secondary-foreground text-xs font-semibold">
                    Score: {cert.score}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
