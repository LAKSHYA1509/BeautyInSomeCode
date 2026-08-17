"use client"

import quietHours from "@/public/projects/quiet-hours.jpg"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const URL = "https://synthwave.lakshyabhardwaj.com"

/**
 * The announcement for Quiet Hours.
 *
 * Deliberately not filed under Projects. The Projects section is a list of
 * things built to demonstrate capability; this is a place, and the only useful
 * thing this section can do is make someone want to open it. So the image gets
 * the space and the copy gets out of the way.
 */
export function QuietHoursSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="quiet-hours" className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-10 md:mb-14"
        >
          <span className="mb-3 inline-block text-xs uppercase tracking-[0.2em] text-[#C9A962] sm:mb-4 sm:text-sm">
            Something else I made
          </span>
          <h2 className="text-2xl font-light text-[#E8E8E8] sm:text-3xl md:text-4xl lg:text-5xl">
            A room you can sit in.
          </h2>
        </motion.div>

        <motion.a
          href={URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group block overflow-hidden rounded-2xl border border-[#1A1A1A] transition-all duration-500 hover:border-[#2A2A2A] hover:shadow-[0_0_80px_rgba(139,126,200,0.12)]"
        >
          <div className="relative aspect-[1200/630] w-full overflow-hidden">
            <Image
              src={quietHours}
              alt="Quiet Hours — a figure reading by a rain-streaked window above a neon city"
              fill
              placeholder="blur"
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
            />
            {/* Sinks the lower half so the copy stays legible over the lanterns. */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-light tracking-[0.14em] text-[#E8E8E8] sm:text-3xl md:text-4xl">
                    Quiet Hours
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[#ff8ac4] sm:text-xs">
                    it&apos;s been a long day
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#B8B8B8] sm:text-base">
                    Slowed synthwave, playing on a clock everyone shares — open it
                    and you join whatever is already playing, mid-song. No skip
                    button, on purpose.
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 border-b border-[#C9A962] pb-1 text-sm text-[#E8E8E8] transition-colors duration-300 group-hover:border-transparent group-hover:text-[#C9A962] sm:text-base">
                  synthwave.lakshyabhardwaj.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
