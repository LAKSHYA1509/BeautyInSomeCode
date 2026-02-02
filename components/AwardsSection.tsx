import { motion, useInView, AnimatePresence } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const awards = [
  {
    year: "2024",
    title: "BITS Pilani 4 Day Hackathon",
    description:
      "First place in the BITS Pilani 4 Day Hackathon, building an application system for blood donation services that processed real-time data from 10,000+ concurrent connections.",
    icon: Trophy,
    certificateUrl:
      "https://res.cloudinary.com/dgmrrew73/image/upload/v1770050177/IMG-20240330-WA0006_lg0epx.jpg",
  },
  {
    year: "2024",
    title: "HackIndia State Level Hackathon",
    description:
      "Awarded for innovative problem identification and technical solution development inside the WEB3 category among 250+ participants across India. Got 2nd in Haryana",
    icon: Award,
    certificateUrl:
      "https://res.cloudinary.com/dgmrrew73/image/upload/v1770050175/Copy_of_IMG_20250310_192549_sxmu6a.jpg",
  },
  {
    year: "2024",
    title: "Youth Speaker Series",
    description:
      "Became one of the youngest speakers to speak at the Youth Speaker Series, sharing insights on environment and innovation. Came in top 8 in University level competition",
    icon: Star,
    certificateUrl:
      "https://res.cloudinary.com/dgmrrew73/image/upload/v1770050179/Screenshot_2025-03-19_193301_jttdmc.png",
  },
  {
    year: "2025",
    title: "Tech Spark Hackathon",
    description:
      "Awarded First in the 2 day hackathon for building a sustainable solution on blockchain payment that can be provided to charity.",
    icon: Star,
    certificateUrl:
      "https://res.cloudinary.com/dgmrrew73/image/upload/v1770050249/IMG-20241117-WA0010_gpjw3d.jpg",
  },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // ✅ Global mouse tracking (Lenis-safe)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-background to-surface/50 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl" />

      {/* Floating Certificate */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mouse.x + 30,
              y: mouse.y - 20,
            }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
          >
            <div className="w-96 h-64 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/30 backdrop-blur-xl bg-background/90">
              <img
                src={awards[hoveredIndex].certificateUrl}
                alt="Certificate Preview"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end justify-center pb-4">
                <span className="text-white font-semibold text-sm px-4 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full">
                  Certificate Preview
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Recognition
          </span>

          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text">
            Awards & Honors
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </motion.div>

        {/* Awards List */}
        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              <div className="py-10 px-8 border border-border/50 hover:border-primary/40 rounded-3xl transition-all duration-500 bg-background/50 backdrop-blur-sm hover:bg-surface/80 hover:shadow-2xl hover:shadow-primary/10">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-2">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-muted/50 to-muted/30 bg-clip-text text-transparent group-hover:from-primary/70 group-hover:to-purple-500/70 transition-all duration-500">
                      {award.year}
                    </span>
                  </div>

                  <div className="md:col-span-8">
                    <div className="flex items-start gap-5">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-surface-elevated to-surface group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <award.icon className="w-7 h-7 text-primary group-hover:text-purple-500 transition-colors duration-500" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {award.title}
                        </h3>

                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                          {award.description}
                        </p>

                        <p className="text-primary/60 text-sm mt-2 italic">
                          Hover to view certificate
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 text-right hidden md:block">
                    <span className="text-7xl font-bold text-muted/10 group-hover:text-muted/20 transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
