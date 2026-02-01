"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "StreamLite",
    description: "High-performance video streaming platform with adaptive bitrate and real-time analytics.",
    impact: "Reduced buffering by 60% and increased user engagement",
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL"],
    github: "#",
    live: "#",
    gradient: "from-[#8B7EC8]/20 to-[#4A6FA5]/10",
  },
  {
    title: "Avasyu CRM",
    description: "Enterprise customer relationship management system with AI-powered insights and automation.",
    impact: "Streamlined operations for 500+ enterprise clients",
    tech: ["Java", "Microservices", "React", "MongoDB", "Docker"],
    github: "#",
    live: "#",
    gradient: "from-[#4A6FA5]/20 to-[#C9A962]/10",
  },
  {
    title: "CharPay",
    description: "Secure payment gateway with multi-currency support and fraud detection.",
    impact: "Processing $2M+ transactions with 99.99% uptime",
    tech: ["Java", "Spring Security", "AWS", "MySQL", "RabbitMQ"],
    github: "#",
    live: "#",
    gradient: "from-[#C9A962]/20 to-[#8B7EC8]/10",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="inline-block text-sm text-[#C9A962] tracking-[0.2em] uppercase mb-4">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#E8E8E8]">
            Projects that define impact.
          </h2>
        </motion.div>

        <div className="space-y-8">
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
      <div className={`relative p-8 md:p-12 rounded-2xl bg-gradient-to-br ${project.gradient} border border-[#1A1A1A] hover:border-[#2A2A2A] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,126,200,0.1)]`}>
        {/* Background glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7EC8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 grid md:grid-cols-[1fr,auto] gap-8 items-start">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-2xl md:text-3xl font-medium text-[#E8E8E8] mb-4 group-hover:text-[#C9A962] transition-colors duration-300"
            >
              {project.title}
            </motion.h3>

            <p className="text-[#888888] text-lg leading-relaxed mb-4 max-w-2xl">
              {project.description}
            </p>

            <p className="text-[#8B7EC8] text-sm mb-6">
              {project.impact}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-[#888888] bg-[#1A1A1A] rounded-full border border-[#2A2A2A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              className="p-3 rounded-full border border-[#2A2A2A] text-[#888888] hover:text-[#E8E8E8] hover:border-[#888888] hover:bg-[#1A1A1A] transition-all duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.live}
              className="p-3 rounded-full border border-[#2A2A2A] text-[#888888] hover:text-[#E8E8E8] hover:border-[#888888] hover:bg-[#1A1A1A] transition-all duration-300"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
