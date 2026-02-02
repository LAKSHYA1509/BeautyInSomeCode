import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Quote } from "lucide-react";

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
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.7, 1, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -5]);

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        opacity, 
        y, 
        scale,
        rotateX,
        transformPerspective: 1000,
      }}
      className="min-h-[60vh] flex items-center justify-center py-20"
    >
      <div className="card-elevated p-10 md:p-14 max-w-3xl mx-auto relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        {/* Quote icon */}
        <Quote className="w-12 h-12 text-primary/30 mb-6" />
        
        <blockquote className="relative z-10">
          <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 font-light">
            "{testimonial.quote}"
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">
                {testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <cite className="not-italic">
                <span className="block text-foreground font-semibold text-lg">
                  {testimonial.author}
                </span>
                <span className="text-muted-foreground">
                  {testimonial.role}
                </span>
                <span className="text-primary ml-2">
                  @{testimonial.company}
                </span>
              </cite>
            </div>
          </footer>
        </blockquote>

        {/* Index indicator */}
        <div className="absolute top-6 right-8 text-6xl font-bold text-muted/10">
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
      className="bg-background relative"
    >
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <motion.div 
          className="h-full bg-primary"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Section header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md py-8 border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What People Say
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <span className="text-muted-foreground text-sm">Scroll to explore</span>
              <motion.div 
                className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto mt-2 flex justify-center"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <motion.div 
                  className="w-1.5 h-3 bg-primary rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial cards - space-like vertical scroll */}
      <div className="container-custom">
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
        className="text-center pb-24"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
        >
          <Mail className="w-5 h-5" />
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
