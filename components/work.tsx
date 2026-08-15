"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type System = { name: string; detail: string }

type Role = {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  summary: string
  points: string[]
  /** Only the current role carries these deeper blocks. */
  systems?: System[]
  learned?: string[]
  tech: string[]
}

const roles: Role[] = [
  {
    company: "Abacus",
    role: "Backend Engineer — Multi-tenant Loyalty SaaS",
    period: "May 2026 — Present",
    location: "Full-time",
    current: true,
    summary:
      "I run a multi-tenant loyalty platform in production — one codebase serving 12 white-labelled B2B clients across a NestJS backend, React admin, and React Native mobile app. Owner of the platform end-to-end: schema, business logic, CI/CD, production deploys, and on-call.",
    points: [
      "Ship features across backend, web, and mobile from a single codebase — with per-tenant customization baked in at build time (config-driven, not runtime-forked).",
      "Onboard new tenants zero-to-Play-Store end-to-end: database seeding, per-tenant branding, mobile CI, backend cutover, portal smoke tests. Encoded the whole process as an idempotent script plus acceptance suite so bug classes I hit once can't recur.",
      "Own production deploys — self-managed VPS, Docker Compose per stack, nginx edge routing, TLS, database migrations, incident response.",
      "Build security-critical flows end-to-end: authentication, KYC pipelines (manual review and digital verification against government APIs), payment payout integrations with HMAC-signed clients, async poll workers, and refund ledgers.",
      "Enforce tenancy invariants across the codebase: row-level org scoping, append-only money ledgers, and subdomain-scoped credential routing so tenants can't leak into each other's data.",
      "Manage a fleet of tenant release branches — cross-branch propagation, cherry-pick audits, staged rollouts, per-tenant APK builds.",
      "Automate the boring parts of my own job: acceptance test suites, CI/CD workflows, release scripts, over-the-air JS update delivery for post-launch fixes.",
    ],
    systems: [
      {
        name: "Multi-tenant NestJS backend",
        detail: "Pooled Postgres, row-level tenancy, BullMQ workers, Redis cache",
      },
      {
        name: "Tenant admin web console",
        detail: "Role-based access, tenant-isolated content",
      },
      {
        name: "React Native mobile app",
        detail: "Per-tenant branding, deep-linking, force-update gating, OTA JS updates",
      },
      {
        name: "Payment payout pipeline",
        detail: "Async retry, reconciliation, subdomain-scoped credentials",
      },
      {
        name: "Automated tenant onboarding",
        detail: "Idempotent orchestrator plus acceptance suite covering every recurring failure mode",
      },
      {
        name: "Cross-branch propagation audit",
        detail: "Signals which fixes have landed where across the 10+ branch fleet",
      },
      {
        name: "Self-hosted OTA delivery",
        detail: "Ships JS-only fixes fleet-wide in minutes, no APK rebuild cycle",
      },
    ],
    learned: [
      "Multi-tenant architecture in the real world: when to pool, when to isolate, and how to move between the two without a migration outage.",
      "Ownership discipline: writing durable runbooks and acceptance tests so knowledge outlives any single session or engineer.",
      "Production risk management: idempotency, rollback paths, blast-radius reasoning, atomic-transaction hygiene, and why “it compiled” is the beginning of testing rather than the end.",
      "Cross-stack debugging: the same root cause wears different masks on backend, web, and mobile — the fix belongs at the right layer, not the closest one.",
      "Solo-operator throughput: knowing when to automate, when to grind, and when the right move is to write the tool instead of doing the work.",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "BullMQ",
      "React",
      "React Native",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Multi-tenant SaaS",
      "CI/CD",
    ],
  },
  {
    company: "Noble Kode",
    role: "Full Stack Intern",
    period: "Aug — Nov 2025",
    location: "On-site, Delhi",
    summary: "Shipped customer-facing commerce features onto live client storefronts.",
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
    summary: "First real team environment — half engineering, half getting five other people unblocked.",
    points: [
      "Led a team of 6 interns across client website builds, running hands-on Git and GitHub training; project turnaround dropped 25%.",
      "Overhauled the backend of MetaDefender, an internal malicious-file detection tool, improving detection accuracy by 30% within the first quarter.",
    ],
    tech: ["Java", "Spring Boot", "Git"],
  },
]

function BlockHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#C9A962]/70 sm:text-xs">
      {children}
    </h4>
  )
}

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
          <span className="mb-3 inline-block text-xs uppercase tracking-[0.2em] text-[#C9A962] sm:mb-4 sm:text-sm">
            Experience
          </span>
          <h2 className="text-2xl font-light text-[#E8E8E8] sm:text-3xl md:text-4xl lg:text-5xl">
            Where I&apos;ve shipped.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-y-2 left-0 hidden w-px bg-gradient-to-b from-[#C9A962]/40 via-[#2A2A2A] to-transparent md:block" />

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
      <span
        className={`absolute left-0 top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-colors duration-300 md:block ${
          role.current
            ? "border-[#C9A962] bg-[#C9A962]"
            : "border-[#2A2A2A] bg-[#0D0D0D] group-hover:border-[#888888]"
        }`}
      />

      <div className="rounded-2xl border border-[#1A1A1A] bg-gradient-to-br from-[#8B7EC8]/[0.04] to-transparent p-6 transition-all duration-500 hover:border-[#2A2A2A] hover:shadow-[0_0_60px_rgba(139,126,200,0.08)] sm:p-8 md:p-10">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <h3 className="text-xl font-medium text-[#E8E8E8] transition-colors duration-300 group-hover:text-[#C9A962] sm:text-2xl md:text-3xl">
            {role.company}
          </h3>
          {role.current && (
            <span className="rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-green-400">
              Current
            </span>
          )}
        </div>

        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[#888888] sm:text-sm">
          <span className="text-[#8B7EC8]">{role.role}</span>
          <span className="text-[#2A2A2A]">/</span>
          <span>{role.period}</span>
          <span className="text-[#2A2A2A]">/</span>
          <span>{role.location}</span>
        </div>

        <p className="mb-8 max-w-3xl text-base leading-relaxed text-[#A8A8A8] sm:text-lg">
          {role.summary}
        </p>

        {role.systems ? <BlockHeading>What I do</BlockHeading> : null}
        <ul className="mb-8 space-y-3">
          {role.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#888888] sm:text-base">
              <span aria-hidden className="mt-2 h-px w-4 flex-shrink-0 bg-[#C9A962]/50" />
              <span className="max-w-3xl">{point}</span>
            </li>
          ))}
        </ul>

        {role.systems && (
          <div className="mb-8">
            <BlockHeading>Systems I own in production</BlockHeading>
            {/* Two columns on desktop so seven entries don't add a screen of scroll */}
            <ul className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
              {role.systems.map((system) => (
                <li key={system.name} className="border-l border-[#1A1A1A] pl-4">
                  <span className="block text-sm font-medium text-[#D8D8D8] sm:text-base">
                    {system.name}
                  </span>
                  <span className="block text-xs leading-relaxed text-[#777777] sm:text-sm">
                    {system.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {role.learned && (
          <div className="mb-8">
            <BlockHeading>What running this has taught me</BlockHeading>
            <ul className="space-y-3">
              {role.learned.map((lesson) => (
                <li
                  key={lesson}
                  className="flex gap-3 text-sm leading-relaxed text-[#888888] sm:text-base"
                >
                  <span aria-hidden className="mt-2 h-px w-4 flex-shrink-0 bg-[#8B7EC8]/50" />
                  <span className="max-w-3xl">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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
