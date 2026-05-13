import { motion } from "framer-motion";
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
    <motion.div
      id={`${company}-job-card`}
      role="article"
      className={`rounded-lg border border-hairline bg-surface p-lg relative ${
        responsibilities.length > 3 ? "shadow-card" : ""
      }`}
      whileHover={{ y: -4, boxShadow: "rgba(15,15,15,0.12) 0px 8px 24px 0px" }}
      transition={{ duration: 0.25, ease: "easeOut" as const }}
    >
      <motion.svg
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent"
        aria-hidden="true"
        style={{ overflow: "visible" }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
      />

      <div className="flex items-start gap-4 mb-6">
        <Code
          key={company.toLowerCase()}
          className="w-6 h-6 flex-shrink-0 mt-1"
        />

        <div className="min-w-0 flex-1">
          <p className="text-heading-5 text-brand_navy truncate font-sans mb-0.5">
            {company}
          </p>

          <p className="text-body-sm text-stone font-sans truncate">
            {role}
          </p>

          <div className="flex flex-wrap items-center gap-x-2 text-body-sm text-muted font-sans mt-1">
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
        <motion.div
          className="mb-6 bg-canvas rounded-lg p-xl border border-hairline"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.1 }}
        >
          <h3 className="text-heading-5 text-brand_navy mb-sm font-sans">
            Featured Clients &amp; Projects
          </h3>
          <div className="flex flex-col gap-sm">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row gap-xxs sm:gap-md"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" as const, delay: idx * 0.08 }}
              >
                <span className="text-body-md-medium text-charcoal font-sans flex-shrink-0 min-w-[200px]">
                  {client.name}
                </span>
                <div className="flex flex-wrap gap-xs">
                  {client.projects.map((project, projIdx) => (
                    <span
                      key={projIdx}
                      className="text-caption-bold text-brand-purple-800 bg-card-tint-lavender rounded-sm px-xs py-[2px] font-sans"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <ul className="space-y-sm mb-8">
        {responsibilities.map((item, idx) => (
          <motion.li
            key={company + item}
            className="flex items-start gap-3 group hover:bg-surface_soft rounded-lg p-xxs -ml-xxs transition-colors"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, ease: "easeOut" as const, delay: idx * 0.06 }}
            whileHover={{ x: 4, transition: { duration: 0.15 } }}
          >
            {(idx % 4 === 0 && (
              <Code className="w-5 h-5 text-primary flex-shrink-0 mt-[2px]" />
            )) ||
              (idx % 4 === 1 && (
                <FileText className="w-5 h-5 text-brand_pink flex-shrink-0 mt-[2px]" />
              )) || (
                <Cloud className="w-5 h-5 text-brand_teal flex-shrink-0 mt-[2px]" />
              )}
            <span className="text-stone leading-relaxed group-hover:text-slate transition-colors truncate max-w-full text-body-sm font-sans">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
