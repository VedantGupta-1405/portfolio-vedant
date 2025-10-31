import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} Your Name <span className="text-accent">|</span> Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
