import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Database, Cloud, BarChart, Zap, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Cpu className="h-12 w-12 text-tech-blue" />,
      title: "IoT Solutions",
      description: "Smart systems, monitoring, and automation solutions using cutting-edge IoT technologies.",
      features: [
        "Real-time sensor monitoring",
        "Smart automation systems",
        "Environmental monitoring",
        "Device connectivity protocols"
      ],
      color: "tech-blue"
    },
    {
      icon: <Database className="h-12 w-12 text-tech-green" />,
      title: "Data Engineering",
      description: "Scalable data pipelines, analytics, and cloud-based data solutions for modern businesses.",
      features: [
        "Data pipeline development",
        "Real-time data processing",
        "Cloud data architecture",
        "Analytics & visualization"
      ],
      color: "tech-green"
    },
    {
      icon: <Cloud className="h-12 w-12 text-tech-purple" />,
      title: "Cloud Integration",
      description: "Cloud-native solutions that connect your IoT devices with powerful data processing capabilities.",
      features: [
        "Cloud data storage",
        "API development",
        "Microservices architecture",
        "Scalable infrastructure"
      ],
      color: "tech-purple"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-dark-gray/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions combining IoT innovation with modern data engineering practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="tech-card p-8 text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex justify-center mb-6 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <Zap className={`h-4 w-4 text-${service.color} mr-2 flex-shrink-0`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className={`border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-background w-full`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Services Info */}
        <div className="text-center">
          <Card className="tech-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Settings className="h-8 w-8 text-tech-blue mr-4" />
              <h3 className="text-2xl font-bold">Why Choose My Services?</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <BarChart className="h-8 w-8 text-tech-green mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Data-Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Solutions backed by robust data analysis and real-time insights
                </p>
              </div>
              
              <div>
                <Zap className="h-8 w-8 text-tech-blue mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Optimized systems for maximum efficiency and reliability
                </p>
              </div>
              
              <div>
                <Cloud className="h-8 w-8 text-tech-purple mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Scalable</h4>
                <p className="text-sm text-muted-foreground">
                  Future-proof architectures that grow with your needs
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;