import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 7000); // auto-redirect after 7 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-background via-background to-background/80 text-foreground relative overflow-hidden">
      {/* Confetti (🎉 emoji animation) */}
      <div className="absolute animate-float text-[120px] opacity-10 select-none top-[-20px] left-[10%]">
        🎉
      </div>
      <div className="absolute animate-float-delay text-[80px] opacity-10 select-none bottom-[10%] right-[10%]">
        ✨
      </div>

      {/* Main content */}
      <div className="z-10 max-w-xl text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight animate-fade-in">
          Thank You 🙌
        </h1>
        <p className="text-lg text-muted-foreground animate-fade-in delay-200">
          Your message was sent successfully. I’ll get back to you as soon as possible!
        </p>

        <p className="text-sm text-muted-foreground animate-fade-in delay-300">
          You’ll be redirected to the homepage shortly...
        </p>

        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-primary text-background rounded-xl font-semibold transition hover:bg-primary/90 animate-fade-in delay-500"
        >
          Go to Homepage Now
        </a>
      </div>

      {/* Floating M laptop logo or circle (optional) */}
      <div className="absolute bottom-[-40px] blur-2xl opacity-20 w-[300px] h-[300px] bg-primary rounded-full z-0 animate-pulse" />
    </div>
  );
}
