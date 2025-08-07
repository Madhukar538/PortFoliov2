import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/portfolio/section';
import { Award, Target, TrendingUp, Users } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    label: '4+ Years',
    description: 'Experience in .NET Architecture',
  },
  {
    icon: Target,
    label: '20+ Projects',
    description: 'Successfully Delivered',
  },
  {
    icon: TrendingUp,
    label: 'AI/ML Expert',
    description: 'RAG & LangChain Implementation',
  },
  {
    icon: Users,
    label: 'Team Leader',
    description: 'Leading Development Teams',
  },
];

export function Summary() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Main description */}
        <Card className="border-2 border-border hover:border-accent/30 transition-all duration-300 hover-glow bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md" variant="glass">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-4xl mx-auto">
                Seasoned Software Architect with <span className="text-accent font-semibold">4+ years of experience</span> in .NET-based system architecture, delivering scalable, API-driven platforms across domains. Proven expertise in building hybrid IoT and web solutions, modernizing legacy stacks, and integrating AI workflows using <span className="text-accent font-semibold">Lang Chain, RAG, and Transformer models</span> for intelligent automation and retrieval.
              </p>
              
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
              
              <p className="text-muted-foreground text-base max-w-3xl mx-auto">
                Passionate about leveraging cutting-edge technologies to solve complex business challenges and drive digital transformation initiatives across enterprise environments.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.label}
              className={`group text-center p-6 border-2 border-transparent hover:border-accent/30 transition-all duration-300 hover-lift hover-glow bg-gradient-to-br from-accent/5 to-primary/5 backdrop-blur-sm animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <highlight.icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <div>
                  <div className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {highlight.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.description}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
