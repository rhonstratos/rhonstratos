export default function Hero({
  name,
  title,
  summary,
}: {
  name: string;
  title: string;
  summary: string;
}) {
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

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1
          id="hero-title"
          role="heading"
          className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-hero-display text-on-dark mb-4 font-sans leading-[1.05] tracking-[-2px] font-semibold animate-fade-in-up"
        >
          {name}
        </h1>

        <p className="text-subtitle text-on-dark-muted font-sans animate-fade-in-up animate-delay-200">
          {title}
        </p>

        <div className="max-w-4xl mx-auto animate-fade-in-up animate-delay-400">
          <p className="text-body-md text-stone font-sans leading-[1.55]">
            {summary}
          </p>
        </div>

        <a
          href="#about"
          className="inline-block mt-8 md:mt-12 px-6 py-3 bg-primary text-onPrimary font-medium rounded-md font-sans transition-transform duration-200 animate-fade-in-up animate-delay-500 hover:scale-105 active:scale-95"
        >
          Explore Work
        </a>
      </div>
    </section>
  );
}
