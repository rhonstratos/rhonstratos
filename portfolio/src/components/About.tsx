import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const delays = ["animate-delay-100", "animate-delay-200", "animate-delay-300", "animate-delay-400"];

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const num = parseInt(value);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          obs.disconnect();
          if (isNaN(num)) return;
          let start = 0;
          const end = num;
          const duration = 1200;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { start = end; clearInterval(timer); }
            setDisplay(String(start));
          }, 16);
        }
      },
      { rootMargin: "-80px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num]);

  return (
    <div
      ref={ref}
      className={`animate-fade-in-up ${delay} transition-transform duration-200 hover:-translate-y-1`}
    >
      <span className="text-3xl font-bold text-brand_navy">{display}{value.endsWith("+") ? "+" : ""}</span>
      <p className="text-body-sm text-slate mt-1">{label}</p>
    </div>
  );
}

export default function About({
  bio,
  stats,
}: {
  bio: string;
  stats: Array<{ value: string; label: string }>;
}) {
  return (
    <section
      id="about"
      className="py-section-sm md:py-hero bg-canvas border-b border-hairline relative overflow-hidden"
    >
      <div
        className="absolute -top-24 -left-24 opacity-10 animate-scale-in"
        aria-hidden="true"
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="60" fill="#ff9ec3" />
        </svg>
      </div>

      <div
        className="absolute bottom-8 right-24 opacity-15 animate-scale-in animate-delay-200"
        aria-hidden="true"
      >
        <svg width="70" height="70" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="55" fill="#e8962d" />
        </svg>
      </div>

      <AnimatedSection className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <h2
          role="heading"
          className="text-heading-3 md:text-heading-2 font-bold tracking-tight text-brand_navy mb-6 font-sans animate-fade-in-up"
        >
          About Me
        </h2>

        <p className="text-body-md text-slate leading-[1.7] font-sans animate-fade-in-up animate-delay-200">
          {bio}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-center">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} delay={delays[i]} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
