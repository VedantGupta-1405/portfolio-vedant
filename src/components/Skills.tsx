import { motion } from "framer-motion";
import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      category: "frameworks",
      skills: ["React", "Node.js", "Express", "Next.js", "Tailwind", "Flask"]
    },
    {
      category: "tools",
      skills: ["Git", "GitHub", "Docker", "AWS", "Firebase", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background border-t border-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-accent font-mono">$</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
                ls skills/
              </h2>
            </div>
            <p className="text-muted-foreground font-mono text-sm pl-6">
              // Technologies and tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card border-accent/20 hover:border-accent/40 transition-all duration-300">
                  <h3 className="text-lg font-mono text-accent mb-4">
                    ./{category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors cursor-default flex items-center gap-2"
                      >
                        <span className="text-accent">•</span>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
