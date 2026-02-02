import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Lakshya's ability to architect scalable backend systems is exceptional. His Spring Boot implementations are clean, well-tested, and production-ready. He consistently delivered high-quality code that exceeded our expectations.",
    author: "Narendra Ghate",
    role: "Head of Engineering",
    company: "HDFC Bank",
  },
  {
    quote:
      "Working with Lakshya was a game-changer for our tech stack. He brought deep expertise in Java microservices and helped us redesign our entire API infrastructure. The result was a 60% improvement in system performance.",
    author: "Brahma Reddy",
    role: "CTO & Co-Founder",
    company: "Eazytones",
  },
  {
    quote:
      "Lakshya is a rare combination of technical excellence and clear communication. He took ownership of critical backend systems and mentored junior developers. His contributions were invaluable to our success.",
    author: "Rahul Shubham",
    role: "Senior Manager, UX",
    company: "HDFC Bank",
  },
];

const TestimonialCard = ({
  testimonial,
  index
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
      style={{
        opacity,
        y,
        scale,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="card-elevated p-10 md:p-12 relative overflow-hidden border border-primary/20 rounded-3xl hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-purple-500/10 via-primary/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />

        {/* Quote icon */}
        <Quote className="w-14 h-14 text-primary/40 mb-8 group-hover:text-primary/60 transition-colors duration-300" />

        <blockquote className="relative z-10">
          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 font-light">
            "{testimonial.quote}"
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold text-base">
                {testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <cite className="not-italic">
                <span className="block text-foreground font-semibold text-base mb-1">
                  {testimonial.author}
                </span>
                <span className="text-muted-foreground text-sm">
                  {testimonial.role} <span className="text-primary font-medium">@{testimonial.company}</span>
                </span>
              </cite>
            </div>
          </footer>
        </blockquote>

        {/* Index indicator */}
        <div className="absolute top-6 right-8 text-6xl font-bold text-muted/10 group-hover:text-muted/20 transition-colors duration-300">
          0{index + 1}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="bg-background relative py-24 md:py-32"
    >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-purple-500 to-primary"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text">
            What People Say
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </motion.div>
      </div>

      {/* Testimonial cards - space-like vertical scroll */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.author}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pt-20 pb-8"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
