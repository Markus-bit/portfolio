
import { ArrowUp, Github, Heart, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Markus André Johnsen</h2>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Software Developer based in Oslo, Norway
            </p>
          </div>
          
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/Markus-bit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/markus-johnsen-256656235/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              onClick={scrollToContact} 
              role="button"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop}
            className="rounded-full"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="border-t border-border/50 mt-6 pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            <span>© {currentYear} Markus André Johnsen</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
