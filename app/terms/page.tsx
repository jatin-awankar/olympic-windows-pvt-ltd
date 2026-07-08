import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for using the website of Olympic Windows.",
};

export default function TermsOfService() {
  const legalNav = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms", active: true },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Header Banner */}
      <section className="bg-primary text-text-inverse py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-3">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Legal & Compliance
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-sm text-text-muted max-w-xl">
            Last Updated: July 3, 2026
          </p>
        </div>
      </section>

      {/* Content Columns */}
      <section className="bg-surface py-16 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Left Navigation */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 flex flex-col space-y-2 border-l border-border-custom/40 pl-4 font-accent">
              <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider mb-2">Legal Documents</span>
              {legalNav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm py-1.5 transition-colors duration-150 ${
                    link.active ? "text-accent font-semibold" : "text-text-secondary hover:text-accent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </aside>

          {/* Right Text Column */}
          <article className="lg:col-span-9 max-w-3xl flex flex-col space-y-8 font-accent">
            <p className="text-sm text-text-secondary leading-relaxed">
              Welcome to the website of Olympic Windows. By accessing or browsing this site, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Your access to and use of this website is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access the site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                2. Intellectual Property
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                The original content, features, layout design, spec sheet data, and branding displayed on this website are the exclusive property of Olympic Windows and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                3. Content Disclaimers
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                While we make every effort to display accurate specifications and dimensions for our window and door systems, architectural and structural requirements vary by site. All drawings, dimensions, and ratings provided are for general informational purposes.
              </p>
            </div>

            <div className="pt-6 border-t border-border-custom/25 flex items-center space-x-3 text-sm text-text-secondary">
              <Mail className="h-4 w-4 text-accent" />
              <span>Questions? Email our compliance team at </span>
              <a href="mailto:info@olympicwindows.in" className="text-accent hover:underline font-semibold font-accent">
                info@olympicwindows.in
              </a>
            </div>
          </article>

        </div>
      </section>

    </div>
  );
}
