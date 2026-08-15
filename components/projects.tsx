"use client"

import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useRef } from "react"

const projects = [
  {
    title: "StreamLite",
    description:
      "Research-backed hybrid Live + VOD streaming backend built to hold up under high-concurrency workloads on deliberately resource-constrained infrastructure.",
    impact: "Event-driven architecture separating control and data planes for fault isolation",
    tech: ["Spring Boot", "Kafka", "Redis", "FFmpeg", "Spring Security"],
    github: "https://github.com/LAKSHYA1509/StreamLite",
    live: "",
    gradient: "from-[#8B7EC8]/20 to-[#4A6FA5]/10",
  },
  {
    title: "Aries",
    description:
      "gRPC-based distributed rate limiter delivered as a service, implementing the standard algorithm family behind one interface.",
    impact: "Rate-limiting as infrastructure rather than per-service boilerplate",
    tech: ["Java", "gRPC", "Distributed Systems"],
    github: "https://github.com/LAKSHYA1509/Aries",
    live: "",
    gradient: "from-[#4A6FA5]/20 to-[#C9A962]/10",
  },
  {
    title: "Doclite",
    description:
      "CLI tool that generates ready-made documentation scaffolding across five-plus project styles, so a new repo starts documented instead of promising to be.",
    impact: "Turns the doc-writing step from a chore into a flag",
    tech: ["Node.js", "JavaScript", "CLI"],
    github: "https://github.com/LAKSHYA1509/Doclite",
    live: "",
    gradient: "from-[#C9A962]/20 to-[#8B7EC8]/10",
  },
  {
    title: "Avasyu",
    description:
      "Cloud-based CRM with contact management and email integration, secured with OAuth via Spring Security.",
    impact: "End-to-end CRM built solo, from schema to auth to UI",
    tech: ["Spring Boot", "Thymeleaf", "PostgreSQL", "Spring Security"],
    github: "https://github.com/LAKSHYA1509/Avasyu",
    live: "",
    gradient: "from-[#8B7EC8]/20 to-[#C9A962]/10",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <span className="inline-block text-xs sm:text-sm text-[#C9A962] tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#E8E8E8]">
            Projects that define impact.
          </h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`relative p-6 sm:p-8 md:p-12 rounded-2xl bg-gradient-to-br ${project.gradient} border border-[#1A1A1A] hover:border-[#2A2A2A] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,126,200,0.1)]`}>
        {/* Background glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7EC8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-start">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-[#E8E8E8] mb-3 sm:mb-4 group-hover:text-[#C9A962] transition-colors duration-300"
            >
              {project.title}
            </motion.h3>

            <p className="text-[#888888] text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 max-w-2xl">
              {project.description}
            </p>

            <p className="text-[#8B7EC8] text-xs sm:text-sm mb-4 sm:mb-6">
              {project.impact}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-[#888888] bg-[#1A1A1A] rounded-full border border-[#2A2A2A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Only render a button when there is somewhere for it to go —
              these used to be hardcoded "#" links that did nothing. */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-[#2A2A2A] text-[#888888] hover:text-[#E8E8E8] hover:border-[#888888] hover:bg-[#1A1A1A] transition-all duration-300"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-[#2A2A2A] text-[#888888] hover:text-[#E8E8E8] hover:border-[#888888] hover:bg-[#1A1A1A] transition-all duration-300"
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
