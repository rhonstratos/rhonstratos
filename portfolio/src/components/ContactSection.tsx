import { FaLinkedin, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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

      <div className="px-6">
        <h2
          id="contact-heading"
          className="text-heading-3 md:text-heading-2 text-brand_navy mb-6 md:mb-8 font-sans"
        >
          Get In Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-full mx-auto px-6">
        <a
          href={`tel:${contact.phone}`}
          role="button"
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-sky transition-colors group relative overflow-hidden shadow-card"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-sky to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-sky text-brand_teal transition-colors group-hover:bg-card-tint-sky shrink-0">
            <FaPhone className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate group-hover:text-slate font-sans">
              Phone
            </p>
            <p className="text-body-sm text-steel font-sans truncate">
              {contact.phone}
            </p>
          </div>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-lavender transition-colors group relative overflow-hidden shadow-card"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-lavender to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-lavender text-brand_purple transition-colors group-hover:bg-card-tint-lavender shrink-0">
            <IoIosMail className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate group-hover:text-slate font-sans">
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
          className="flex items-center gap-4 p-lg rounded-lg bg-canvas border border-card-tint-peach transition-colors group relative overflow-hidden shadow-card"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-card-tint-peach to-transparent" />

          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-card-tint-peach text-brand_orange transition-colors group-hover:bg-card-tint-peach shrink-0">
            <FaLinkedin className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <p className="font-medium tracking-tight text-brand_navy truncate group-hover:text-slate font-sans">
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
