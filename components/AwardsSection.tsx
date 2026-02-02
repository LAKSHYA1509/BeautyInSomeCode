import { motion, useInView } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";
import { useRef, useState } from "react";

const awards = [
  {
    year: "2024",
    title: "Google APAC Hackathon Winner",
    description:
      "First place in the backend architecture challenge, building a distributed system that processed real-time data from 10,000+ concurrent connections.",
    icon: Trophy,
    certificateUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
  },
  {
    year: "2024",
    title: "MIT-IIT Kanpur Seed Grant",
    description:
      "Awarded for innovative problem identification and technical solution development among 250+ participants across India.",
    icon: Award,
    certificateUrl: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&h=400&fit=crop",
  },
  {
    year: "2023",
    title: "Best Technical Implementation",
    description:
      "Recognized for outstanding full-stack development work at Inter-IIT Tech Meet, creating a scalable platform serving 8,000+ users.",
    icon: Star,
    certificateUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop",
  },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-background to-surface/50 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl" />

      {/* Floating Certificate Preview */}
      {hoveredIndex !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y + 10,
          }}
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

      <div
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10"
        onMouseMove={handleMouseMove}
      >
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
                  {/* Year */}
                  <div className="md:col-span-2">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-muted/50 to-muted/30 bg-clip-text text-transparent group-hover:from-primary/70 group-hover:to-purple-500/70 transition-all duration-500">
                      {award.year}
                    </span>
                  </div>

                  {/* Content */}
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

                  {/* Index */}
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
