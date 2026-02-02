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
  return (
    <section className="py-8 bg-background border-y border-border overflow-hidden">
      <Marquee speed={40} direction="left">
        <div className="flex items-center gap-12">
          {techStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 bg-surface-elevated rounded-full border border-border"
            >
              <tech.icon className="w-5 h-5 text-primary" />
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
