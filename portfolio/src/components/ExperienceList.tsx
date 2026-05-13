import JobCard from "./JobCard";

export default function ExperienceList({
  experience,
}: {
  experience: Array<{
    company: string;
    location: string;
    role: string;
    period: string;
    responsibilities: string[];
    clients?: Array<{
      name: string;
      projects: string[];
    }>;
  }>;
}) {
  return (
    <section
      id="experience"
      className="py-section-sm md:py-section bg-surface_soft relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="#5645d4"
            style={{ filter: "drop-shadow(0px 2px 3px rgba(86,69,212,0.1))" }}
          />
        </svg>
      </div>

      <div className="px-6">
        <h2
          id="experience-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans"
        >
          Professional Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-xl max-w-full mx-auto px-6">
        {experience.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}
