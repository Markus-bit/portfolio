import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const dailyLimit = 2;
  const storageCountKey = "contactSubmitCount";
  const storageDateKey = "contactSubmitDate";

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const storedDate = localStorage.getItem(storageDateKey);
    const storedCount = Number(localStorage.getItem(storageCountKey) || "0");

    if (storedDate !== today) {
      localStorage.setItem(storageDateKey, today);
      localStorage.setItem(storageCountKey, "0");
      setSubmitCount(0);
      return;
    }

    setSubmitCount(Number.isFinite(storedCount) ? storedCount : 0);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (hasSubmitted || submitCount >= dailyLimit) {
      event.preventDefault();
      return;
    }

    const nextCount = submitCount + 1;
    localStorage.setItem(storageCountKey, String(nextCount));
    setSubmitCount(nextCount);
    setHasSubmitted(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <form
                  action="https://formsubmit.co/markussvorsk@gmail.com"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Optional FormSubmit settings */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://www.markusjohnsen.no/thank-you" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={hasSubmitted || submitCount >= dailyLimit}
                  >
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      <span>
                        {submitCount >= dailyLimit
                          ? "Rate limit reached"
                          : hasSubmitted
                            ? "Sending..."
                            : "Send Message"}
                      </span>
                    </div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="h-full border border-border/50">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Get in Touch</span>
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    Whether you have a question, project idea, or just want to say hello,
                    I'd love to hear from you. I'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <h2 className="text-sm text-muted-foreground">
                        markussvorsk@gmail.com
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <a
                        href="https://github.com/Markus-bit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/Markus-bit
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/markus-johnsen-256656235/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
