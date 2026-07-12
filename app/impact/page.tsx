import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import InitiativesList from "@/components/sections/impact/InitiativesList";
import { initiatives } from "@/data/impact";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "Learn about the social and environmental initiatives at Olympic Windows, including closed-loop aluminum recycling, women empowerment in manufacturing, and cutting-waste optimization.",
};

export default function Impact() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <PageHeader
        title="Our Impact"
        subtitle="Building a better future through material efficiency and social opportunity."
        tagline="Sustainability & Social Responsibility"
        bgImage="/images/headers/impact.webp"
        bgOpacity={40}
      />

      <Section variant="surface" className="py-20" hasBorder>
        <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">
            Responsible Manufacturing
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
          <p className="text-text-secondary leading-relaxed text-base max-w-2xl">
            At Olympic Windows, sustainability isn't an afterthought. We align our manufacturing practices with green building standards and community growth to ensure that our operations leave a net-positive footprint.
          </p>
        </div>
      </Section>

      <Section variant="surface-alt" className="py-24" hasBorder>
        <Container>
          <InitiativesList initiatives={initiatives} />
        </Container>
      </Section>

      <section className="bg-primary text-text-inverse py-20">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Support Our Vision</h2>
          <p className="text-text-muted max-w-md text-sm leading-relaxed">
            Interested in learning more about our factory standards or green building compliance data?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-all duration-200 active:scale-95 shadow-md"
          >
            <span>Get Compliance Details</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
