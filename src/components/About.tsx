
import { Code, GraduationCap, Laptop, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML", "CSS", 
    "Node.js", "Express", "Python", "Java", "Git",
    "SQL", "MongoDB", "REST APIs", "GraphQL", "Docker"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <Card className="animate-slide-in-up">
            <CardHeader className="flex flex-row items-center gap-4">
              <User className="h-8 w-8 text-primary" />
              <CardTitle>Who I Am</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm Markus André Johnsen, a software developer from Oslo, Norway. I'm passionate about building 
                clean, efficient, and user-friendly applications. My journey in technology started with a curiosity 
                about how websites work, and has evolved into a deep fascination with software development.
              </p>
              <p className="text-muted-foreground mt-4">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying outdoor activities in the beautiful Norwegian landscape.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-in-up animate-delay-100">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">University of Oslo</h3>
                  <p className="text-sm text-muted-foreground">Computer Science</p>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                </div>
                <p className="text-muted-foreground">
                  Currently pursuing my degree in Computer Science with a focus on web development and 
                  distributed systems. I've completed courses in algorithms, data structures, database systems, 
                  and software engineering.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-in-up animate-delay-200">
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
                  I've worked on a variety of projects, from frontend development using React and TypeScript 
                  to backend systems with Node.js and Express. I focus on creating responsive, accessible, and 
                  modern applications that solve real-world problems.
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
                key={skill}
                className={`bg-card border border-border rounded-full px-4 py-2 text-sm animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
