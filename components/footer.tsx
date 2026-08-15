"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { PageViews } from "./page-views"
import { EMAIL } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Social Links Data
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/lakshyabhardwaj1509/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/LAKSHYA1509", icon: Github },
    { name: "Email", href: `mailto:${EMAIL}`, icon: Mail },
  ]

  // Navigation Links Data
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative w-full bg-[#0a0a0a] text-[#E8E8E8] overflow-hidden pt-20 pb-10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A962]/10 via-[#0a0a0a]/0 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Top Section: CTA & Big Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24 border-b border-[#222] pb-12">
          
          {/* Left: Call to Action */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.1] mb-6"
              >
                Have an idea? <br />
                <span className="text-[#888888]">Let's build it together.</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-lg border-b border-[#C9A962] pb-1 hover:text-[#C9A962] hover:border-transparent transition-all duration-300 group"
                >
                  Start a conversation
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right: Sitemap & Socials */}
          <div className="md:col-span-5 flex flex-col md:items-end justify-between gap-10">
            {/* Nav Links */}
            <nav className="flex flex-col md:items-end gap-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-xl font-light text-[#888888] hover:text-[#E8E8E8] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A962] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full border border-[#222] hover:bg-[#1A1A1A] hover:border-[#333] hover:text-[#C9A962] transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Branding & Copyright */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          
          {/* Massive Watermark Name */}
          <div className="relative overflow-hidden w-full md:w-auto">
            {/* Decorative watermark — was an <h1>, which gave the page a
                second top-level heading saying nothing but the first name. */}
            <motion.div
              aria-hidden
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[9rem] font-bold leading-[0.8] tracking-tighter text-[#161616] select-none"
            >
              LAKSHYA
            </motion.div>
          </div>

          {/* Copyright Information */}
          <div className="flex flex-col md:items-end gap-2 text-sm text-[#555] pb-2 md:pb-4">
            <p>&copy; {currentYear} Lakshya Bhardwaj.</p>
            <p>Built, broken, and fixed by hand.</p>
            <PageViews slug="footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}