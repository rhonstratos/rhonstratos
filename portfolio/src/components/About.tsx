export default function About() {
  return (
    <section
      id="about"
      className="py-section-sm md:py-hero bg-canvas border-b border-hairline relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-24 opacity-10" aria-hidden="true">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="60" fill="#ff9ec3" />
        </svg>
      </div>
      
      <div className="absolute bottom-8 right-24 opacity-15" aria-hidden="true">
        <svg width="70" height="70" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="55" fill="#e8962d" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <h2
          role="heading"
          className="text-heading-3 md:text-heading-2 font-bold tracking-tight text-brand_navy mb-6 font-sans"
        >
          About Me
        </h2>

        <p className="text-body-lg text-stone leading-[1.7] font-sans">
          I'm a passionate software developer with experience building modern web applications using Svelte, TypeScript, and Tailwind CSS. 
          My work focuses on creating performant, accessible user experiences that are both beautiful and functional.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          <div>
            <span className="text-3xl font-bold text-brand_navy">3+</span>
            <p className="text-body-sm text-stone mt-1">Years Experience</p>
          </div>

          <div>
            <span className="text-3xl font-bold text-brand_navy">25+</span>
            <p className="text-body-sm text-stone mt-1">Projects Completed</p>
          </div>

          <div>
            <span className="text-3xl font-bold text-brand_navy">5+</span>
            <p className="text-body-sm text-stone mt-1">Clients Served</p>
          </div>

          <div>
            <span className="text-3xl font-bold text-brand_navy">4.9</span>
            <p className="text-body-sm text-stone mt-1">Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}