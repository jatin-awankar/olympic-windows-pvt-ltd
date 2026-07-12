import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ProcessTimeline from "@/components/sections/services/ProcessTimeline";
import { processes } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our premium aluminum fenestration services: from design consultation, custom engineering, precise manufacturing, on-site installation to long-term maintenance contracts.",
};

export default function Services() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <PageHeader
        title="Our Services"
        subtitle="From design optimization to post-installation AMC support."
        tagline="End-To-End Fenestration"
        bgImage="/images/headers/services.webp"
        bgOpacity={40}
      />

      <Section variant="surface" className="py-20" hasBorder>
        <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">
            A Complete Turnkey Solution
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
          <p className="text-text-secondary leading-relaxed text-base max-w-2xl">
            We provide builders and architects with comprehensive consulting, manufacturing, and support. We ensure every unit installed satisfies wind, noise, and environmental specifications.
          </p>
        </div>
      </Section>

      <Section variant="surface-alt" className="py-20" hasBorder>
        <Container className="flex flex-col space-y-16">
          <div className="text-center flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              How We Deliver Quality
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-2" />
          </div>

          <ProcessTimeline processes={processes} />
        </Container>
      </Section>

      <section className="bg-primary text-text-inverse py-20">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Need a custom technical spec sheet?</h2>
          <p className="text-text-muted max-w-md text-sm leading-relaxed">
            Get in touch with our design engineers to run wind load estimates or review drawings.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-all duration-200 active:scale-95 shadow-md inline-flex items-center space-x-2"
          >
            <span>Request Design Support</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
