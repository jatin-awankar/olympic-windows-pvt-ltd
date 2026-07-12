import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/sections/contact/ContactDetails";
import MapSegment from "@/components/sections/contact/MapSegment";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our sales, technical, or logistics teams at Olympic Windows. India Factory in Dombivli, HQ in Mumbai, UK Consultation office in London.",
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full font-sans">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our sales, technical, or logistics teams."
        tagline="Let's Collaborate"
        bgImage="/images/headers/contact.webp"
        bgOpacity={40}
      />

      <Section variant="surface" hasBorder>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ContactDetails />

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </Container>
      </Section>

      <MapSegment />
    </div>
  );
}
