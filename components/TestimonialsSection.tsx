"use client"

import { TESTIMONIALS } from "@/lib/content"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: typeof TESTIMONIALS[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);

    const listener = () => setIsDesktop(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80%", "center 50%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <motion.div
      ref={cardRef}
      style={isDesktop ? { opacity, y, scale } : {}}
      whileHover={isDesktop ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden group">

        {/* Quote icon */}
        <Quote className="w-12 h-12 text-accent/20 mb-6 group-hover:text-accent/40 transition-colors duration-300" />

        <blockquote className="relative z-10">
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8 italic">
            "{testimonial.quote}"
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20 text-accent font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <cite className="not-italic">
                <span className="block text-foreground font-semibold text-base mb-0.5">
                  {testimonial.name}
                </span>
                <span className="text-muted-foreground text-sm">
                  {testimonial.role}, <span className="text-accent/80">{testimonial.company}</span>
                </span>
              </cite>
            </div>
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-background py-24 relative">

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <span className="text-accent text-sm font-mono uppercase tracking-widest">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-light mt-4 text-foreground">
          What People <span className="text-accent font-semibold">Say</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard
            key={i}
            testimonial={t}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
