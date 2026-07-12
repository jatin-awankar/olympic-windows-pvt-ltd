"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { projects } from "@/data/home";

export default function FeaturedProjectsSection() {
  return (
    <Section variant="surface" hasBorder>
      <Container className="flex flex-col space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border-custom/20 pb-6">
          <div className="flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Our Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent-light font-accent font-semibold text-sm transition-colors group mt-4 md:mt-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="border border-border-custom/40 flex flex-col justify-between bg-surface-alt relative group"
            >
              <div className="absolute top-4 right-4 bg-accent text-white font-accent font-bold text-[10px] uppercase tracking-wider px-3 py-1 z-10 shadow-sm">
                {proj.stat}
              </div>
              <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${proj.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />
              </div>
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary font-accent group-hover:text-accent transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-border-custom/25 mt-6">
                  <Link
                    href={proj.href}
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent-light text-sm font-semibold transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
