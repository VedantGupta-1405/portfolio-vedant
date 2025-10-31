import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background border-t border-accent/10">
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
                cat about.md
              </h2>
            </div>
            <p className="text-muted-foreground font-mono text-sm pl-6">
              // Background and interests
            </p>
          </div>

          <Card className="p-8 md:p-10 bg-card border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="space-y-6 font-mono text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-accent">&gt;</span> Currently a 3rd-year Computer Science student at [Your University], 
                  passionate about full-stack development and artificial intelligence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-accent">&gt;</span> My journey started with curiosity about how websites work, 
                  evolving into building scalable applications that solve real-world problems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-accent">&gt;</span> Learning cloud technologies and modern frameworks. Hands-on with React, Node.js, and Python.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-accent">&gt;</span> When not coding: exploring new tech, participating in hackathons, and contributing to open-source.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="pt-6 border-t border-accent/20"
              >
                <Button
                  size="lg"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-mono"
                >
                  [download_resume.pdf]
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
