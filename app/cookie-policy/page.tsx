import type { Metadata } from "next";
import { Mail } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import LegalNav from "@/components/sections/legal/LegalNav";
import { contactConfig } from "@/data/contact";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Read our cookie policy detailing the simple cookies we use for tracking page views.",
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-col w-full font-sans">
      <PageHeader
        title="Cookie Policy"
        subtitle="Last Updated: July 3, 2026"
        tagline="Legal & Compliance"
        py="py-16"
      />

      <Section variant="surface" className="py-16" hasBorder>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <LegalNav activeHref="/cookie-policy" />

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
              <a href={contactConfig.email.link} className="text-accent hover:underline font-semibold font-accent">
                {contactConfig.email.display}
              </a>
            </div>
          </article>
        </Container>
      </Section>
    </div>
  );
}
