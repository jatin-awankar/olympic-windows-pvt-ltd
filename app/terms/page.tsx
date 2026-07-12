import type { Metadata } from "next";
import { Mail } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import LegalNav from "@/components/sections/legal/LegalNav";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for using the website of Olympic Windows.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full font-sans">
      <PageHeader
        title="Terms of Service"
        subtitle="Last Updated: July 3, 2026"
        tagline="Legal & Compliance"
        py="py-16"
      />

      <Section variant="surface" className="py-16" hasBorder>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <LegalNav activeHref="/terms" />

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
        </Container>
      </Section>
    </div>
  );
}
