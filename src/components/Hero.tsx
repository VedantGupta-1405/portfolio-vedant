import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Terminal prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-2 text-accent font-mono text-sm"
            >
              <Terminal size={16} />
              <span>~/portfolio</span>
              <span className="animate-blink">▋</span>
            </motion.div>

            {/* Name and title */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-baseline gap-2"
              >
                <span className="text-accent font-mono">$</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-mono">
                  cat intro.txt
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-2 pl-6 border-l-2 border-accent/30"
              >
                <p className="text-2xl md:text-3xl text-foreground font-mono">
                  &gt; Your Name
                </p>
                <p className="text-lg md:text-xl text-muted-foreground font-mono">
                  &gt; Computer Science Student
                </p>
                <p className="text-base text-muted-foreground font-mono leading-relaxed max-w-2xl">
                  &gt; Passionate developer building modern web applications<br />
                  &gt; and solving complex problems through elegant code.
                </p>
              </motion.div>
            </div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-mono"
              >
                [view_projects]
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="border-muted-foreground/30 text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300 font-mono"
              >
                [download_resume]
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-6 pt-4"
            >
              <span className="text-muted-foreground font-mono text-sm">connect --&gt;</span>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </motion.div>

            {/* Terminal status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-xs text-muted-foreground font-mono pt-8"
            >
              <span className="text-accent">●</span> online | ready to collaborate
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
