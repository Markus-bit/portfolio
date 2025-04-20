import { read } from "fs";

export type MediumPost = {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    imageUrl: string;
    link: string;
  };
  
  const CORS_PROXY = "https://api.allorigins.win/raw?url=";
  const MEDIUM_FEED = "https://medium.com/feed/@markussvorsk";
  
  export async function fetchMediumPosts(): Promise<MediumPost[]> {
    const rssResponse = await fetch(`${CORS_PROXY}${encodeURIComponent(MEDIUM_FEED)}`);
    const rssText = await rssResponse.text();
  
    const parser = new DOMParser();
    const xml = parser.parseFromString(rssText, "text/xml");
  
    const items = Array.from(xml.querySelectorAll("item"));
  
    const posts: MediumPost[] = items.slice(0, 6).map((item) => {
      const title = item.querySelector("title")?.textContent || "Untitled";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "#";
      const encodedContent = item.getElementsByTagName("content:encoded")[0]?.textContent || "";
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = encodedContent;
      
      // Try DOM parsing first
      let imageUrl = tempDiv.querySelector("img")?.getAttribute("src");

      // Fallback to regex if DOM fails
      if (!imageUrl) {
        const imgMatch = encodedContent.match(/<img[^>]+src="([^">]+)"/);
        imageUrl = imgMatch?.[1];
      }

    imageUrl = imageUrl || "https://source.unsplash.com/800x600/?coding,developer";

      
  
      // Get first paragraph as description
      const firstP = tempDiv.querySelector("p")?.textContent?.trim() || "";
  
      // Remove all HTML for read time estimation
      const plainText = tempDiv.textContent || "";
      const readTime = calculateReadTime(plainText);
  

  
      return {
        title,
        excerpt: firstP,
        date: formatDate(pubDate),
        readTime,
        imageUrl,
        link
      };
    });
  
    return posts;
  }
  
  function calculateReadTime(text: string): string {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${minutes} min read`;
  }
  
  function formatDate(pubDate: string): string {
    const date = new Date(pubDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  