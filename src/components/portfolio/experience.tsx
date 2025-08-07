import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Section } from '@/components/portfolio/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experienceData = {
  title: 'Software Architect',
  company: 'Revalsys Technologies',
  location: 'Hyderabad, India',
  duration: '2021-Present',
  type: 'Full-time',
  description: 'Leading .NET-based R&D projects and architecting scalable solutions for enterprise clients.',
  responsibilities: [
    'Led .NET-based R&D projects for rapid prototyping and system innovation.',
    'Assisted in migrating legacy systems to modern .NET hybrid architectures.',
    'Integrated AI/ML workflows to enhance automation and insights.',
    'Built PoCs for IoT, debugging tools, and context-aware assistants.',
    'Developed document processing solutions and handled integrations.',
    'Adopted high-performance architecture for existing projects.',
    'Built an internal Code reviewing tool to improve code quality.',
    'Created an RDLC Application for internal workflow processes, streamlining development from requirement to end-user.',
    'Worked on ONDC (Open Network for Digital Commerce) Integration.',
    'Ecommerce projects: Jockey, Speedo, Manyavar, and more.',  
    'RevalERP - An ERP system for managing business processes, including finance, HR, and supply chain.',
    'RevalHRM - A Human Resource Management System for managing employee data, payroll, and performance.',
    'RevalCRM - A Customer Relationship Management system for managing customer interactions and sales processes.',
    'RevalCMS - A Content Management System for managing website content and digital assets.',
    'RevalPOS - A Point of Sale system for managing retail transactions and inventory.',
    'RevalInventory - An Inventory Management system for tracking stock levels and orders.',
    'RevalProject - A Project Management system for planning, executing, and monitoring projects.',
    'RevalSales - A Sales Management system for managing sales processes and customer relationships.',
    'Reval Meet - A Video calling system for managing online meetings and conferences.',
  ],
};

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/80 via-accent/40 to-transparent" />
          
          <div className="relative animate-fade-in-up">
            {/* Timeline dot */}
            <div className="absolute left-8 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/20" />
            
            {/* Experience card */}
            <Card className="ml-20 p-8 border-2 border-border hover:border-accent/30 transition-all duration-300 hover-lift hover-glow bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-accent font-medium">
                    <Calendar className="h-4 w-4" />
                    <span>{experienceData.duration}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gradient bg-gradient-to-r from-primary to-accent">
                    {experienceData.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-lg text-muted-foreground">
                    <span className="font-semibold">{experienceData.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{experienceData.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mt-2">
                    {experienceData.description}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {experienceData.type}
                  </Badge>
                </div>
              </div>
              
              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                  Key Achievements & Responsibilities
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {experienceData.responsibilities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors duration-200 group"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary mt-2 group-hover:scale-125 transition-transform duration-200" />
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>4+ years of experience</span>
                  <span>20+ major projects delivered</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}