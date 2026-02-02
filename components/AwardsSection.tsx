import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star } from "lucide-react";

const awards = [
  {
    year: "2024",
    title: "Google APAC Hackathon Winner",
    description:
      "First place in the backend architecture challenge, building a distributed system that processed real-time data from 10,000+ concurrent connections.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "MIT-IIT Kanpur Seed Grant",
    description:
      "Awarded for innovative problem identification and technical solution development among 250+ participants across India.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Best Technical Implementation",
    description:
      "Recognized for outstanding full-stack development work at Inter-IIT Tech Meet, creating a scalable platform serving 8,000+ users.",
    icon: Star,
  },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Recognition
          </span>
          <h2 className="section-heading text-foreground">
            Awards
          </h2>
        </motion.div>

        {/* Awards List */}
        <div className="space-y-0">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="py-8 border-b border-border hover:border-primary/30 transition-colors">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Year */}
                  <div className="md:col-span-2">
                    <span className="text-4xl font-bold text-muted/50 group-hover:text-primary/50 transition-colors">
                      {award.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-surface-elevated group-hover:bg-primary/10 transition-colors">
                        <award.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {award.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Index */}
                  <div className="md:col-span-2 text-right hidden md:block">
                    <span className="text-6xl font-bold text-muted/20">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -right-20 top-1/3 text-[20rem] font-bold text-foreground pointer-events-none select-none"
      >
        03
      </motion.div>
    </section>
  );
};

export default AwardsSection;
