
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const headerOffset = -30;
      const elementPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const projectsSection = document.getElementById("contact");
    if (projectsSection) {
      const headerOffset = 20;
      const elementPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-spin-slow"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 text-sm border border-primary/30 rounded-full bg-primary/10 animate-fade-in">
              <span>Software Developer based in Oslo</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-100">
              Hey, I'm <span className="text-primary">Markus André Johnsen</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in animate-delay-200">
              A passionate software developer and computer science student at the University of Oslo, building modern web applications and exploring new technologies.
            </p>
            
            <div className="flex gap-4 animate-fade-in animate-delay-300">


              <Button onClick={scrollToProjects} className="z-0 group">
                View my work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              
              <Button variant="outline" asChild>
                <a 
                href="https://github.com/Markus-bit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="z-0"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>


            </div>
            
            <div className="flex items-center gap-4 pt-4 animate-fade-in animate-delay-400">
              <a 
                href="https://github.com/Markus-bit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/markus-johnsen-256656235/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                onClick={scrollToContact}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-300 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform rotate-6 blur-xl opacity-30"></div>
            <div className="relative bg-card border border-border p-1 rounded-lg shadow-xl">
              <div className="bg-card p-6 rounded-lg">
                <div className="flex mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex text-sm font-mono">
                    <span className="text-primary mr-2">const</span>
                    <span className="text-foreground mr-2">developer</span>
                    <span className="text-primary mr-2">=</span>
                    <span className="text-foreground">{`{`}</span>
                  </div>
                  <div className="flex text-sm font-mono pl-6">
                    <span className="text-foreground mr-2">name:</span>
                    <span className="text-accent">'Markus André Johnsen'</span>
                    <span className="text-foreground">,</span>
                  </div>
                  <div className="flex text-sm font-mono pl-6">
                    <span className="text-foreground mr-2">location:</span>
                    <span className="text-accent">'Oslo, Norway'</span>
                    <span className="text-foreground">,</span>
                  </div>
                  <div className="flex text-sm font-mono pl-6">
                    <span className="text-foreground mr-2">skills:</span>
                    <span className="text-foreground">[</span>
                    <span className="text-accent">'React'</span>
                    <span className="text-foreground">,</span>
                    <span className="text-accent">'TypeScript'</span>
                    <span className="text-foreground">,</span>
                    <span className="text-accent">'...'</span>
                    <span className="text-foreground">]</span>
                    <span className="text-foreground">,</span>
                  </div>
                  <div className="flex text-sm font-mono pl-6">
                    <span className="text-foreground mr-2">education:</span>
                    <span className="text-accent">'University of Oslo'</span>
                  </div>
                  <div className="flex text-sm font-mono">
                    <span className="text-foreground">{`}`}</span>
                    <span className="text-primary ml-2">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
