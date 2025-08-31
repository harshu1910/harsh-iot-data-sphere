import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Cloud, Cpu, BarChart, Zap, Music, Home } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cloud Logger",
      description: "Collects, stores, and visualizes real-time data from multiple sources on the cloud platform with advanced analytics.",
      icon: <Cloud className="h-8 w-8 text-tech-blue" />,
      technologies: ["Python", "Cloud APIs", "Data Visualization", "Real-time Processing"],
      category: "Data Engineering",
      color: "tech-blue"
    },
    {
      title: "Ultrasonic Distance Monitor",
      description: "Precision distance measurement system using ultrasonic sensors for automation and smart monitoring applications.",
      icon: <Cpu className="h-8 w-8 text-tech-green" />,
      technologies: ["IoT Sensors", "Arduino", "Real-time Monitoring", "Automation"],
      category: "IoT Solutions",
      color: "tech-green"
    },
    {
      title: "Air Quality Informer",
      description: "Advanced environmental monitoring system tracking PM2.5, CO₂, and other pollutants with real-time alerts.",
      icon: <BarChart className="h-8 w-8 text-tech-purple" />,
      technologies: ["Environmental Sensors", "Data Analytics", "Alert System", "Dashboard"],
      category: "IoT & Analytics",
      color: "tech-purple"
    },
    {
      title: "Go Lang Server",
      description: "High-performance web server built in Go for handling concurrent requests with optimized resource management.",
      icon: <Zap className="h-8 w-8 text-tech-blue" />,
      technologies: ["Go", "Concurrent Programming", "Web APIs", "Performance Optimization"],
      category: "Backend Development",
      color: "tech-blue"
    },
    {
      title: "Timed Lyrics",
      description: "Music synchronization application that displays lyrics in perfect sync with audio playback for karaoke and music apps.",
      icon: <Music className="h-8 w-8 text-tech-green" />,
      technologies: ["Audio Processing", "Synchronization", "UI/UX", "Media APIs"],
      category: "Application Development",
      color: "tech-green"
    },
    {
      title: "House Price Prediction Model",
      description: "Machine learning model that accurately predicts house prices based on location, size, amenities, and market trends.",
      icon: <Home className="h-8 w-8 text-tech-purple" />,
      technologies: ["Machine Learning", "Python", "Data Analysis", "Predictive Modeling"],
      category: "Machine Learning",
      color: "tech-purple"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative IoT solutions, data engineering projects, and smart systems I've developed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-4">
                <div className="animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {project.icon}
                </div>
                <div className="ml-4">
                  <span className={`text-xs bg-${project.color}/20 text-${project.color} px-2 py-1 rounded-full`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-background flex-1`}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className={`bg-${project.color} hover:bg-${project.color}/90 text-background flex-1`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="tech-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new IoT and data engineering projects. 
              Let's discuss how we can build something amazing together.
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-tech-blue hover:bg-tech-blue/90 text-white glow-blue"
            >
              Start a Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;