import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern React dashboard with real-time analytics, inventory management, and user authentication. Built with TypeScript and integrated with REST APIs.",
      image: project1,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Shopping App",
      description: "Cross-platform mobile application with seamless user experience, payment integration, and real-time notifications using React Native.",
      image: project2,
      technologies: ["React Native", "Express", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Analytics Platform",
      description: "Full-stack data visualization platform with interactive charts, reporting tools, and automated insights generation for business intelligence.",
      image: project3,
      technologies: ["Next.js", "Python", "D3.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent projects demonstrating expertise in modern web technologies, 
            user experience design, and scalable architecture solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="card-hover bg-gradient-card border-border/50 backdrop-blur-sm overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs bg-secondary/60"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;