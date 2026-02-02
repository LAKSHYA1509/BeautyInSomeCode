"use client"

import { motion } from "framer-motion"

export function GitHubStats() {
  // Replace [USERNAME] with your actual GitHub username
  const github3dUrl = "https://raw.githubusercontent.com/Lakshya1509/Lakshya1509/main/profile-3d-contrib/profile-night-view.svg"

  return (
    <section className="py-20 bg-black flex flex-col items-center">
      <motion.h3 
        initial={{ opacity: 0 }}    
        whileInView={{ opacity: 1 }}
        className="text-2xl font-mono text-white/50 mb-10 uppercase tracking-widest"
      >
        Contribution Matrix
      </motion.h3>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-4xl px-6"
      >
        {/* The 3D SVG Image */}
        <img 
          src={github3dUrl} 
          alt="GitHub 3D Contributions" 
          className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Subtle Glow Effect behind the graph */}
        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10" />
      </motion.div>
    </section>
  )
}