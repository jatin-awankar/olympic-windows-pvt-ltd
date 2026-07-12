import type { Metadata } from "next";
import { Mail } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import LegalNav from "@/components/sections/legal/LegalNav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy detailing how we collect, protect, and handle your submission data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full font-sans">
      <PageHeader
        title="Privacy Policy"
        subtitle="Last Updated: July 3, 2026"
        tagline="Legal & Compliance"
        py="py-16"
      />

      <Section variant="surface" className="py-16" hasBorder>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <LegalNav activeHref="/privacy-policy" />

          <article className="lg:col-span-9 max-w-3xl flex flex-col space-y-8 font-accent">
            <p className="text-sm text-text-secondary leading-relaxed">
              At Olympic Windows, we value and respect your privacy. This Privacy Policy details how we collect, store, protect, and use the information shared through our contact forms or customer interactions.
            </p>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                1. Information We Collect
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                When you request a design consultation, quote pricing, or engineering specification sheets through our website contact forms, we collect the following:
              </p>
              <ul className="list-disc pl-5 text-sm text-text-secondary space-y-2 leading-relaxed">
                <li>Full Name / Corporate Point of Contact</li>
                <li>Company Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Inquiry Details / Message</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                2. How We Use Your Information
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We use the information shared solely to:
              </p>
              <ul className="list-disc pl-5 text-sm text-text-secondary space-y-2 leading-relaxed">
                <li>Provide requested design support, specification catalogs, or quotes.</li>
                <li>Schedule engineering evaluations or coordinate factory/site visits.</li>
                <li>Respond to customer service inquiries.</li>
              </ul>
              <p className="text-sm text-text-secondary leading-relaxed mt-2">
                We do not sell, rent, lease, or distribute your personal contact information to external third parties.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-bold text-primary font-sans border-l-2 border-accent pl-3">
                3. Data Security
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We implement standard security measures to safeguard your information. Form submissions are processed securely through secure APIs and routed directly to our secure internal mail system to protect against unauthorized access.
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
