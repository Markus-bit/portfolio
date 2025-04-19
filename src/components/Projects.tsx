
import { ArrowUpRight, Github, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
};

export function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Sample data for fallback in case API fails or rate limits are hit
  const fallbackRepos: Repository[] = [
    {
      id: 1,
      name: "portfolio-website",
      description: "My personal portfolio website built with React and TypeScript",
      html_url: "https://github.com/Markus-bit/portfolio-website",
      homepage: "https://markus-johnsen.com",
      stargazers_count: 12,
      language: "TypeScript",
      topics: ["react", "typescript", "portfolio", "frontend"],
    },
    {
      id: 2,
      name: "task-management-app",
      description: "A full-stack task management application with authentication and real-time updates",
      html_url: "https://github.com/Markus-bit/task-management-app",
      homepage: "",
      stargazers_count: 8,
      language: "JavaScript",
      topics: ["react", "node", "express", "mongodb"],
    },
    {
      id: 3,
      name: "weather-dashboard",
      description: "A weather dashboard that fetches data from OpenWeatherMap API",
      html_url: "https://github.com/Markus-bit/weather-dashboard",
      homepage: "https://weather-dash.vercel.app",
      stargazers_count: 5,
      language: "JavaScript",
      topics: ["react", "api", "weather", "tailwindcss"],
    },
    {
      id: 4,
      name: "algorithm-visualizer",
      description: "Visualize various sorting and pathfinding algorithms",
      html_url: "https://github.com/Markus-bit/algorithm-visualizer",
      homepage: "",
      stargazers_count: 3,
      language: "TypeScript",
      topics: ["algorithms", "visualization", "education", "react"],
    },
    {
      id: 5,
      name: "e-commerce-platform",
      description: "An e-commerce platform with product listings, shopping cart, and checkout",
      html_url: "https://github.com/Markus-bit/e-commerce-platform",
      homepage: "",
      stargazers_count: 7,
      language: "JavaScript",
      topics: ["react", "redux", "ecommerce", "stripe"],
    },
    {
      id: 6,
      name: "chat-application",
      description: "Real-time chat application using Socket.IO and React",
      html_url: "https://github.com/Markus-bit/chat-application",
      homepage: "",
      stargazers_count: 6,
      language: "JavaScript",
      topics: ["react", "socket.io", "real-time", "chat"],
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.github.com/users/Markus-bit/repos?sort=updated&per_page=6');
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const data = await response.json();
        setRepos(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError("Failed to load repositories. Using sample data instead.");
        setRepos(fallbackRepos);
        setIsLoading(false);
      }
    };
    
    fetchRepos();
  }, []);

  const getRandomGradient = () => {
    const gradients = [
      "from-blue-500 to-purple-500",
      "from-green-500 to-teal-500",
      "from-orange-500 to-red-500",
      "from-pink-500 to-rose-500",
      "from-indigo-500 to-blue-500",
      "from-yellow-500 to-orange-500",
    ];
    
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Here are some of my recent projects. Check out my GitHub for more examples of my work.
        </p>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader className="h-40 bg-muted rounded-t-lg" />
                <CardContent className="space-y-2 py-4">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-5/6" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="h-8 bg-muted rounded w-20" />
                  <div className="h-8 bg-muted rounded w-20" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {error && <p className="text-sm text-muted-foreground mb-4">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo, index) => (
                <Card 
                  key={repo.id} 
                  className="group overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${getRandomGradient()}`} />
                  <CardHeader className="pt-6">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{repo.name}</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Star className="h-4 w-4 mr-1" />
                        <span className="text-sm">{repo.stargazers_count}</span>
                      </div>
                    </div>
                    <CardDescription className="line-clamp-2 h-10">
                      {repo.description || "No description provided"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {repo.language && (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {repo.language}
                        </Badge>
                      )}
                      {repo.topics?.slice(0, 3).map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={repo.homepage} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 group-hover:text-white transition-colors"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}
        
        <div className="flex justify-center mt-12">
          <Button asChild>
            <a 
              href="https://github.com/Markus-bit?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
