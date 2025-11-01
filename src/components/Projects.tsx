import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "F1-Simplified App",
      description: "An app that simplifies Formula 1 by showcasing drivers and race insights in an intuitive way.",
      tech: ["React Native", "Expo", "MongoDB", "FastAPI"],
      github: "https://github.com/VedantGupta-1405/F1_Simplified",
      demo: "https://project1-demo.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task tool with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind", "TypeScript"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with modern design and smooth animations.",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background border-t border-accent/10">
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
                ls projects/
              </h2>
            </div>
            <p className="text-muted-foreground font-mono text-sm pl-6">
              // Recent work and side projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col bg-card border-accent/20 hover:border-accent/50 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-lg font-mono text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-mono text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-2 py-1 bg-accent/10 text-accent border border-accent/20 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-muted-foreground/30 text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300 font-mono text-xs"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-3 h-3 mr-2" />
                      code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-transparent border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-mono text-xs"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
