import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Read our cookie policy detailing the simple cookies we use for tracking page views.",
};

export default function CookiePolicy() {
  const currentYear = new Date().getFullYear();

  const legalNav = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy", active: true },
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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Cookie Policy</h1>
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
                  className={`text-sm py-1.5 transition-colors duration-150 ${link.active ? "text-accent font-semibold" : "text-text-secondary hover:text-accent"
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
              Our website uses basic, essential cookies to optimize performance and ensure stable navigation across our catalog and project case studies.
            </p>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                1. What are Cookies?
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Cookies are small text files stored on your device when you browse websites. They are widely used to make sites work more efficiently, preserve navigation histories, and provide general analytical metrics to web administrators.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                2. How We Use Cookies
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Olympic Windows utilizes cookies only to:
              </p>
              <ul className="list-disc pl-5 text-sm text-text-secondary space-y-2 leading-relaxed">
                <li>Temporarily remember form input configurations when navigating back and forth on our design inquiry forms.</li>
                <li>Gather completely anonymous traffic metrics via analytical trackers to improve our speeds and indexing.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                3. Managing Cookies
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                You can choose to disable, clear, or block cookies through your individual browser software settings. However, doing so may disable or impair certain operational features of our technical inquiry sheets.
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
