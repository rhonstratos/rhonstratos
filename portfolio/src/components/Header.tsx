import { useEffect, useState, useRef } from "react";

const links = ["Home", "About", "Experience", "Skills", "Education", "Contact"];

function SunIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
}

function MoonIcon() {
  return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
}

function MenuIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
}

function CloseIcon() {
  return <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

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
      <div className="container mx-auto px-4 md:px-xl py-4 flex items-center justify-between gap-2">
        <span
          role="img"
          aria-label="Ron Dy Tioco Jr. - portfolio logo and brand name"
          className="text-xl md:text-2xl font-semibold tracking-tight text-brand_navy font-sans cursor-default transition-transform duration-150 hover:scale-105 active:scale-95"
        >
          RD
        </span>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-8">
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

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-slate hover:text-brand_navy dark:text-steel dark:hover:text-on-dark transition-colors"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-slate hover:text-brand_navy transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div ref={menuRef} className="lg:hidden border-t border-hairline bg-canvas animate-fade-in">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {links.map((link) => (
              <a
                key={link}
                href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-slate hover:text-brand_navy font-medium text-body-sm font-sans px-3 py-2.5 rounded-md hover:bg-surface transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
