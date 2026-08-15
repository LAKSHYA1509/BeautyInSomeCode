"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Role = {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  summary: string
  points: string[]
  tech: string[]
}

const roles: Role[] = [
  {
    company: "Abacus Desk",
    role: "Backend Engineer",
    period: "May 2026 — Present",
    location: "Full-time",
    current: true,
    summary:
      "Sole owner of a multi-tenant loyalty platform in production — one codebase serving several white-labelled clients across web admin and mobile.",
    points: [
      "Took over the platform end-to-end from the previous maintainer and now run production deploys myself.",
      "Found and closed a critical auth flaw where a hardcoded override auto-approved every user's KYC before a single document was submitted — the entire verification pipeline had been dead code in production.",
      "Fixed a wallet-balance leak where an unresolved session field let the ORM silently drop its WHERE clause and return another user's balance.",
      "Built digital KYC end-to-end: PAN with NSDL name and date-of-birth cross-check, DigiLocker eKYC, and UPI verification.",
      "Moved builds off local machines into GitHub Actions and a container registry — backend images now ship in under four minutes.",
      "Retired two abandoned subsystems: ~408k lines, 526 files and 55 tables removed. Server load average went from 10.27 to 0.19.",
    ],
    tech: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "React Native", "Docker", "GitHub Actions"],
  },
  {
    company: "Noble Kode",
    role: "Full Stack Intern",
    period: "Aug — Nov 2025",
    location: "On-site, Delhi",
    summary:
      "Shipped customer-facing commerce features onto live client storefronts.",
    points: [
      "Built a guest cart and OTP-based authentication flow, enabling guest-to-user conversion across live client stores.",
      "Designed a Cloudinary image conversion pipeline processing 2,000+ images, cutting media delivery latency by 45%.",
      "Added automated transactional email and responsive B2B lead-generation tools.",
      "Moved hardcoded credentials into environment variables and tightened secret handling.",
    ],
    tech: ["Node.js", "Cloudinary", "Nodemailer", "JavaScript"],
  },
  {
    company: "Cyberent Cube",
    role: "Java Full Stack Intern",
    period: "Mar — Jul 2024",
    location: "Remote",
    summary:
      "First real team environment — half engineering, half getting five other people unblocked.",
    points: [
      "Led a team of 6 interns across client website builds, running hands-on Git and GitHub training; project turnaround dropped 25%.",
      "Overhauled the backend of MetaDefender, an internal malicious-file detection tool, improving detection accuracy by 30% within the first quarter.",
    ],
    tech: ["Java", "Spring Boot", "Git"],
  },
]

export function WorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="work" className="relative py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <span className="inline-block text-xs sm:text-sm text-[#C9A962] tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#E8E8E8]">
            Where I&apos;ve shipped.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline spine — hidden on mobile where the rail would just eat width */}
          <div className="absolute left-0 top-2 bottom-2 hidden md:block w-px bg-gradient-to-b from-[#C9A962]/40 via-[#2A2A2A] to-transparent" />

          <div className="space-y-10 sm:space-y-14">
            {roles.map((role, index) => (
              <RoleCard key={role.company} role={role} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RoleCard({ role, index }: { role: Role; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative md:pl-10"
    >
      {/* Timeline node */}
      <span
        className={`absolute left-0 top-2 hidden md:block h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-colors duration-300 ${
          role.current
            ? "border-[#C9A962] bg-[#C9A962]"
            : "border-[#2A2A2A] bg-[#0D0D0D] group-hover:border-[#888888]"
        }`}
      />

      <div className="rounded-2xl border border-[#1A1A1A] bg-gradient-to-br from-[#8B7EC8]/[0.04] to-transparent p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-[#2A2A2A] hover:shadow-[0_0_60px_rgba(139,126,200,0.08)]">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#E8E8E8] transition-colors duration-300 group-hover:text-[#C9A962]">
            {role.company}
          </h3>
          {role.current && (
            <span className="rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-green-400">
              Current
            </span>
          )}
        </div>

        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs sm:text-sm text-[#888888]">
          <span className="text-[#8B7EC8]">{role.role}</span>
          <span className="text-[#2A2A2A]">/</span>
          <span>{role.period}</span>
          <span className="text-[#2A2A2A]">/</span>
          <span>{role.location}</span>
        </div>

        <p className="mb-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#A8A8A8]">
          {role.summary}
        </p>

        <ul className="mb-6 space-y-3">
          {role.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm sm:text-base leading-relaxed text-[#888888]">
              <span aria-hidden className="mt-2 h-px w-4 flex-shrink-0 bg-[#C9A962]/50" />
              <span className="max-w-3xl">{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {role.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#2A2A2A] bg-[#1A1A1A] px-2.5 py-1 text-[10px] font-medium text-[#888888] sm:px-3 sm:py-1.5 sm:text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
