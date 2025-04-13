
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Blog() {
  // Sample blog posts - in a real scenario, these would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      excerpt: "Learn how to set up a new project with React and TypeScript and understand the benefits of using TypeScript with React.",
      date: "April 5, 2023",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Discover how to create beautiful, responsive user interfaces quickly using Tailwind CSS utility classes.",
      date: "May 18, 2023",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "State Management in Modern React Applications",
      excerpt: "Explore different state management solutions for React applications, from Context API to Redux and Zustand.",
      date: "June 22, 2023",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2300&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Blog</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          I write about web development, programming tutorials, and technology trends.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto group" asChild>
                  <a href="#" className="flex items-center gap-1 text-sm font-medium group-hover:text-primary transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
