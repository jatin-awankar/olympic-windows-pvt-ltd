"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <Section variant="surface" hasBorder>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Image box with real photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 aspect-[4/3] w-full relative border border-border-custom/40 p-3 bg-surface-alt rounded-sm"
        >
          <div
            className="absolute inset-3 bg-cover bg-center rounded-sm bg-slate-900"
            style={{ backgroundImage: `url('/images/general/cta-bg.webp')` }}
          />
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col space-y-6"
        >
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            We design, develop, and deliver aluminum systems for landmark projects
          </h2>
          <div className="h-0.5 w-16 bg-accent" />
          <p className="text-text-secondary leading-relaxed text-base">
            European based company, Specialized in aluminum windows and doors invited by Lodha group to India in 2012. We have successfully designed, developed and delivered the requirements of our customer. Providing our clients with a highly engineered system along with our fully trained service.
          </p>
          <p className="text-text-secondary leading-relaxed text-base">
            With our production facility in Mumbai and project coordination capacity, we maintain strict structural control, water-tightness certifications, and reliable delivery matching large-scale development programs.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent-light font-accent font-semibold text-sm transition-colors group"
            >
              <span>Read More About Our Story</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
