import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = ["Home", "About", "Experience", "Skills", "Education", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.header
      id="main-header"
      role="banner"
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-canvas/80 backdrop-blur-lg border-hairline"
          : "bg-canvas border-hairline"
      }`}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-canvas px-3 py-2 rounded font-medium border-hairline"
      >
        Skip to main content
      </a>
      <div className="container mx-auto px-4 md:px-xl py-4 flex items-center justify-between">
        <motion.h1
          role="img"
          aria-label="Ron Dy Tioco Jr. - portfolio logo and brand name"
          className="text-xl md:text-2xl font-semibold tracking-tight text-brand_navy font-sans cursor-default"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          RD
        </motion.h1>

        <nav className="flex gap-3 lg:gap-8 overflow-x-auto">
          {links.map((link) => (
            <motion.a
              key={link}
              href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
              className="text-stone hover:text-brand_navy font-medium text-body-sm font-sans whitespace-nowrap py-2 relative"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
