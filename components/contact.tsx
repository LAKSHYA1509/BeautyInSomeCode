"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { CodeIcon, ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import { useRef, useState } from "react"

const socialLinks = [
  { name: "Email", href: "mailto:lakshyabhardwaj200315@gmail.com", icon: Mail },
  { name: "GitHub", href: "https://github.com/LAKSHYA1509", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/lakshyabhardwaj1509/", icon: Linkedin },
  { name: "LeetCode", href: "https://leetcode.com/u/LakshyaBhardwaj1509/", icon: ExternalLink },
  { name: "Codolio", href: "https://codolio.com/profile/Lakshya1509", icon: CodeIcon }
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitting(false)
      setSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setIsSubmitting(false)
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
      setTimeout(() => setError(""), 5000)
    }
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs sm:text-sm text-[#C9A962] tracking-[0.2em] uppercase mb-3 sm:mb-4">
              Contact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#E8E8E8] mb-4 sm:mb-6">
              Let&apos;s build something meaningful.
            </h2>
            <p className="text-[#888888] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-md">
              Have an idea or project in mind? I&apos;d love to hear about it.
              Let&apos;s create something extraordinary together.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-[#1A1A1A] hover:border-[#2A2A2A] hover:bg-[#1A1A1A]/50 transition-all duration-300"
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#888888] group-hover:text-[#C9A962] transition-colors duration-300" />
                  <span className="text-xs sm:text-sm text-[#888888] group-hover:text-[#E8E8E8] transition-colors duration-300">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm text-[#888888] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#1A1A1A]/50 border border-[#1A1A1A] rounded-xl text-sm sm:text-base text-[#E8E8E8] placeholder-[#555555] focus:outline-none focus:border-[#8B7EC8]/50 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm text-[#888888] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#1A1A1A]/50 border border-[#1A1A1A] rounded-xl text-sm sm:text-base text-[#E8E8E8] placeholder-[#555555] focus:outline-none focus:border-[#8B7EC8]/50 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm text-[#888888] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-[#1A1A1A]/50 border border-[#1A1A1A] rounded-xl text-sm sm:text-base text-[#E8E8E8] placeholder-[#555555] focus:outline-none focus:border-[#8B7EC8]/50 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 sm:p-4 bg-red-900/20 border border-red-500/50 rounded-xl">
                  <p className="text-red-400 text-xs sm:text-sm">{error}</p>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-[#E8E8E8] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C9A962] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
