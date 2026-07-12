import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ProjectsList from "@/components/sections/projects/ProjectsList";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Uncompromised quality delivered across India's largest masterplanned residential townships and commercial landmarks. Explore case studies of Lodha projects.",
};

export default function ProjectsIndex() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <PageHeader
        title="Our Projects"
        subtitle="Uncompromised quality delivered across India's largest masterplanned townships."
        tagline="Deliveries at Scale"
        bgImage="/images/headers/projects.webp"
        bgOpacity={40}
      />

      <Section variant="surface" hasBorder>
        <Container>
          <ProjectsList projects={projects} />
        </Container>
      </Section>

      <section className="bg-primary text-text-inverse py-16">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Need a Partner for Your Next Development?</h2>
          <p className="text-text-muted max-w-md text-sm leading-relaxed">
            Let us help you execute high-rise window profiling with strict precision and delivery guarantees.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-all duration-200 active:scale-95 shadow-md inline-flex items-center space-x-2"
          >
            <span>Request a Capability Presentation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
