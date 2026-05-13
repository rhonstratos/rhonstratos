export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-canvas py-section border-t border-hairline relative animate-fade-in"
    >
      <h2 id="footer-heading" className="sr-only">
        <span id="foot-label">Footer - copyright and social connections</span>
      </h2>
      <div
        className="absolute top-0 left-8 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
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
      </div>

      <div className="flex justify-center gap-8 mb-6">
        <a
          href="https://www.linkedin.com/in/rhonstratos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel hover:text-brand_navy transition-all duration-150 font-medium text-body-sm font-sans hover:scale-105 active:scale-95"
        >
          LinkedIn
        </a>
      </div>

        <p className="text-center text-caption text-steel font-sans">
        &copy; {new Date().getFullYear()} Ronald Dy Tioco Jr. All rights reserved.
      </p>
    </footer>
  );
}
