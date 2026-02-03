"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <nav className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium tracking-wide text-[#E8E8E8] hover:text-[#C9A962] transition-colors duration-300"
          >
            Mohan Kumar Bhardwaj
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-6 h-[1px] bg-[#E8E8E8]"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-[1px] bg-[#E8E8E8]"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-6 h-[1px] bg-[#E8E8E8]"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="flex flex-col gap-4 pt-8 pb-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  )
}
