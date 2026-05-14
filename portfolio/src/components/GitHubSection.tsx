import AnimatedSection from "./AnimatedSection";

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const profiles = [
  {
    username: "rhonstratos",
    url: "https://github.com/rhonstratos",
    label: "Main GitHub",
    description: "Personal projects, open source, and experiments",
  },
  {
    username: "ronald-dytioco",
    url: "https://github.com/ronald-dytioco",
    label: "Professional GitHub",
    description: "Client work and enterprise contributions at Cyberland",
  },
];

export default function GitHubSection() {
  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="py-section-sm md:py-section bg-surface_soft relative overflow-hidden"
    >
      <AnimatedSection className="px-6">
        <h2
          id="github-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans"
        >
          GitHub
        </h2>
      </AnimatedSection>

      <div className="mx-auto px-6 grid gap-lg max-w-4xl">
        {profiles.map((profile, i) => (
          <a
            key={profile.username}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-lg rounded-lg border border-hairline bg-canvas transition-all duration-200 hover:-translate-y-1 hover:shadow-hover animate-fade-in-up ${
              i === 0 ? "" : "animate-delay-200"
            }`}
          >
            <div className="w-10 h-10 rounded-md bg-[#0d1117] text-white flex items-center justify-center shrink-0">
              <GitHubIcon />
            </div>
            <div>
              <p className="font-medium text-brand_navy font-sans">{profile.label}</p>
              <p className="text-body-sm text-steel font-sans">{profile.username}</p>
              <p className="text-body-sm text-slate font-sans mt-0.5">{profile.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
