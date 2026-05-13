export default function Header() {
  return (
    <header
      id="main-header"
      role="banner"
      className="sticky top-0 z-50 bg-canvas border-b border-hairline"
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
          className="text-xl md:text-2xl font-semibold tracking-tight text-brand_navy font-sans"
        >
          RD
        </h1>

        <nav className="flex gap-3 lg:gap-8 overflow-x-auto">
          <a
            href="#home"
            className="text-stone transition-colors hover:text-brand_navy font-medium text-body-sm font-sans whitespace-nowrap py-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-stone transition-colors hover:text-brand_navy font-medium text-body-sm font-sans whitespace-nowrap py-2"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-stone transition-colors hover:text-brand_navy font-medium text-body-sm font-sans whitespace-nowrap py-2"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-stone transition-colors hover:text-brand_navy font-medium text-body-sm font-sans whitespace-nowrap py-2"
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-stone transition-colors hover:text-brand_navy font-medium text-body-sm font-sans whitespace-nowrap py-2"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-stone transition-colors hover:text-brand_navy font-medium text-body-sm font-sans whitespace-nowrap py-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
