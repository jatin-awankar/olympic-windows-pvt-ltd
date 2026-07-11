"use client";

import Link from "next/link";
import { MessageSquare, Settings, CheckCircle2, Hammer, Activity, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const processes = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Design & Optimization Consultation",
      desc: "We analyze structural drawings, calculate wind load dynamics, and optimize window shapes to satisfy aesthetic architectural goals while reducing material waste.",
    },
    {
      step: "02",
      icon: Settings,
      title: "Precision Manufacturing",
      desc: "Profiles are fabricated at our Mumbai facilities using automated cutting and CNC routing machinery, ensuring structural tolerances of less than 0.5mm.",
    },
    {
      step: "03",
      icon: CheckCircle2,
      title: "Performance Compliance Testing",
      desc: "We test sample setups in specialized water chambers and pressure rigs to verify weather sealing, thermal values, and sound insulation specifications.",
    },
    {
      step: "04",
      icon: Hammer,
      title: "On-Site Installation",
      desc: "Our field engineers install and level the window systems using premium sealants and hardware, ensuring operational safety and structural alignment.",
    },
    {
      step: "05",
      icon: Activity,
      title: "Maintenance & AMC Support",
      desc: "We offer comprehensive annual maintenance contract (AMC) support, regular gasket inspections, and hardware checks for long-term smooth operation.",
    },
  ];

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">

      {/* Page Header */}
      <section className="bg-primary text-text-inverse py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.95) 30%, rgba(10, 17, 34, 0.6) 100%), url('/images/headers/services.webp')`
          }}
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-4 z-10">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            End-To-End Fenestration
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            From design optimization to post-installation AMC support.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">
            A Complete Turnkey Solution
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
          <p className="text-text-secondary leading-relaxed text-base max-w-2xl">
            We provide builders and architects with comprehensive consulting, manufacturing, and support. We ensure every unit installed satisfies wind, noise, and environmental specifications.
          </p>
        </div>
      </section>

      {/* Stepped Process Timeline */}
      <section className="bg-surface-alt py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col space-y-16">
          <div className="text-center flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              How We Deliver Quality
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-2" />
          </div>

          <div className="flex flex-col space-y-8">
            {processes.map((proc, i) => {
              const Icon = proc.icon;
              return (
                <motion.div
                  key={proc.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-surface border border-border-custom/40 p-8 flex flex-col md:flex-row gap-6 items-start relative hover:shadow-card hover:border-accent/40 transition-all duration-300 rounded-sm group"
                >
                  {/* Step counter */}
                  <div className="font-accent text-4xl md:text-5xl font-bold text-accent/20 tracking-wider md:w-20 group-hover:text-accent/35 transition-colors">
                    {proc.step}
                  </div>

                  {/* Icon */}
                  <div className="h-12 w-12 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Body content */}
                  <div className="flex-grow space-y-2">
                    <h3 className="text-xl font-bold text-primary font-accent group-hover:text-accent transition-colors">
                      {proc.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{proc.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
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
