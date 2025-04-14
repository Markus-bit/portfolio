
import { Code } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
        { name: "C#", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
        { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        { name: "Kotlin", icon: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" },
        { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
        { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
        { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
        { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" },
        { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Playwright", icon: "https://ray.run/playwright-brand-assets/playwright-logo.svg" },
      ],
    },
  ];

  return (
    <div className="mt-16">
      <div className="flex items-center gap-4 mb-8">
        <Code className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-bold">Skills & Technologies</h3>
      </div>
      
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">{category.title}</h4>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow rounded-full px-4 py-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
