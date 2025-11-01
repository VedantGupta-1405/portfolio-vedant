import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "email",
      value: "vedantgupta140405@gmail.com",
      href: "mailto:vedantgupta140405@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "linkedin",
      value: "/in/vedant-gupta",
      href: "www.linkedin.com/in/vedant-gupta140405"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "github",
      value: "/VedantGupta-1405",
      href: "https://github.com/VedantGupta-1405"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "resume",
      value: "resume.pdf",
      href: "/resume.pdf"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background border-t border-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-accent font-mono">$</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
                cat contact.txt
              </h2>
            </div>
            <p className="text-muted-foreground font-mono text-sm pl-6">
              // Get in touch
            </p>
          </div>

          <Card className="p-8 md:p-10 bg-card border-accent/20">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="block group"
                >
                  <div className="p-4 bg-background border border-accent/20 hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="text-accent group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-mono text-xs text-accent mb-1">
                          ./{link.label}
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground truncate group-hover:text-accent transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="text-center border-t border-accent/20 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-mono text-muted-foreground mb-4">
                <span className="text-accent">&gt;</span> Available for opportunities and collaborations
              </p>
              <Button
                size="lg"
                onClick={() => window.location.href = "mailto:your.email@example.com"}
                className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-mono"
              >
                [send_message]
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
