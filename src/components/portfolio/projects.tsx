'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from '@/components/portfolio/section';
import { Link as LinkIcon, ExternalLink, Code, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const keyProjects = [
  {
    title: 'Real-Time IoT Data Platform',
    description: 'Built a .NET system with auto MQTT listener management, Cassandra storage, and fault-tolerant recovery for 24/7 IoT data processing.',
    tech: ['.NET', 'MQTT', 'Cassandra', 'Bg Services', 'Solr'],
    category: 'IoT & Real-time Systems',
    complexity: 'High',
  },
  {
    title: 'Custom IntelliSense Extension',
    description: 'Built a Visual Studio plugin to enhance IntelliSense with internal framework awareness, providing smart completions and navigation aids for proprietary codebases.',
    tech: ['Visual Studio Extensibility'],
    category: 'Developer Tools',
    complexity: 'High',
  },
  {
    title: 'Outlook Reminder Plugin',
    description: 'Developed a lightweight Outlook add-in to schedule contextual follow-ups directly from emails, improving task tracking.',
    tech: ['Office Add-in', 'JavaScript', 'HTML', 'Outlook API'],
    category: 'Productivity Tools',
    complexity: 'Medium',
  },
  {
    title: 'Modular Video Conferencing System',
    description: 'Engineered a plug-and-play video calling platform supporting multi-user sessions with live signaling and user-state awareness for enterprise systems.',
    tech: ['WebRTC', 'SignalR', 'Angular', 'Node.js', '.NET'],
    category: 'Communication Systems',
    complexity: 'High',
  },
  {
    title: 'FaceAuth with Liveness Detection',
    description: 'Implemented facial recognition using OpenCV with adjustable thresholding and added spoof-prevention via real-time liveness detection.',
    tech: ['OpenCV', '.NET', 'Angular'],
    category: 'AI & Security',
    complexity: 'High',
  },
  {
    title: 'Context-Aware Support Chatbot',
    description: 'Created an NLP-based chatbot to handle ticket creation via dynamic input collection, reducing support workload by automating API calls.',
    tech: ['Python', 'FastAPI', 'LangChain', 'LLM'],
    category: 'AI & Automation',
    complexity: 'High',
  },
  {
    title: 'Document RAG System',
    description: 'Designed a caching layer using action filters and in-memory persistence to accelerate dashboard data delivery, with configurable TTLs and tiered caching.',
    tech: ['.NET', 'Memory Cache', 'Filters', 'SQL Server'],
    category: 'Data Processing',
    complexity: 'Medium',
  },
  {
    title: 'PWBAssistant NuGet Package',
    description: 'Authored NuGet package (v0.3.0) for advanced, automated table scraping from web pages using Playwright automation.',
    tech: ['NuGet', 'Playwright', '.NET'],
    category: 'Open Source',
    complexity: 'Medium',
  },
];

const ecommerceProjects = [
  {
    id: 'jockey',
    title: 'JOCKEY (Ecommerce)',
    client: 'Jockey International Inc.',
    role: 'Software Development Team Lead',
    duration: 'Aug 2023 – Present',
    url: 'https://www.jockey.in/',
    description: 'Leading the development of Jockey\'s comprehensive e-commerce platform, focusing on performance optimization and feature enhancement.',
    responsibilities: [
      'Administrator Facing Application: Led development of critical modules including Order Management, User Management, and comprehensive Reporting systems.',
      'CRM Integration: Architected and implemented advanced User complaint management workflows for efficient issue resolution.',
      'Partner Ecosystem: Developed sophisticated Partner Order Management modules to streamline B2B operations.',
      'Client Collaboration: Actively gathered and analyzed client requirements, ensuring alignment with business objectives.',
      'DevOps & Deployment: Orchestrated UAT and Production deployments with comprehensive release documentation.',
    ],
    tech: ['Angular', 'Web API', 'Entity Framework', 'C#', 'ASP.Net Core', 'SQL Server', 'Solr', 'Redis', 'Azure'],
    achievements: ['40% improvement in order processing speed', '25% reduction in customer complaints', 'Zero-downtime deployments']
  },
  {
    id: 'speedo',
    title: 'Speedo (Ecommerce)',
    client: 'Speedo',
    role: 'Software Development Team Lead',
    duration: 'July 2021 – Jun 2023',
    url: 'https://www.speedo.in/',
    description: 'Led development efforts for the Speedo e-commerce platform, focusing on core administrative and customer-facing features.',
    responsibilities: [
      'Administrator Facing Application: Involved in developing major modules like Order Management and Reports.',
      'CRM: Developed the User complaint management system to raise, process, and close complaints.',
      'Partner Order Management: Developed a module to maintain the order process flow.',
      'Understood client requirements and provided production support.',
      'Coordinated with testing teams and prepared release notes for UAT and Production deployments.',
    ],
    tech: ['AngularJs', 'Web API', 'ADO.Net', 'C#', 'ASP.Net', 'SQL Server', 'Solr', 'WCF', 'Windows Services'],
    achievements: ['Successfully launched platform', 'Streamlined order management', 'Enhanced reporting capabilities']
  },
  {
    id: 'manyavar',
    title: 'Manyavar (Ecommerce)',
    client: 'Vedant Fashion Limited',
    role: 'Software Development Team Lead',
    duration: 'Jun 2021 – Jan 2022',
    url: 'https://www.manyavar.com/',
    description: 'Contributed to the development of the Manyavar e-commerce site, a major platform in the ethnic wear market.',
    responsibilities: [
      'Focused on backend development for the Administrator-facing CMS.',
      'Contributed to various modules to enhance the platform\'s functionality and performance.',
      'Worked within a team to deliver features for a high-traffic e-commerce website.',
    ],
    tech: ['AngularJs', 'Web API', 'ADO.Net', 'C#', 'ASP.Net', 'SQL Server', 'Solr', 'WCF', 'Windows Services'],
    achievements: ['High-traffic platform optimization', 'Enhanced CMS functionality', 'Team collaboration success']
  },
  {
    id: 'luxcozi',
    title: 'LuxCozi (Ecommerce)',
    client: 'LuxCozi',
    role: 'Software Development Team Lead',
    duration: 'Jun 2021 – Jan 2022',
    url: 'https://www.luxcozi.com/',
    description: 'Contributed to the development of the LuxCozi e-commerce site, a major platform in the ethnic wear market.',
    responsibilities: [
      'Focused on backend development for the Administrator-facing CMS.',
      'Contributed to various modules to enhance the platform\'s functionality and performance.',
      'Worked within a team to deliver features for a high-traffic e-commerce website.',
    ],
    tech: ['AngularJs', 'Web API', 'ADO.Net', 'C#', 'ASP.Net', 'SQL Server', 'Solr', 'WCF', 'Windows Services'],
    achievements: ['Platform modernization', 'Performance improvements', 'Feature enhancement delivery']
  },
];

const complexityColors = {
  High: 'from-red-500/20 to-orange-500/20 border-red-500/30',
  Medium: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30',
  Low: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
};

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-12">
        {/* Key Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Code className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary to-accent">
              Key Projects
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProjects.map((project, index) => (
              <Card 
                key={project.title}
                className={`group relative p-6 border-2 transition-all duration-300 hover-lift hover-glow bg-gradient-to-br ${complexityColors[project.complexity]} backdrop-blur-sm animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category badge */}
                <div className="absolute -top-3 left-6">
                  <Badge variant="outline" className="bg-background/90 text-accent border-accent/30 px-3 py-1">
                    {project.category}
                  </Badge>
                </div>
                
                {/* Complexity indicator */}
                <div className="absolute -top-3 right-6">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${complexityColors[project.complexity]}`}>
                    <Star className="h-3 w-3" />
                    {project.complexity}
                  </div>
                </div>
                
                <div className="mt-4 space-y-4">
                  <h4 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-background/60 hover:bg-accent/10 border border-border/30 hover:border-accent/30 transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
        </div>

        {/* E-commerce Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <LinkIcon className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary to-accent">
              E-commerce Experience
            </h3>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {ecommerceProjects.map((project, index) => (
              <AccordionItem 
                key={project.id} 
                value={project.id}
                className={`border-2 border-border hover:border-accent/30 rounded-lg px-6 py-2 transition-all duration-300 hover-glow bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="font-medium">{project.client}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {project.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-accent/10 rounded"
                      >
                        <ExternalLink className="h-4 w-4 text-accent" />
                      </a>
                    )}
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="pt-6 pb-4">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Role and achievements */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <div className="w-1 h-5 bg-gradient-to-b from-accent to-primary rounded-full" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {project.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <div className="w-1 h-5 bg-gradient-to-b from-accent to-primary rounded-full" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Star className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline"
                            className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}