import AnimatedSection from "./AnimatedSection";

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M0 1.146C0 .513.526 0 1.175 0h17.65C19.474 0 20 .513 20 1.146v17.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 20 0 19.487 0 18.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  );
}

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
      <div
        className="absolute bottom-0 right-8 opacity-[0.07] pointer-events-none"
        aria-hidden="true"
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
      </div>

      <AnimatedSection className="px-6">
        <h2
          id="contact-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans"
        >
          Get In Touch
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-full mx-auto px-6">
        <a
          href={`tel:${contact.phone}`}
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-sky transition-all duration-200 group relative overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-sky to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-sky text-brand_teal shrink-0">
            <PhoneIcon />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate font-sans">
              Phone
            </p>
            <p className="text-body-sm text-steel font-sans truncate">
              {contact.phone}
            </p>
          </div>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-lavender transition-all duration-200 group relative overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-lavender to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-lavender text-brand_purple shrink-0">
            <MailIcon />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate font-sans">
              Email
            </p>
            <p className="text-body-sm text-steel font-sans truncate">
              {contact.email}
            </p>
          </div>
        </a>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-peach transition-all duration-200 group relative overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-peach to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-peach text-brand_orange shrink-0">
            <LinkedInIcon />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate font-sans">
              LinkedIn
            </p>
            <p className="text-body-sm text-steel font-sans truncate">
              {contact.linkedin}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
