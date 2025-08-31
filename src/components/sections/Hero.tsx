import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import profileImage from "@/assets/harsh-real-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                Hey, <br />
                I'm <span className="gradient-text">Harsh</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
                IoT & Data Engineering Enthusiast
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A technology enthusiast based in India, specializing in building 
                practical IoT solutions and scalable data pipelines.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToProjects}
                className="bg-tech-blue hover:bg-tech-blue/90 text-white px-8 py-3 glow-blue"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/harshu1910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tech-blue transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harsh7040/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tech-blue transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/_.whatifharsh_.19/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tech-green transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hvsharma81@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-tech-blue glow-blue">
                <img 
                  src={profileImage} 
                  alt="Harsh Sharma - IoT & Data Engineering Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-green rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-tech-purple rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;