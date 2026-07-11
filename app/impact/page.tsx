"use client";

import Link from "next/link";
import { Recycle, Landmark, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Impact() {
  const initiatives = [
    {
      id: "recycling",
      icon: Recycle,
      title: "Closed-Loop Aluminum Recycling",
      desc: "Aluminum is infinitely recyclable. At our Mumbai fabrication facility, 100% of aluminum scrap, off-cuts, and metal shavings are collected, separated, and returned to smelters for re-extrusion, supporting a circular economy.",
      imageUrl: "/images/impact/recycling.webp",
    },
    {
      id: "women-empowerment",
      icon: Landmark,
      title: "Women Empowerment in Manufacturing",
      desc: "We actively challenge the gender gap in the heavy industrial sector. Olympic Windows runs a dedicated vocational training program to employ and empower women in manufacturing design, logistics control, and precise quality assessment roles.",
      imageUrl: "/images/impact/women-empowerment.webp",
    },
    {
      id: "optimization",
      icon: Layers,
      title: "Profile Scrap Optimization",
      desc: "Using advanced nesting software, we calculate optimal cutting layouts before feeding profiles to fabrication lines. This optimization has reduced our default profile scrap rate from 8% down to under 2.5%, reducing material impact.",
      imageUrl: "/images/impact/profile-scrap.webp",
    },
  ];

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">

      {/* Page Header */}
      <section className="bg-primary text-text-inverse py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.95) 30%, rgba(10, 17, 34, 0.6) 100%), url('/images/headers/impact.webp')`
          }}
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-4 z-10">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Sustainability & Social Responsibility
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Impact</h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Building a better future through material efficiency and social opportunity.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">
            Responsible Manufacturing
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
          <p className="text-text-secondary leading-relaxed text-base max-w-2xl">
            At Olympic Windows, sustainability isn't an afterthought. We align our manufacturing practices with green building standards and community growth to ensure that our operations leave a net-positive footprint.
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-surface-alt py-24 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-24">
          {initiatives.map((init, index) => {
            const Icon = init.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={init.id}
                id={init.id}
                className={`flex flex-col lg:flex-row gap-12 items-center scroll-mt-24 ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Visual card representer with actual photo */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-1/2 aspect-video border border-border-custom/40 p-4 bg-surface rounded-sm relative shrink-0 group overflow-hidden shadow-sm"
                >
                  <div
                    className="absolute inset-4 bg-cover bg-center rounded-sm bg-slate-900 transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${init.imageUrl})` }}
                  />
                  <div className="absolute inset-4 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-grow space-y-4"
                >
                  <div className="flex items-center space-x-3 text-accent">
                    <Icon className="h-5 w-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Milestone {index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary font-accent">{init.title}</h3>
                  <div className="w-12 h-0.5 bg-accent" />
                  <p className="text-text-secondary leading-relaxed text-base">{init.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA section */}
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
