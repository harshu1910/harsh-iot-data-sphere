import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-border bg-dark-gray/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Harsh Sharma. Built with passion for IoT and Data Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
