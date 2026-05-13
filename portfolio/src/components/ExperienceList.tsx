import JobCard from "./JobCard";
import AnimatedSection from "./AnimatedSection";

const delays = ["", "animate-delay-200", "animate-delay-400"];

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
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none animate-scale-in"
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

      <AnimatedSection className="px-6">
        <h2
          id="experience-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans"
        >
          Professional Experience
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-xl max-w-full mx-auto px-6">
        {experience.map((job, index) => (
          <div
            key={index}
            className={`animate-fade-in-up ${delays[index] || "animate-delay-400"}`}
          >
            <JobCard {...job} />
          </div>
        ))}
      </div>
    </section>
  );
}
