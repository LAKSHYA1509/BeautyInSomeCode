import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";

// Life photos with random sizes for organic feel
const lifePhotos = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    width: "w-48",
    height: "h-32"
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=400&fit=crop",
    width: "w-36",
    height: "h-48"
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop",
    width: "w-56",
    height: "h-36"
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=350&h=350&fit=crop",
    width: "w-40",
    height: "h-40"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    width: "w-44",
    height: "h-28"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=450&fit=crop",
    width: "w-32",
    height: "h-52"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=450&h=300&fit=crop",
    width: "w-52",
    height: "h-36"
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=280&h=380&fit=crop",
    width: "w-32",
    height: "h-44"
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=420&h=280&fit=crop",
    width: "w-48",
    height: "h-32"
  },
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=320&h-420&fit=crop",
    width: "w-36",
    height: "h-48"
  },
];

const LifePhotosMarquee = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-surface/50 overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Life & Moments
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text">
            Capturing Life's Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full" />
        </motion.div>
      </div>

      {/* First row - left direction */}
      <Marquee speed={50} direction="left" className="mb-8 relative z-10">
        <div className="flex items-center gap-6">
          {lifePhotos.slice(0, 5).map((photo, index) => {
            const borderColors = ['border-primary/50', 'border-blue-500/50', 'border-purple-500/50', 'border-emerald-500/50', 'border-orange-500/50'];
            const shadowColors = ['hover:shadow-primary/30', 'hover:shadow-blue-500/30', 'hover:shadow-purple-500/30', 'hover:shadow-emerald-500/30', 'hover:shadow-orange-500/30'];
            return (
              <div
                key={`row1-${index}`}
                className={`${photo.width} ${photo.height} rounded-2xl overflow-hidden flex-shrink-0 border-2 ${borderColors[index % borderColors.length]} shadow-xl ${shadowColors[index % shadowColors.length]} hover:shadow-2xl transition-all duration-500 hover:border-opacity-100 group`}
              >
                <img
                  src={photo.src}
                  alt={`Life moment ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </Marquee>

      {/* Second row - right direction for visual interest */}
      <Marquee speed={45} direction="right" className="relative z-10">
        <div className="flex items-center gap-6">
          {lifePhotos.slice(5).map((photo, index) => {
            const borderColors = ['border-pink-500/50', 'border-rose-500/50', 'border-cyan-500/50', 'border-indigo-500/50', 'border-primary/50'];
            const shadowColors = ['hover:shadow-pink-500/30', 'hover:shadow-rose-500/30', 'hover:shadow-cyan-500/30', 'hover:shadow-indigo-500/30', 'hover:shadow-primary/30'];
            return (
              <div
                key={`row2-${index}`}
                className={`${photo.width} ${photo.height} rounded-2xl overflow-hidden flex-shrink-0 border-2 ${borderColors[index % borderColors.length]} shadow-xl ${shadowColors[index % shadowColors.length]} hover:shadow-2xl transition-all duration-500 hover:border-opacity-100 group`}
              >
                <img
                  src={photo.src}
                  alt={`Life moment ${index + 6}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

export default LifePhotosMarquee;
