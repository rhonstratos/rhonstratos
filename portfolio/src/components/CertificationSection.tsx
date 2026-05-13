export default function CertificationSection({
  certifications,
}: {
  certifications: string[];
}) {
  return (
    <section
      className="py-section-sm md:py-section bg-surface relative overflow-hidden"
      id="certifications"
    >
      <div
        className="absolute bottom-0 right-8 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      >
        <svg width="300" height="150">
          <circle
            cx="150"
            cy="75"
            r="60"
            fill="#5645d4"
            style={{
              filter: "drop-shadow(rgba(86, 69, 212, 0.1) 0px 2px 3px)",
            }}
          />
        </svg>
      </div>

      <div className="px-6">
        <h2 className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans">
          Certifications
        </h2>
      </div>

      <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-lg max-w-full mx-auto">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-lg bg-surface_soft rounded-lg border border-hairline shadow-card"
          >
            <svg
              className="w-10 h-10 text-primary shrink-0 rounded-sm bg-card-tint-mint p-1.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              />
            </svg>

            <div className="min-w-0">
              <p
                className={`font-medium tracking-tight text-brand_navy font-sans text-body-md ${
                  cert.length > 35 ? "truncate" : ""
                }`}
              >
                {cert}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
