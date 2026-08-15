"use client";

import abstractBg from "@/public/assets/abstract-bg.jpg";
import workspace from "@/public/assets/workspace.jpg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/**
 * These are working rules, not adjectives.
 *
 * The previous version listed four words — Independent, Systematic,
 * Multidisciplinary, Focused — which is the kind of thing every portfolio says
 * and nobody can disagree with. Each of these is something I actually do, and
 * each one is here because getting it wrong cost me something.
 */
const principles = [
  {
    title: "Back it up before you break it.",
    body: "Every deploy starts by copying whatever I'm about to overwrite, and saying so out loud before I touch anything. Thirty seconds of paranoia has rescued more evenings than any test suite I've written.",
  },
  {
    title: "Deleting is shipping.",
    body: "The largest thing I shipped this year was four hundred thousand lines going away — two dead subsystems, fifty-five unused tables. Server load fell from 10.27 to 0.19. Nothing I could have added would have done that.",
  },
  {
    title: "Evidence, then claim.",
    body: "\"It works\" is a claim. A command and its output is evidence. I've learned not to say the first without pasting the second, because the gap between them is where the embarrassing bugs live.",
  },
  {
    title: "Stop when you're unsure.",
    body: "When something that worked an hour ago is suddenly broken, two sentences and a pause beat twenty minutes of confident thrashing. Most bad outages I've watched were someone who didn't want to look slow.",
  },
];

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="philosophy"
      className="py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-surface/50 to-background relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[#8B7EC8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-[#C9A962]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <span className="text-[#C9A962] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
            How I work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#E8E8E8]">
            Four rules I actually follow.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr,1.15fr] lg:gap-16 items-start">
          {/* Imagery — local assets only. The old mosaic hotlinked a freepik
              stock illustration and a file literally named stock-vector-55536305. */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:sticky lg:top-24"
          >
            <div className="relative col-span-2 h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-[#1A1A1A] group">
              <Image
                src={workspace}
                alt="Where the work happens"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent" />
            </div>

            <div className="relative col-span-2 h-32 sm:h-40 rounded-2xl overflow-hidden border border-[#1A1A1A] group">
              <Image
                src={abstractBg}
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B7EC8]/20 to-transparent" />
            </div>
          </motion.div>

          {/* Principles */}
          <div className="space-y-8 sm:space-y-10">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
                className="group border-l border-[#1A1A1A] pl-6 transition-colors duration-500 hover:border-[#C9A962]/50"
              >
                <div className="mb-3 flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#C9A962]/60 tabular-nums">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#E8E8E8] transition-colors duration-300 group-hover:text-[#C9A962]">
                    {principle.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#888888]">
                  {principle.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
