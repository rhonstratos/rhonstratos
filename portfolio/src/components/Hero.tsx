import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero({
  name,
  title,
  summary,
}: {
  name: string;
  title: string;
  summary: string;
}) {
  return (
    <section
      id="home"
      className="py-section-sm md:py-hero bg-brand_navy relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="absolute top-8 left-8 opacity-30"
        aria-hidden="true"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="#ff64c8"
            style={{ filter: "drop-shadow(0px 2px 3px rgba(255,100,200,0.3))" }}
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-12 right-16 opacity-20"
        aria-hidden="true"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="#dd5b00"
            style={{ filter: "drop-shadow(0px 2px 3px rgba(221,91,0,0.2))" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="container mx-auto px-6 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          id="hero-title"
          role="heading"
          className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] xl:text-hero-display text-on-dark mb-4 font-sans leading-[1.05] tracking-[-2px] font-semibold"
          variants={itemVariants}
        >
          {name}
        </motion.h1>

        <motion.p
          className="text-subtitle text-steel font-sans"
          variants={itemVariants}
        >
          {title}
        </motion.p>

        <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
          <p className="text-body-md text-stone font-sans leading-[1.55]">
            {summary}
          </p>
        </motion.div>

        <motion.a
          href="#about"
          className="inline-block mt-8 md:mt-12 px-6 py-3 bg-primary text-onPrimary font-medium rounded-md font-sans"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Explore Work
        </motion.a>
      </motion.div>
    </section>
  );
}
