import { Mail, Phone, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Greeting */}
              <div className="animate-slide-down">
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4 animate-slide-up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                    BODA MADHUKAR
                  </span>
                  <br />
                  <span className="text-foreground">REDDY</span>
                </h1>
                
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-accent"></div>
                  <p className="text-xl md:text-2xl font-medium text-accent uppercase tracking-wide">
                    Software Architect
                  </p>
                  <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-accent"></div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in">
                A seasoned architect delivering scalable, API-driven platforms with expertise in 
                <span className="text-accent font-medium"> system modernization</span> and 
                <span className="text-accent font-medium"> AI-powered automation</span>.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <a
                  href="mailto:madhukarreddyboda538@gmail.com"
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 hover-lift"
                >
                  <Mail className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">madhukarreddyboda538@gmail.com</span>
                </a>
                
                <a
                  href="tel:+919573153479"
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 hover-lift"
                >
                  <Phone className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">+91 9573153479</span>
                </a>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-bounce-in">
                <Button size="lg" className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground">
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
                
                <Button variant="outline" size="lg" className="group border-accent/30 hover:border-accent hover:bg-accent/5">
                  <span className="flex items-center gap-2">
                    View Projects
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl" />
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-xl" />
                
                {/* Profile image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10" />
                  <Image
                    src="/placeholder.svg"
                    alt="Boda Madhukar Reddy"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium shadow-lg animate-bounce-in">
                  4+ Years
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg animate-bounce-in">
                  .NET Expert
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}