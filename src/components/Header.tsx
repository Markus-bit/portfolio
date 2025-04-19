
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigateTo = (id: string, offset) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = offset || 0; // Default offset is 0 if not provided
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Navbar med bakgrunn uansett scroll */}
      <div className="bg-background/80 backdrop-blur-md shadow-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Markus A. Johnsen
                </a>
              </h1>
            </div>
  
            <div className="hidden md:block">
              <nav className="ml-10 flex items-center space-x-8">
                <a onClick={() => navigateTo("home", 20)} className="text-foreground hover:text-primary transition-colors cursor-pointer">Home</a>
                <a onClick={() => navigateTo("about", 20)} className="text-foreground hover:text-primary transition-colors cursor-pointer">About</a>
                <a onClick={() => navigateTo("projects",-30)} className="text-foreground hover:text-primary transition-colors cursor-pointer">Projects</a>
                <a onClick={() => navigateTo("blog", 20)} className="text-foreground hover:text-primary transition-colors cursor-pointer">Blog</a>
                <a onClick={() => navigateTo("contact", 20)} className="text-foreground hover:text-primary transition-colors cursor-pointer">Contact</a>
            
              </nav>
            </div>
  
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
  
      {/* Mobile Menu */}
      <div 
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out`}
      >
        {/* Wrapper som holder menyinnhold og sentreres */}
        <div className="flex flex-col items-center justify-center h-full relative">
          {/* Lukkeknapp – posisjonert øverst til høyre */}
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            className="absolute top-4 right-4"
          >
            <X className="h-6 w-6" />
          </Button>
  
          {/* Menyinnhold – nå sentrert nøyaktig midt på skjermen */}
          <nav className="flex flex-col items-center space-y-8 text-xl">
            <a onClick={() => navigateTo("home",20)} className="text-foreground hover:text-primary transition-colors cursor-pointer">Home</a>
            <a onClick={() => navigateTo("about",-40)} className="text-foreground hover:text-primary transition-colors cursor-pointer">About</a>
            <a onClick={() => navigateTo("projects",-20)} className="text-foreground hover:text-primary transition-colors cursor-pointer">Projects</a>
            <a onClick={() => navigateTo("blog",-20)} className="text-foreground hover:text-primary transition-colors cursor-pointer">Blog</a>
            <a onClick={() => navigateTo("contact",-20)} className="text-foreground hover:text-primary transition-colors cursor-pointer">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
  
}
