import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Code, Database } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (IoT)",
      institution: "APJ Abdul Kalam Technical University",
      period: "2022–2026",
      status: "Current"
    },
    {
      degree: "Class 12 (Higher Secondary)",
      institution: "Delhi Public School, Aligarh",
      period: "2021–2022",
      status: "Completed"
    },
    {
      degree: "Class 10 (Secondary Education)",
      institution: "Delhi Public School, Aligarh",
      period: "2019–2020",
      status: "Completed"
    }
  ];

  const skills = [
    { category: "IoT", items: ["Hardware Prototyping", "Sensor Integration", "Embedded Systems", "Real-time Monitoring"] },
    { category: "Data Engineering", items: ["Python", "SQL", "Apache Kafka", "Apache Spark", "Cloud Pipelines"] },
    { category: "Programming", items: ["Go", "Python", "JavaScript", "C++", "Machine Learning"] },
    { category: "Tools & Protocols", items: ["MQTT", "REST APIs", "Docker", "Git", "Cloud Services"] }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Harsh Sharma, a technology enthusiast with a strong interest in IoT and Data Engineering. 
            I enjoy building practical, real-world solutions—ranging from smart systems like air quality monitors 
            to scalable data pipelines. My passion lies in exploring how connected devices and modern data tools 
            like SQL, Python, Kafka, and Spark can create smarter, more sustainable solutions for everyday challenges. 
            I'm always eager to learn, experiment, and grow by turning ideas into impactful projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-tech-blue mr-4" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="tech-card p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-tech-blue">{edu.degree}</h4>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      edu.status === 'Current' ? 'bg-tech-green/20 text-tech-green' : 'bg-muted text-muted-foreground'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-foreground mb-1">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.period}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Work */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-tech-green mr-4" />
              <h3 className="text-2xl font-bold">Current Role</h3>
            </div>
            <Card className="tech-card p-6 mb-8">
              <h4 className="text-lg font-semibold text-tech-green mb-2">Mentor at IoT Club "iotuno"</h4>
              <p className="text-muted-foreground mb-4">
                Providing comprehensive training and guidance to 2nd and 3rd-year students in IoT technologies, 
                hardware prototyping, and project development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-tech-green/20 text-tech-green px-2 py-1 rounded">Training</span>
                <span className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded">Mentorship</span>
                <span className="text-xs bg-tech-purple/20 text-tech-purple px-2 py-1 rounded">IoT Projects</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center mb-8 justify-center">
            <Code className="h-8 w-8 text-tech-purple mr-4" />
            <h3 className="text-2xl font-bold">Skills & Expertise</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="tech-card p-6">
                <div className="flex items-center mb-4">
                  <Database className="h-6 w-6 text-tech-blue mr-2" />
                  <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                </div>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-muted-foreground">
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;