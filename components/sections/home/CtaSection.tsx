import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function CtaSection() {
  return (
    <Section variant="accent">
      <Container className="max-w-5xl text-center flex flex-col items-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ready to Start Your Project?
        </h2>
        <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
          Partner with Mumbai's premium developer-preferred aluminum fenestration specialists. Get a comprehensive consultation on wind loads, designs, and budgets.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-colors text-sm hover:shadow-lg active:scale-95 transition-transform"
          >
            Book a Consultation
          </Link>
          <a
            href="tel:+919167394442"
            className="border border-white/50 hover:border-white text-white hover:bg-white/10 font-accent font-semibold px-8 py-4 rounded-sm transition-colors text-sm hover:shadow-lg active:scale-95 transition-transform"
          >
            Call: +91 91673 94442
          </a>
        </div>
      </Container>
    </Section>
  );
}
