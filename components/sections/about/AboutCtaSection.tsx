import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function AboutCtaSection() {
  return (
    <section className="bg-primary text-text-inverse py-16">
      <Container className="max-w-5xl text-center flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Want to Discuss Your Design Requirements?</h2>
        <p className="text-text-muted max-w-md text-sm leading-relaxed">
          Get technical data sheets, profile drawings, or talk to our engineers.
        </p>
        <Link
          href="/contact"
          className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-3 text-sm transition-colors"
        >
          Contact Our Technical Team
        </Link>
      </Container>
    </section>
  );
}
