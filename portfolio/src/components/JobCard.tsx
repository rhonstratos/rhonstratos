import { Cloud, Code, FileText } from "lucide-react";

export default function JobCard({
  company,
  location,
  role,
  period,
  responsibilities,
  clients = [],
}: {
  company: string;
  location?: string;
  role: string;
  period: string;
  responsibilities: string[];
  clients?: Array<{
    name: string;
    projects: string[];
  }>;
}) {
  return (
    <div
      id={`${company}-job-card`}
      role="article"
      className={`rounded-lg border border-hairline bg-surface p-lg relative transition-all duration-200 hover:-translate-y-1 hover:shadow-hover ${
        responsibilities.length > 3 ? "shadow-card" : ""
      }`}
    >
      <svg
        className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-primary to-transparent animate-scale-in"
        aria-hidden="true"
        style={{ overflow: "visible", transformOrigin: "0% 50%" }}
      />

      <div className="flex items-start gap-4 mb-6">
        <Code
          key={company.toLowerCase()}
          className="w-6 h-6 text-primary shrink-0 mt-1"
        />

        <div className="min-w-0 flex-1">
          <p className="text-heading-5 text-brand_navy truncate font-sans mb-0.5">
            {company}
          </p>

          <p className="text-body-sm text-slate font-sans truncate">
            {role}
          </p>

          <div className="flex flex-wrap items-center gap-x-2 text-body-sm text-steel font-sans mt-1">
            <span className="inline-flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {location}
            </span>
            <span aria-hidden="true">|</span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {period}
            </span>
          </div>
        </div>
      </div>

      {clients.length > 0 && (
        <div className="mb-6 bg-canvas rounded-lg p-xl border border-hairline animate-fade-in-up">
          <h3 className="text-heading-5 text-brand_navy mb-sm font-sans">
            Featured Clients &amp; Projects
          </h3>
          <div className="flex flex-col gap-sm">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row gap-xxs sm:gap-md animate-slide-in-right`}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <span className="text-body-md-medium text-charcoal font-sans shrink-0 min-w-50">
                  {client.name}
                </span>
                <div className="flex flex-wrap gap-xs">
                  {client.projects.map((project, projIdx) => (
                    <span
                      key={projIdx}
                      className="text-caption-bold text-brand-purple-800 bg-card-tint-lavender rounded-sm px-xs py-0.5 font-sans"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ul className="space-y-sm mb-8">
        {responsibilities.map((item, idx) => (
          <li
            key={company + item}
            className="flex items-start gap-3 group hover:bg-surface_soft hover:translate-x-1 rounded-lg p-xxs -ml-xxs transition-all duration-200 animate-slide-in-right"
            style={{ animationDelay: `${idx * 0.06}s` }}
          >
            {(idx % 4 === 0 && (
              <Code className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            )) ||
              (idx % 4 === 1 && (
                <FileText className="w-5 h-5 text-brand_pink shrink-0 mt-0.5" />
              )) || (
                <Cloud className="w-5 h-5 text-brand_teal shrink-0 mt-0.5" />
              )}
            <span className="text-charcoal leading-relaxed group-hover:text-slate transition-colors truncate max-w-full text-body-sm font-sans">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
