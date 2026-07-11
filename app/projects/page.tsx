"use client";

import Link from "next/link";
import { ArrowRight, Building2, Layout, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsIndex() {
  const projects = [
    {
      slug: "casa-rio",
      name: "Casa Rio",
      developer: "Lodha Group",
      desc: "Delivered 175 towers, encompassing 70,000+ units and 92,000 sqm of premium aluminum sliding and casement profiles.",
      towers: "175 Towers",
      sqm: "92,000 sqm",
      units: "70,000+ Units",
      imageUrl: "/images/projects/casa-rio.webp",
    },
    {
      slug: "palava-city",
      name: "Palava City",
      developer: "Lodha Group",
      desc: "Completed 92 towers (18 stories each), covering 82,000 units and 128,000 sqm of heavy-duty fenestration profiles designed to handle high rain pressure.",
      towers: "92 Towers",
      sqm: "128,000 sqm",
      units: "82,000+ Units",
      imageUrl: "/images/projects/palava-city.webp",
    },
    {
      slug: "lodha-amara",
      name: "Lodha Amara",
      developer: "Lodha Group",
      desc: "Delivered 17 towers (30 stories each) with 17,500 units and 48,000 sqm of thermal break window configurations, including ongoing developments.",
      towers: "17 Towers",
      sqm: "48,000 sqm",
      units: "17,500+ Units",
      imageUrl: "/images/projects/lodha-amara.webp",
    },
    {
      slug: "lodha-woods",
      name: "Lodha Woods, Kandivali",
      developer: "Lodha Group",
      desc: "Delivered premium window installations across 3 towers (22 & 38 stories, 2,000 units), started in May 2024. 100% completed.",
      towers: "3 Towers",
      sqm: "18,500 sqm",
      units: "2,000 Units",
      imageUrl: "/images/projects/lodha-woods.webp",
    },
    {
      slug: "lodha-upper-thane",
      name: "Lodha Upper Thane, Anjur",
      developer: "Lodha Group",
      desc: "Completed 22 towers (19 stories, 15,500 units) started in Oct 2018. Features 8 towers currently in progress and 3 towers upcoming.",
      towers: "33 Towers total",
      sqm: "112,000 sqm",
      units: "15,500 Units",
      imageUrl: "/images/projects/lodha-upper-thane.webp",
    },
    {
      slug: "lodha-premier",
      name: "Lodha Premier, Dombivli",
      developer: "Lodha Group",
      desc: "Completed 10 towers (23 stories, 5,500 units, 15,000 sqm) from Jan 2022. Active phase includes 4 towers in progress and 4 towers upcoming.",
      towers: "18 Towers total",
      sqm: "15,000 sqm",
      units: "5,500 Units",
      imageUrl: "/images/projects/lodha-premier.webp",
    },
    {
      slug: "lodha-bella-vita",
      name: "Lodha Bella Vita",
      developer: "Lodha Group",
      desc: "Completed 2 towers (27 stories, completed July 2024) started April 2023. Current phases include 2 towers in progress and 4 towers upcoming.",
      towers: "8 Towers total",
      sqm: "24,000 sqm",
      units: "1,200+ Units",
      imageUrl: "/images/projects/lodha-bella-vita.webp",
    },
    {
      slug: "lodha-panache",
      name: "Lodha Panache, Hinjewadi",
      developer: "Lodha Group",
      desc: "Newest luxury tower project in Pune. Construction scope features 1 tower currently in progress and 5 towers upcoming.",
      towers: "6 Towers total",
      sqm: "19,000 sqm",
      units: "1,800+ Units",
      imageUrl: "/images/projects/lodha-panache.webp",
    },
    {
      slug: "lodha-giardino",
      name: "Lodha Giardino, Kharadi",
      developer: "Lodha Group",
      desc: "Upcoming luxury residences in Kharadi, Pune. Pioneer development scheduled for 2 towers (27 stories).",
      towers: "2 Towers",
      sqm: "12,000 sqm",
      units: "800+ Units",
      imageUrl: "/images/projects/lodha-giardino.webp",
    },
    {
      slug: "lodha-iris",
      name: "Lodha Iris",
      developer: "Lodha Group",
      desc: "Upcoming luxury segment project inside Lodha Upper Thane township featuring 2 premium residential towers.",
      towers: "2 Towers",
      sqm: "8,500 sqm",
      units: "600+ Units",
      imageUrl: "/images/projects/lodha-iris.webp",
    },
  ];

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">

      {/* Page Header */}
      <section className="bg-primary text-text-inverse py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.95) 30%, rgba(10, 17, 34, 0.6) 100%), url('/images/headers/projects.webp')`
          }}
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-4 z-10">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Deliveries at Scale
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Projects</h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Uncompromised quality delivered across India's largest masterplanned townships.
          </p>
        </div>
      </section>

      {/* Main List */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-12">

          <div className="grid grid-cols-1 gap-12">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border-custom/40 bg-surface-alt/45 p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-8 rounded-sm hover:shadow-card hover:border-accent/35 transition-all duration-300 group"
              >
                {/* Visual Image Block */}
                <div className="w-full lg:w-[280px] h-[200px] bg-slate-900 rounded-sm overflow-hidden relative shrink-0 border border-border-custom/30">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${proj.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Center: Summary & Developer */}
                <div className="flex-grow space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] uppercase tracking-wider text-accent font-bold font-accent border border-accent/25 px-2 py-0.5 rounded-sm">
                      Developer: {proj.developer}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary font-accent group-hover:text-accent transition-colors">
                    {proj.name}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">{proj.desc}</p>
                  <div className="pt-2">
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="bg-accent hover:bg-accent-light text-white font-accent font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all duration-200 inline-flex items-center space-x-2 active:scale-95 transition-transform shadow-sm"
                    >
                      <span>View Case Study Detail</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Stats Counter Box (3 grid elements) */}
                <div className="lg:w-72 grid grid-cols-3 lg:grid-cols-1 gap-4 bg-surface border border-border-custom/30 p-6 rounded-sm shrink-0 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-accent shrink-0" />
                    <div>
                      <p className="text-[10px] text-text-secondary uppercase font-bold">Scale</p>
                      <p className="font-accent text-sm font-bold text-primary mt-0.5">{proj.towers}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Layout className="h-5 w-5 text-accent shrink-0" />
                    <div>
                      <p className="text-[10px] text-text-secondary uppercase font-bold">Quantity</p>
                      <p className="font-accent text-sm font-bold text-primary mt-0.5">{proj.units}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Landmark className="h-5 w-5 text-accent shrink-0" />
                    <div>
                      <p className="text-[10px] text-text-secondary uppercase font-bold">Volume</p>
                      <p className="font-accent text-sm font-bold text-primary mt-0.5">{proj.sqm}</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA section */}
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
