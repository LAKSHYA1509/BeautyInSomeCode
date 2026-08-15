import Marquee from "./Marquee";
import { 
  Database, 
  Server, 
  Code2, 
  Layers, 
  GitBranch, 
  Cloud, 
  Container,
  Cpu,
  Shield,
  Zap
} from "lucide-react";

// Ordered by what actually gets used, not by what looks impressive. The daily
// production stack leads; Java/Spring stay because they're real and still
// shipped, just no longer the headline. AWS was removed — the platform runs on
// a self-managed VPS, so claiming it would have been decoration.
const techStack = [
  { name: "NestJS", icon: Server },
  { name: "TypeScript", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "React Native", icon: Zap },
  { name: "React", icon: Zap },
  { name: "Redis", icon: Cpu },
  { name: "BullMQ", icon: Layers },
  { name: "Docker", icon: Container },
  { name: "GitHub Actions", icon: GitBranch },
  { name: "Nginx", icon: Cloud },
  { name: "Multi-tenant SaaS", icon: Layers },
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: Layers },
  { name: "Kafka", icon: Server },
  { name: "QDrant", icon: Database },
  { name: "Spring Security", icon: Shield },
];

const TechStackMarquee = () => {
  const getColorClass = (index: number) => {
    const colors = [
      'border-primary/30 bg-primary/5 text-primary',
      'border-blue-500/30 bg-blue-500/5 text-blue-400',
      'border-purple-500/30 bg-purple-500/5 text-purple-400',
      'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
      'border-orange-500/30 bg-orange-500/5 text-orange-400',
      'border-pink-500/30 bg-pink-500/5 text-pink-400',
    ];
    return colors[index % colors.length];
  };

  const getIconColor = (index: number) => {
    const colors = [
      'text-primary',
      'text-blue-400',
      'text-purple-400',
      'text-emerald-400',
      'text-orange-400',
      'text-pink-400',
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-12 sm:py-16 bg-background border-y border-border overflow-hidden">
      <Marquee speed={40} direction="left">
        <div className="flex items-center gap-12">
          {techStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all hover:scale-110 hover:shadow-lg ${getColorClass(index)}`}
            >
              <tech.icon className={`w-5 h-5 ${getIconColor(index)}`} />
              <span className="text-foreground font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default TechStackMarquee;
