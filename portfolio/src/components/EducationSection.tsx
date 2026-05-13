import AnimatedSection from "./AnimatedSection";

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
      aria-labelledby="education-region-label"
      className="py-section-sm md:py-section bg-surface relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-8 w-[2px] h-full opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      />

      <AnimatedSection className="px-6">
        <h2
          id="education-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans"
        >
          Education
        </h2>
      </AnimatedSection>

      <div className="max-w-full mx-auto px-6 grid gap-xl max-w-4xl">
        <div
          id={`${education[0]?.institution}-card`}
          role="article"
          aria-labelledby={`${education[0]?.institution}-heading`}
          className={`rounded-lg p-xl border border-hairline transition-transform duration-200 hover:-translate-y-0.5 ${
            education.length > 1 ? "bg-card-tint-mint text-charcoal" : "bg-canvas"
          } animate-fade-in-up`}
        >
          <h3
            id={`${education[0]?.institution}-heading`}
            className="text-heading-5 text-brand_navy mb-xxs font-sans"
          >
            {education[0]?.institution || ""}
          </h3>
          <p className="text-body-md-medium text-slate mb-1 font-sans">
            {education[0]?.degree || ""}
          </p>
          <p
            className={`text-body-sm font-medium font-sans ${
              education.length > 1 ? "text-muted" : ""
            }`}
          >
            {education[0]?.period || ""}
          </p>
        </div>
      </div>
    </section>
  );
}
