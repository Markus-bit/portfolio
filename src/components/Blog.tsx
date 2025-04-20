import { useEffect, useState } from "react";
import { fetchMediumPosts, MediumPost } from "@/lib/fetchMediumPosts";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Blog() {
  const [blogPosts, setBlogPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    fetchMediumPosts().then(posts => {
      setBlogPosts(posts);
    });
  }, []);
  

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
              key={index}
              className="overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => window.open(post.link, "_blank")}
              role="button"
              aria-label={`Read ${post.title}`}
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
                <p className="text-muted-foreground line-clamp-4">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://medium.com/@markussvorsk" target="_blank" rel="noopener noreferrer">
              View All Posts
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
