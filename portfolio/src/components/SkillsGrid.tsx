import { motion } from "framer-motion";
import { Code, FileText, Cloud } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function SkillsGrid({
  skills,
}: {
  skills: Record<string, string[]>;
}) {
  return (
    <section
      id="skills"
      role="region"
      aria-labelledby="skills-heading-label"
      className="py-section-sm md:py-section bg-surface relative overflow-hidden"
    >
      <motion.div
        className="absolute bottom-0 right-8 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
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
      </motion.div>

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
          <motion.div
            key={category}
            className={`rounded-lg border border-hairline p-lg md:p-xxl ${
              idx === 0
                ? "bg-card-tint-peach"
                : idx === 1
                  ? "bg-card-tint-rose"
                  : "bg-card-tint-mint"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: idx * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <h3
              id={`${category}-heading`}
              className="text-heading-4 text-brand_navy mb-xs font-sans"
            >
              {category}
            </h3>

            <ul className="space-y-2">
              {technologies.map((tech, techIdx) => (
                <motion.li
                  key={tech}
                  className="flex items-center gap-xs group hover:bg-surface_soft rounded-lg p-xxs -ml-xxs transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: techIdx * 0.03, duration: 0.25, ease: "easeOut" as const }}
                  whileHover={{ x: 3, transition: { duration: 0.15 } }}
                >
                  {(idx % 3 === 0 && (
                    <Code
                      className="w-5 h-5 text-primary flex-shrink-0 mt-[2px]"
                    />
                  )) ||
                    (idx % 3 === 1 && (
                      <FileText
                        className="w-5 h-5 text-brand_pink flex-shrink-0 mt-[2px]"
                      />
                    )) || (
                      <Cloud
                        className="w-5 h-5 text-brand_teal flex-shrink-0 mt-[2px]"
                      />
                    )}
                  <span className="text-stone leading-relaxed group-hover:text-slate transition-colors truncate max-w-full text-body-sm font-sans">
                    {tech}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
