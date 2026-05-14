import { useEffect, useState } from "react";

const roles = [
  "Senior Full-Stack Software Developer",
  "Laravel & Angular Specialist",
  "AWS & Azure Cloud Architect",
  "RxJS & Reactive UI Expert",
];

export default function Hero({
  name,
  title,
  summary,
}: {
  name: string;
  title: string;
  summary: string;
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="py-section-sm md:py-hero bg-[#0a1530] relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute top-8 left-8 opacity-30 animate-slide-in-right"
        aria-hidden="true"
      >
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="#ff64c8"
            style={{ filter: "drop-shadow(0px 2px 3px rgba(255,100,200,0.3))" }}
          />
        </svg>
      </div>
      <div
        className="absolute top-12 right-16 opacity-20 animate-slide-in-left animate-delay-300"
        aria-hidden="true"
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="#dd5b00"
            style={{ filter: "drop-shadow(0px 2px 3px rgba(221,91,0,0.2))" }}
          />
        </svg>
      </div>

      {/* Sticky-note decorative dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute top-1/4 left-[15%] w-3 h-3" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#ff64c8" /></svg>
        <svg className="absolute top-[60%] left-[10%] w-2 h-2" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#f5d75e" /></svg>
        <svg className="absolute top-[20%] right-[20%] w-2.5 h-2.5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#1aae39" /></svg>
        <svg className="absolute top-[70%] right-[12%] w-3 h-3" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#7b3ff2" /></svg>
        <svg className="absolute top-[45%] left-[45%] w-2 h-2" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#2a9d99" /></svg>
        <svg className="absolute top-[80%] left-[25%] w-2.5 h-2.5" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#ff64c8" /></svg>
        <svg className="absolute top-[15%] right-[35%] w-2 h-2" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#2a9d99" /></svg>
        <svg className="absolute top-[35%] right-[8%] w-2 h-2" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#f5d75e" /></svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1
          id="hero-title"
          role="heading"
          className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-hero-display text-on-dark mb-4 font-sans leading-[1.05] tracking-[-2px] font-semibold animate-fade-in-up"
        >
          {name}
        </h1>

        <p className="text-subtitle text-on-dark-muted font-sans min-h-[1.5em] animate-fade-in-up animate-delay-200" aria-label={title}>
          <span>{roles[roleIndex].substring(0, charIndex)}</span>
          <span className="animate-pulse">|</span>
        </p>

        <div className="max-w-4xl mx-auto animate-fade-in-up animate-delay-400">
          <p className="text-body-md text-on-dark-muted font-sans leading-[1.55]">
            {summary}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-12">
          <a
            href="#about"
            className="px-6 py-3 bg-primary text-onPrimary font-medium rounded-md font-sans transition-transform duration-200 animate-fade-in-up animate-delay-500 hover:scale-105 active:scale-95"
          >
            Explore Work
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-on-dark-muted text-on-dark font-medium rounded-md font-sans transition-transform duration-200 animate-fade-in-up animate-delay-500 hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
