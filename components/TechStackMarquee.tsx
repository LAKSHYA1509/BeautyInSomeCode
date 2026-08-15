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

const techStack = [
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: Layers },
  { name: "React", icon: Zap },
  { name: "TypeScript", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Redis", icon: Cpu },
  { name: "Kafka", icon: Server },
  { name: "Docker", icon: Container },
  { name: "AWS", icon: Cloud },
  { name: "Git", icon: GitBranch },
  { name: "REST APIs", icon: Server },
  { name: "Microservices", icon: Layers },
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
