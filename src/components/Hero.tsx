import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Chahat Singh</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer crafting digital experiences with modern technologies.
            Passionate about creating beautiful, functional applications that make a difference.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary border-0 text-primary-foreground font-semibold px-8 py-3 glow-effect hover:animate-glow-pulse transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-bounce delay-1000"></div>
    </section>
  );
};

export default Hero;