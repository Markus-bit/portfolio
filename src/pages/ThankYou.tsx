import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 7000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 bg-[#050a13] text-white overflow-hidden">

        <div className="absolute z-0 top-2/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl animate-spin-slow"></div>
        <div className="absolute z-0 bottom-2/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl animate-spin-slow"></div>

      <div className="relative z-10 w-full max-w-xl bg-[#101322]/80 backdrop-blur-md border border-white/10 rounded-2xl p-10 text-center shadow-xl animate-fade-in space-y-6">
        <div className="relative w-16 h-16 mx-auto mb-6">
            {/* Glowing background circle */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-ping-slow" />
            
            {/* Icon on top */}
            <img
                src="/favicon/favicon.svg"
                alt="Logo"
                className="relative z-10 w-16 h-16 rounded-full shadow-md"
            />
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Thank You
        </h1>
        <p className="text-lg text-gray-300">
          Your message has been sent. I’ll get back to you as soon as possible.
        </p>
        <p className="text-sm text-gray-500">
          Redirecting to the homepage shortly...
        </p>

        <a
          href="/"
          className="inline-block mt-4 px-5 py-3 bg-blue-600 text-white rounded-lg font-medium transition hover:bg-blue-700"
        >
          Go to Homepage Now
        </a>
      </div>
    </div>
  );
}
