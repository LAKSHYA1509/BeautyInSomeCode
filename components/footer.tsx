"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-12 border-t border-[#1A1A1A]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[#888888] text-sm">
            <span>Professional Excellence by</span>
            <Link href="/" className="text-[#E8E8E8] hover:text-[#C9A962] transition-colors duration-300">
              Mohan Kumar Bhardwaj
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300"
            >
              Work
            </Link>
            <Link
              href="/blogs"
              className="text-sm text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-sm text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="text-sm text-[#555555]">
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
