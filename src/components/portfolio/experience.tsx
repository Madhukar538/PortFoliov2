import { Briefcase } from 'lucide-react';
import { Section } from '@/components/portfolio/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experienceData = {
  title: 'Software Architect',
  company: 'Revalsys Technologies',
  duration: '2021-Present',
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
      <div className="relative mx-auto max-w-5xl pl-10 md:pl-12">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent/80 to-accent/20 rounded-full -translate-x-1/2 shadow-lg shadow-accent/10" />
        <div className="relative animate-fade-in-up">
          {/* Timeline icon */}
          <div className="absolute -left-10 md:-left-12 top-1 h-12 w-12 rounded-full bg-background border-2 border-accent flex items-center justify-center -translate-x-1/2 shadow-md shadow-accent/20 z-10">
            <Briefcase className="h-6 w-6 text-accent" />
          </div>
          <Card className="p-10 md:p-12 backdrop-blur-md border-2 border-accent/10 shadow-xl hover:shadow-2xl transition-shadow duration-300" variant="glass">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <div>
                <p className="text-sm font-medium text-accent tracking-wide">
                  {experienceData.duration}
                </p>
                <h3 className="mt-1 text-3xl font-extrabold font-headline text-primary drop-shadow-sm">
                  {experienceData.title}
                </h3>
                <p className="text-lg font-semibold text-muted-foreground mt-1">
                  {experienceData.company}
                </p>
              </div>
              <Badge className="mt-2 md:mt-0 self-start md:self-auto px-4 py-2 text-accent border border-accent rounded-full text-xs font-semibold bg-background/80 shadow-sm hover:scale-105 transition-transform duration-200">
                Full-time
              </Badge>
            </div>
            {/* Responsibilities grid */}
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 pl-5 text-base">
            >
              {experienceData.responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="relative pl-4 before:content-[''] before:absolute before:-left-3 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-gradient-to-tr before:from-accent before:to-primary/80 before:shadow before:shadow-accent/20"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
