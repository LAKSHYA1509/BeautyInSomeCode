"use client"

import { MOHAN_INFO } from "@/lib/content"
import { motion } from "framer-motion"
import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <h2 className="text-3xl font-light text-foreground mb-6">
              Mohan Kumar <span className="font-bold text-accent">Bhardwaj</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Transforming procurement operations through strategic leadership, cost optimization, and sustainable vendor partnerships.
            </p>
            <div className="flex gap-4">
              <a
                href={MOHAN_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${MOHAN_INFO.email}`}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${MOHAN_INFO.phone}`}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h3 className="text-foreground font-semibold mb-6">Expertise</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>Strategic Sourcing</li>
                <li>Vendor Development</li>
                <li>Cost Optimization</li>
                <li>Global Procurement</li>
                <li>SAP MM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#journey" className="hover:text-accent transition-colors">Journey</a></li>
                <li><a href="#projects" className="hover:text-accent transition-colors">Achievements</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/60 text-sm">
            © {currentYear} Mohan Kumar Bhardwaj. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
