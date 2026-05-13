import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      role="contentinfo"
      className="bg-canvas py-section border-t border-hairline relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
    >
      <h2 id="footer-heading" className="sr-only">
        <span id="foot-label">Footer - copyright and social connections</span>
      </h2>
      <motion.div
        className="absolute top-0 left-8 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
      >
        <svg width="60" height="30">
          <rect
            x="0"
            y="0"
            width="100%"
            height="30"
            fill="#5645d4"
            style={{ filter: "drop-shadow(0px 2px 3px rgba(86,69,212,0.1))" }}
          />
        </svg>
      </motion.div>

      <div className="flex justify-center gap-8 mb-6">
        <motion.a
          href="https://www.linkedin.com/in/rhonstratos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel hover:text-brand_navy transition-colors font-medium text-body-sm font-sans"
          whileHover={{ scale: 1.06, color: "#0a1530" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          LinkedIn
        </motion.a>
      </div>

      <p className="text-center text-caption text-muted font-sans">
        &copy; {new Date().getFullYear()} Ronald Dy Tioco Jr. All rights reserved.
      </p>
    </motion.footer>
  );
}
