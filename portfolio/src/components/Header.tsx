import { useEffect, useState } from "react";

const links = ["Home", "About", "Experience", "Skills", "Education", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="main-header"
      role="banner"
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-canvas/80 backdrop-blur-lg border-hairline"
          : "bg-canvas"
      }`}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-canvas px-3 py-2 rounded font-medium border-hairline"
      >
        Skip to main content
      </a>
      <div className="container mx-auto px-4 md:px-xl py-4 flex items-center justify-between">
        <h1
          role="img"
          aria-label="Ron Dy Tioco Jr. - portfolio logo and brand name"
          className="text-xl md:text-2xl font-semibold tracking-tight text-brand_navy font-sans cursor-default transition-transform duration-150 hover:scale-105 active:scale-95"
        >
          RD
        </h1>

        <nav className="flex gap-3 lg:gap-8 overflow-x-auto hide-scrollbar">
          {links.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
              className="text-slate hover:text-brand_navy font-medium text-body-sm font-sans whitespace-nowrap py-2 transition-all duration-150 hover:scale-105 active:scale-95"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
