import { Code } from "lucide-react";

interface Skill {
  name: string;
  icon: string;
  link: string;
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
        { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", link: "https://www.programiz.com/c-programming" },
        { name: "C#", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
        { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", link: "https://dev.java/" },
        { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", link: "https://www.javascript.com/" },
        { name: "Kotlin", icon: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg", link: "https://kotlinlang.org/" },
        { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", link: "https://www.python.org/" },
        { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", link: "https://www.typescriptlang.org/" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", link: "https://reactjs.org/" },
        { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg", link: "https://tailwindcss.com/" },
        { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", link: "https://getbootstrap.com/" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", link: "https://firebase.google.com/" },
        { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", link: "https://nodejs.org/" },
        { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", link: "https://www.mysql.com/" },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", link: "https://figma.com" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", link: "https://www.postman.com" },
        { name: "Playwright", icon: "https://ray.run/playwright-brand-assets/playwright-logo.svg", link: "https://playwright.dev/" },
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
                <a
                  key={skill.name}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow rounded-full px-4 py-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  <span className="text-sm">{skill.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
