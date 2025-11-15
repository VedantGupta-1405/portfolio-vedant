import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Briefcase, Award, Code, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <Users className="w-4 h-4" />,
      title: "Tech Club Design Head",
      organization: "Rise Club",
      period: "2024 - Present",
      description: "Organized workshops and competitions. Grew membership by almost twice."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background border-t border-accent/10">
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
                cat experience.log
              </h2>
            </div>
            <p className="text-muted-foreground font-mono text-sm pl-6">
              // Work history and achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 border border-accent/20 text-accent group-hover:border-accent/40 transition-colors">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base font-mono text-foreground group-hover:text-accent transition-colors">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-xs font-mono mt-1">
                          <span className="text-accent">{exp.organization}</span>
                          {" | "}
                          <span className="text-muted-foreground">{exp.period}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-mono text-muted-foreground">
                      <span className="text-accent">&gt;</span> {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
