import Marquee from "@/components/Marquee";
import { motion } from "framer-motion";

// Life photos with random sizes for organic feel
const lifePhotos = [
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048466/IMG-20241019-WA0017_nq00gk.jpg",
    width: "w-48",
    height: "h-32"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048472/20250516_134302_bixayb.jpg",
    width: "w-36",
    height: "h-48"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048473/20250516_133214_vxiuen.jpg",
    width: "w-56",
    height: "h-66"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048471/_MG_6662_v1tbzf.jpg",
    width: "w-40",
    height: "h-40"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048470/IMG-20251015-WA0041_bzlbzs.jpg",
    width: "w-44",
    height: "h-28"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048470/IMG20250117144715_-_Copy_u49abp.jpg",
    width: "w-32",
    height: "h-52"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048466/_MG_8771_d837mo.jpg",
    width: "w-52",
    height: "h-36"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048466/IMG-20240823-WA0020_d70mxe.jpg",
    width: "w-32",
    height: "h-44"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048466/IMG-20240823-WA0043_yrbee8.jpg",
    width: "w-48",
    height: "h-32"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048465/IMG-20250508-WA0049_tg3l1i.jpg",
    width: "w-36",
    height: "h-48"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048465/IMG-20250805-WA0028_kojhll.jpg",
    width: "w-36",
    height: "h-48"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048464/IMG-20241019-WA0050_xbz1hp.jpg",
    width: "w-36",
    height: "h-48"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048465/IMG-20241019-WA0068_yqergr.jpg",
    width: "w-36",
    height: "h-48"
  },
  {
    src: "https://res.cloudinary.com/dgmrrew73/image/upload/v1770048464/IMG-20241116-WA0005_hiv0qx.jpg",
    width: "w-36",
    height: "h-48"
  }
];

const LifePhotosMarquee = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-surface/50 overflow-hidden relative">
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
            See My Life's Journey
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
