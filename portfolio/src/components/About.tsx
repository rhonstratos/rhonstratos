import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function About({
  bio,
  stats,
}: {
  bio: string;
  stats: Array<{ value: string; label: string }>;
}) {
  return (
    <section
      id="about"
      className="py-section-sm md:py-hero bg-canvas border-b border-hairline relative overflow-hidden"
    >
      <motion.div
        className="absolute -top-24 -left-24 opacity-10"
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="60" fill="#ff9ec3" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-24 opacity-15"
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
      >
        <svg width="70" height="70" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="55" fill="#e8962d" />
        </svg>
      </motion.div>

      <AnimatedSection className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.h2
          role="heading"
          className="text-heading-3 md:text-heading-2 font-bold tracking-tight text-brand_navy mb-6 font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-body-md text-stone leading-[1.7] font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.15 }}
        >
          {bio}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="text-3xl font-bold text-brand_navy">{stat.value}</span>
              <p className="text-body-sm text-stone mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}