import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "home", id: "home" },
    { name: "about", id: "about" },
    { name: "projects", id: "projects" },
    { name: "skills", id: "skills" },
    { name: "experience", id: "experience" },
    { name: "contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-accent/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
          >
            <Terminal size={18} className="text-accent" />
            <span>&gt;_ portfolio</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs text-muted-foreground hover:text-accent transition-colors relative group"
              >
                <span className="group-hover:opacity-100 opacity-0 transition-opacity text-accent mr-1">$</span>
                {link.name}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 text-xs"
            >
              [resume]
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent/20 animate-terminal-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors text-left font-mono"
                >
                  $ {link.name}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 w-full text-xs mt-2"
              >
                [resume]
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
