import { Code, FileText, Cloud } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const delays = ["", "animate-delay-200", "animate-delay-400"];

export default function SkillsGrid({
  skills,
}: {
  skills: Record<string, string[]>;
}) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading-label"
      className="py-section-sm md:py-section bg-surface relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 right-8 opacity-[0.07] pointer-events-none animate-scale-in"
        aria-hidden="true"
      >
        <svg width="200" height="100">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="#5645d4"
            style={{
              filter: "drop-shadow(rgba(86, 69, 212, 0.1) 0px 2px 3px)",
            }}
          />
        </svg>
      </div>

      <AnimatedSection className="px-6">
        <h2
          id="skills-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans"
        >
          Technical Skills
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-full mx-auto px-6">
        {Object.entries(skills).map(([category, technologies], idx) => (
          <div
            key={category}
            className={`rounded-lg border border-hairline p-lg md:p-xxl transition-transform duration-200 hover:-translate-y-1 ${
              idx === 0
                ? "bg-card-tint-peach"
                : idx === 1
                  ? "bg-card-tint-rose"
                  : "bg-card-tint-mint"
            } animate-fade-in-up ${delays[idx] || ""}`}
          >
            <h3
              id={`${category}-heading`}
              className="text-heading-4 text-brand_navy mb-xs font-sans"
            >
              {category}
            </h3>

            <ul className="space-y-2">
              {technologies.map((tech, techIdx) => (
                <li
                  key={tech}
                  className="flex items-center gap-xs group hover:bg-surface_soft hover:translate-x-0.5 rounded-lg p-xxs -ml-xxs transition-all duration-200 animate-slide-in-right"
                  style={{ animationDelay: `${techIdx * 0.03}s` }}
                >
                  {(idx % 3 === 0 && (
                    <Code
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    />
                  )) ||
                    (idx % 3 === 1 && (
                      <FileText
                        className="w-5 h-5 text-brand_pink shrink-0 mt-0.5"
                      />
                    )) || (
                      <Cloud
                        className="w-5 h-5 text-brand_teal shrink-0 mt-0.5"
                      />
                    )}
                  <span className="text-charcoal leading-relaxed group-hover:text-slate transition-colors truncate max-w-full text-body-sm font-sans">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
