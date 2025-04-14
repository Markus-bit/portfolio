
import { Code, GraduationCap, Laptop, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillsSection } from "./SkillsSection";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <Card className="animate-slide-in-up shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <User className="h-8 w-8 text-primary" />
              <CardTitle>Who I Am</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I'm a software engineer based in Oslo, passionate about building things that are both functional and 
                enjoyable to use — whether it's a mobile app, a web platform, or something in between. I enjoy working 
                with modern technologies like Jetpack Compose, React, and Firebase, and I'm always looking for ways to 
                create useful, beautiful, and user-friendly products.
              </p>
              <p className="text-muted-foreground mt-4">
                When I'm not coding, I'm probably brainstorming project ideas (often with a social or AI twist), 
                contributing to something creative, or enjoying the outdoors in Norway.
              </p>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-in-up animate-delay-100 shadow-lg hover:shadow-xl transition-shadow">
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
                  I'm currently pursuing a degree in Computer Science, with a focus on web technologies, 
                  mobile development, and distributed systems. My coursework has covered everything from algorithms and 
                  databases to software engineering and cloud architecture — and I love applying that knowledge in 
                  real-world projects.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-in-up animate-delay-200 shadow-lg hover:shadow-xl transition-shadow">
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
                  I've worked on a range of projects, from mobile apps built with Jetpack Compose to full-stack web apps using React, 
                  TypeScript, Node.js, and Firebase. I enjoy creating responsive, accessible, and modern applications that solve real problems — 
                  especially when there's a fun design or tech challenge involved.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <SkillsSection />
      </div>
    </section>
  );
}
