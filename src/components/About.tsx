
import { Code, GraduationCap, Laptop, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  const skills = [
    { name: "C", icon: "c" },
    { name: "C#", icon: "csharp" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Kotlin", icon: "kotlin" },
    { name: "Python", icon: "python" },
    { name: "TypeScript", icon: "typescript" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Firebase", icon: "firebase" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MySQL", icon: "mysql" },
    { name: "Figma", icon: "figma" },
    { name: "Photoshop", icon: "photoshop" },
    { name: "Adobe XD", icon: "xd" },
    { name: "Selenium", icon: "selenium" },
    { name: "Jest", icon: "jest" },
    { name: "Unity", icon: "unity" },
    { name: "Unreal Engine", icon: "unreal" },
    { name: "Arduino", icon: "arduino" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "IFTTT", icon: "ifttt" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <Card className="animate-slide-in-up shadow-lg hover:shadow-xl transition-shadow bg-card/95">
            <CardHeader className="flex flex-row items-center gap-4">
              <User className="h-8 w-8 text-primary" />
              <CardTitle>Who I Am</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm a software engineer based in Oslo, passionate about building things that are both functional and enjoyable to use — whether it's a mobile app, a web platform, or something in between. I enjoy working with modern technologies like Jetpack Compose, React, and Firebase, and I'm always looking for ways to create useful, beautiful, and user-friendly products.
              </p>
              <p className="text-muted-foreground mt-4">
                When I'm not coding, I'm probably brainstorming project ideas (often with a social or AI twist), contributing to something creative, or enjoying the outdoors in Norway.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-in-up animate-delay-100 shadow-lg hover:shadow-xl transition-shadow bg-card/95">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">University of Oslo</h3>
                  <p className="text-sm text-muted-foreground">Computer Science</p>
                  <p className="text-sm text-muted-foreground">2023 - Present</p>
                </div>
                <p className="text-muted-foreground">
                  I'm currently pursuing a degree in Computer Science, with a focus on web technologies, mobile development, and distributed systems. My coursework has covered everything from algorithms and databases to software engineering and cloud architecture — and I love applying that knowledge in real-world projects.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-in-up animate-delay-200 shadow-lg hover:shadow-xl transition-shadow bg-card/95">
            <CardHeader className="flex flex-row items-center gap-4">
              <Laptop className="h-8 w-8 text-primary" />
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Various Projects</h3>
                  <p className="text-sm text-muted-foreground">Freelance & Personal</p>
                </div>
                <p className="text-muted-foreground">
                  I've worked on a range of projects, from mobile apps built with Jetpack Compose to full-stack web apps using React, TypeScript, Node.js, and Firebase. I enjoy creating responsive, accessible, and modern applications that solve real problems — especially when there's a fun design or tech challenge involved.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-6">
            <Code className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Skills & Technologies</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-card/95 border border-border rounded-full px-4 py-2 text-sm animate-fade-in shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Add relevant icon if needed */}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
