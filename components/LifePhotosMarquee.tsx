import Marquee from "@/components/Marquee";

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
    <section className="py-12 bg-surface overflow-hidden">
      <div className="container-custom mb-8">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
          Life & Moments
        </span>
      </div>
      
      {/* First row - left direction */}
      <Marquee speed={50} direction="left" className="mb-6">
        <div className="flex items-center gap-4">
          {lifePhotos.slice(0, 5).map((photo, index) => (
            <div
              key={`row1-${index}`}
              className={`${photo.width} ${photo.height} rounded-xl overflow-hidden flex-shrink-0`}
            >
              <img
                src={photo.src}
                alt={`Life moment ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </Marquee>

      {/* Second row - right direction for visual interest */}
      <Marquee speed={45} direction="right">
        <div className="flex items-center gap-4">
          {lifePhotos.slice(5).map((photo, index) => (
            <div
              key={`row2-${index}`}
              className={`${photo.width} ${photo.height} rounded-xl overflow-hidden flex-shrink-0`}
            >
              <img
                src={photo.src}
                alt={`Life moment ${index + 6}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default LifePhotosMarquee;
