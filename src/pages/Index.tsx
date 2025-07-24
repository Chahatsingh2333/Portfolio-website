import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Chahat Singh. All rights reserved. Built with ❤️ using React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
