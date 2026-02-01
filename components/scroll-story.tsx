"use client"

import { motion } from "framer-motion"

export function ScrollStory() {
  return (
    <section className="bg-[#0B0B0F] text-white">

      {/* Scene 1 */}
      <div className="h-[120vh] flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="text-[12vw] font-light tracking-tight text-center"
        >
          नमस्कार,
          <br />
          मैं लक्ष्य
        </motion.h1>
      </div>

      {/* Scene 2 */}
      <div className="h-[120vh] flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center text-3xl md:text-5xl text-[#6E6E73] leading-tight"
        >
          I build systems that scale,
          <br />
          and ideas that last.
        </motion.p>
      </div>

      {/* Scene 3 */}
      <div className="h-[120vh] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl font-light mb-6">
            Engineering.
          </h2>
          <h2 className="text-6xl md:text-8xl font-light text-[#C9A962]">
            Creativity.
          </h2>
        </motion.div>
      </div>

    </section>
  )
}
