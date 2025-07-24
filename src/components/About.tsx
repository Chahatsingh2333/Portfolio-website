import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Next.js", "Express", "Tailwind CSS", "Docker", "AWS", "GraphQL"
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Building responsive, interactive web applications with modern frameworks and best practices."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Creating robust APIs and server-side solutions with scalable architecture and security."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Designing beautiful, user-centered interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and scalability across all platforms."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
            With expertise across the entire development stack, I bring ideas to life through clean code and beautiful design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies & Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;