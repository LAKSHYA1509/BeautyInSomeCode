"use client"
import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";

// Professional moments with varied sizes
const professionalPhotos = [
  {
    src: "https://placehold.co/400x300/1a365d/eaeaea?text=Site+Visit+1",
    width: "w-64",
    height: "h-48"
  },
  {
    src: "https://placehold.co/300x400/2c5282/eaeaea?text=Team+Meeting",
    width: "w-48",
    height: "h-64"
  },
  {
    src: "https://placehold.co/500x300/d69e2e/000000?text=Award+Ceremony",
    width: "w-80",
    height: "h-48"
  },
  {
    src: "https://placehold.co/400x400/4a5568/eaeaea?text=Conference",
    width: "w-64",
    height: "h-64"
  },
  {
    src: "https://placehold.co/300x300/1a365d/eaeaea?text=Vendor+Audit",
    width: "w-48",
    height: "h-48"
  },
  {
    src: "https://placehold.co/400x300/2c5282/eaeaea?text=Warehouse+Inspection",
    width: "w-64",
    height: "h-48"
  },
  {
    src: "https://placehold.co/300x400/d69e2e/000000?text=Leadership+Talk",
    width: "w-48",
    height: "h-64"
  },
  {
    src: "https://placehold.co/500x300/4a5568/eaeaea?text=Manufacturing+Plant",
    width: "w-80",
    height: "h-48"
  },
];

export function ProfessionalGallery() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden relative border-y border-white/5">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-mono uppercase tracking-widest mb-4 block">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Professional <span className="font-semibold text-accent">Journey</span>
          </h2>
        </motion.div>
      </div>

      {/* First row - left direction */}
      <Marquee speed={40} direction="left" className="mb-8 relative z-10">
        <div className="flex items-center gap-6 px-4">
          {professionalPhotos.map((photo, index) => {
            return (
              <div
                key={`row1-${index}`}
                className={`${photo.width} ${photo.height} rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg relative group`}
              >
                <img
                  src={photo.src}
                  alt={`Professional moment ${index + 1}`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </Marquee>

       {/* Second row - right direction (using same photos shuffled or repeated) */}
       <Marquee speed={35} direction="right" className="relative z-10">
        <div className="flex items-center gap-6 px-4">
          {[...professionalPhotos].reverse().map((photo, index) => {
            return (
              <div
                key={`row2-${index}`}
                className={`${photo.width} ${photo.height} rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg relative group`}
              >
                <img
                  src={photo.src}
                  alt={`Professional moment ${index + 1}`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                 <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};
