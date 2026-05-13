import { motion } from "framer-motion";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import AnimatedSection from "./AnimatedSection";

export default function ContactSection({
  contact,
}: {
  contact: {
    phone: string;
    email: string;
    linkedin: string;
  };
}) {
  return (
    <section
      id="contact"
      role="region"
      aria-labelledby="contact-region-label"
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
      </motion.div>

      <AnimatedSection className="px-6">
        <h2
          id="contact-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans"
        >
          Get In Touch
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-full mx-auto px-6">
        <motion.a
          href={`tel:${contact.phone}`}
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-sky transition-colors group relative overflow-hidden shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-sky to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-sky text-brand_teal shrink-0">
            <FaPhone className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate font-sans">
              Phone
            </p>
            <p className="text-body-sm text-steel font-sans truncate">
              {contact.phone}
            </p>
          </div>
        </motion.a>

        <motion.a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-lavender transition-colors group relative overflow-hidden shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.12 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-lavender to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-lavender text-brand_purple shrink-0">
            <IoIosMail className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate font-sans">
              Email
            </p>
            <p className="text-body-sm text-steel font-sans truncate">
              {contact.email}
            </p>
          </div>
        </motion.a>

        <motion.a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-peach transition-colors group relative overflow-hidden shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.24 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-peach to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-peach text-brand_orange shrink-0">
            <FaLinkedin className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate font-sans">
              LinkedIn
            </p>
            <p className="text-body-sm text-steel font-sans truncate">
              {contact.linkedin}
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
