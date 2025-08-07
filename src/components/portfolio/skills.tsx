import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/portfolio/section';
import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  AreaChart,
  Router,
  Server,
  Smartphone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
};

const skillData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['C#', 'JavaScript/TypeScript', 'Python', 'C'],
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Frameworks',
    icon: Server,
    skills: ['.NET (Web Api, MVC, Hybrid)', 'Angular', 'Node.js'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Databases & ORMs',
    icon: Database,
    skills: ['SQL Server', 'ADO.NET', 'Dapper', 'EF Core'],
    color: 'from-purple-500/20 to-violet-500/20',
  },
  {
    title: 'AI/ML',
    icon: BrainCircuit,
    skills: ['RAG', 'NLP', 'OpenCV'],
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    title: 'IoT',
    icon: Router,
    skills: ['MQTT'],
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Developer Tools',
    icon: Cpu,
    skills: ['VS Code', 'Visual Studio', 'Rider', 'Postman/Insomnia', 'Playwright/Selenium'],
    color: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    title: 'Mobile App',
    icon: Smartphone,
    skills: ['React Native (Android & iOS)'],
    color: 'from-red-500/20 to-pink-500/20',
  },
  {
    title: 'Dashboards',
    icon: AreaChart,
    skills: ['Grafana'],
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    title: 'NoSQL & Caching',
    icon: AreaChart,
    skills: ['Solr','MongoDB', 'Redis', 'Memcached'],
    color: 'from-indigo-500/20 to-blue-500/20',
  },
];

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillData.map(({ title, icon: Icon, skills, color }, index) => (
          <Card 
            key={title} 
            className={`group relative p-6 border-2 border-transparent hover:border-accent/30 transition-all duration-300 hover-lift hover-glow bg-gradient-to-br ${color} backdrop-blur-sm animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
            variant="glass"
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
            
            <div className="relative z-10">
              {/* Header with icon and title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold font-headline text-primary group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
              </div>
              
              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-xs px-2 py-1 bg-background/60 hover:bg-accent/10 border border-border/30 hover:border-accent/30 transition-all duration-200 hover:scale-105"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Subtle bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        ))}
      </div>
    </Section>
  );
}
