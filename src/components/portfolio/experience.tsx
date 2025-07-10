import { Briefcase } from 'lucide-react';
import { Section } from '@/components/portfolio/section';
import { Card } from '@/components/ui/card';

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
      <div className="relative mx-auto max-w-3xl pl-8">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
        <div className="relative">
          <div className="absolute -left-8 top-1 h-8 w-8 rounded-full bg-background border-2 border-accent flex items-center justify-center -translate-x-1/2">
            <Briefcase className="h-4 w-4 text-accent" />
          </div>
          <Card className="p-6" variant="glass">
            <p className="text-sm font-medium text-accent">{experienceData.duration}</p>
            <h3 className="mt-1 text-xl font-bold font-headline text-primary">
              {experienceData.title}
            </h3>
            <p className="text-md font-semibold text-muted-foreground">
              {experienceData.company}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {experienceData.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
