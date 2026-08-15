"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Entry = {
  institution: string
  qualification: string
  detail?: string
  period: string
  results: { label: string; value: string }[]
  current?: boolean
}

const education: Entry[] = [
  {
    institution: "J.C. Bose University of Science and Technology, YMCA",
    qualification: "Bachelor of Technology — Computer Science & Engineering",
    detail: "Artificial Intelligence & Machine Learning",
    period: "2022 — 2026",
    current: true,
    results: [{ label: "CGPA", value: "8.6" }],
  },
  {
    institution: "St. John's School",
    qualification: "Senior Secondary & Secondary",
    period: "2019 — 2021",
    results: [
      { label: "Class 12", value: "96%" },
      { label: "Class 10", value: "90%" },
    ],
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-14"
        >
          <span className="mb-3 inline-block text-xs uppercase tracking-[0.2em] text-[#C9A962] sm:mb-4 sm:text-sm">
            Education
          </span>
          <h2 className="text-2xl font-light text-[#E8E8E8] sm:text-3xl md:text-4xl lg:text-5xl">
            Still a student. Already on call.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((entry, index) => (
            <motion.div
              key={entry.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
              className="group rounded-2xl border border-[#1A1A1A] p-6 transition-all duration-500 hover:border-[#2A2A2A] hover:bg-[#1A1A1A]/30 sm:p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <span className="font-mono text-xs text-[#888888] sm:text-sm">{entry.period}</span>
                {entry.current && (
                  <span className="rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-green-400">
                    Final year
                  </span>
                )}
              </div>

              <h3 className="mb-2 text-lg font-medium leading-snug text-[#E8E8E8] transition-colors duration-300 group-hover:text-[#C9A962] sm:text-xl">
                {entry.institution}
              </h3>

              <p className="text-sm leading-relaxed text-[#888888] sm:text-base">
                {entry.qualification}
              </p>
              {entry.detail && (
                <p className="mt-1 font-mono text-xs text-[#8B7EC8] sm:text-sm">{entry.detail}</p>
              )}

              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#1A1A1A] pt-5">
                {entry.results.map((result) => (
                  <div key={result.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#666666] sm:text-xs">
                      {result.label}
                    </dt>
                    <dd className="mt-1 text-xl font-light text-[#E8E8E8] sm:text-2xl">
                      {result.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
