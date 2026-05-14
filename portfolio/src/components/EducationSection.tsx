import AnimatedSection from "./AnimatedSection";

const tints = [
  "bg-card-tint-mint",
  "bg-card-tint-sky",
  "bg-card-tint-lavender",
  "bg-card-tint-peach",
  "bg-card-tint-rose",
];

export default function EducationSection({
  education,
}: {
  education: Array<{
    institution: string;
    degree: string;
    period: string;
  }>;
}) {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-section-sm md:py-section bg-surface relative overflow-hidden"
    >
      <AnimatedSection className="px-xl">
        <h2
          id="education-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-xl md:mb-xxl font-sans"
        >
          Education
        </h2>
      </AnimatedSection>

      <div className="mx-auto px-xl grid gap-xl">
        {education.map((edu, i) => (
          <div
            key={edu.institution}
            id={`${edu.institution}-card`}
            role="article"
            aria-labelledby={`${edu.institution}-heading`}
            className={`rounded-lg p-sm border border-hairline transition-transform duration-200 hover:-translate-y-0.5 ${tints[i % tints.length]} animate-fade-in-up`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-xxs sm:gap-md">
              <div>
                <h3
                  id={`${edu.institution}-heading`}
                  className="text-heading-5 text-brand_navy mb-xxs font-sans"
                >
                  {edu.institution}
                </h3>
                <p className="text-body-md-medium text-slate font-sans">
                  {edu.degree}
                </p>
              </div>
              <span className="text-body-sm whitespace-nowrap font-medium text-steel font-sans shrink-0 mt-xxs sm:mt-0">
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
