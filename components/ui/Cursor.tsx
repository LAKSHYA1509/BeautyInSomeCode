"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false)
  
  // 1. MOUSE PHYSICS
  // We use useMotionValue for performance (doesn't trigger React re-renders)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics makes it "lag" slightly behind the actual mouse
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      // Check if the target is clickable (link, button, or specific class)
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("cursor-magnet")
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)
    
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* THE CURSOR SHAPE */}
      <motion.div
        layout
        className="bg-white rounded-full"
        animate={{
          width: isHovered ? 80 : 20,    // Default 20px -> 80px on hover
          height: isHovered ? 80 : 20,
          opacity: isHovered ? 1 : 1,    // Always solid white (for blend mode)
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
      
      {/* OPTIONAL: Text inside cursor when hovering */}
      <motion.div 
         className="absolute inset-0 flex items-center justify-center text-black text-[10px] font-bold uppercase tracking-widest"
         animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
      >
        Open
      </motion.div>
    </motion.div>
  )
}