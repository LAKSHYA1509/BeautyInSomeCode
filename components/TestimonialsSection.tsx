import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Mohan's strategic sourcing initiatives have been instrumental in our cost optimization journey. His ability to develop and manage vendor relationships while maintaining quality standards is exceptional. A true procurement leader.",
    author: "Rajesh Kumar",
    role: "Plant Head",
    company: "Dorset Industries",
  },
  {
    quote:
      "During his decade at Havells, Mohan consistently delivered on procurement targets while maintaining the highest quality standards. His expertise in inventory management significantly improved our working capital and cash flow.",
    author: "Priya Sharma",
    role: "CFO",
    company: "Havells India Limited",
  },
  {
    quote:
      "Working with Mohan during our procurement audit engagement, I was highly impressed by his data-driven approach and deep understanding of supply chain best practices. His clean sheet costing methodology is world-class.",
    author: "Amit Verma",
    role: "Sr. Manager, Supply Chain",
    company: "McKinsey & Company",
  },
];


// ---------- Testimonial Card ----------
const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
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

        <div className="absolute top-4 right-6 text-4xl opacity-10">
          0{index + 1}
        </div>
      </div>
    </motion.div>
  );
};


// ---------- Section ----------
const TestimonialsSection = () => {

  // GLOBAL PAGE SCROLL (not section!)
  const { scrollYProgress } = useScroll();

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section className="bg-background py-24">

      {/* Progress bar - desktop only */}
      <div className="hidden md:block fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-purple-500 to-primary"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <span className="text-primary uppercase text-sm">
          Testimonials
        </span>

        <h2 className="text-5xl font-bold mt-4">
          What People Say
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            testimonial={t}
            index={i}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pt-20">
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full"
        >
          <Mail className="w-5 h-5" />
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default TestimonialsSection;
