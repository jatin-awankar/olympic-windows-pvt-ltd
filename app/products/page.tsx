"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductsIndex() {
  const products = [
    {
      slug: "aluminum-windows",
      title: "Aluminum Windows",
      desc: "Precision engineered casement, sliding, and tilt-and-turn window systems. Specially designed to manage high wind loads and heavy rainfall while maintaining slim sights.",
      specs: ["Profile: Thermal Break / Non-Thermal Break", "Glass: Double Glazed, Soundproof, Tinted", "Hardware: Multi-Point Locking Systems", "Monsoon Rating: Wind load up to 2.5 kPa"],
      imageUrl: "/images/products/aluminum-windows.jpg",
    },
    {
      slug: "aluminum-doors",
      title: "Aluminum Doors",
      desc: "High-security sliding, folding, and swing doors built for expansive high-rise balconies and heavy commercial traffic. Offers silent, smooth operations.",
      specs: ["Profile: Heavy-Duty Reinforced Aluminum", "Glass: Tempered / Laminated Safety Glass", "Operations: Lift-and-slide, bi-fold, swing", "Monsoon Rating: Fully weather-sealed gaskets"],
      imageUrl: "/images/products/aluminum-doors.jpg",
    },
    {
      slug: "facades",
      title: "Facades & Curtain Walls",
      desc: "Structural glazed facade and curtain walling systems providing high-thermal insulation and clean structural continuity for luxury commercial and residential facades.",
      specs: ["System: Semi-unitized / Unitized Facades", "Glass: Low-E, Thermal insulated structural double glazing", "Materials: High-grade 6063-T6 alloy extrusion", "Monsoon Rating: Fully wind Rig tested"],
      imageUrl: "/images/products/facades.png",
    },
    {
      slug: "aluminum-fins",
      title: "Aluminum Architectural Fins",
      desc: "Exterior louvers and architectural fins that reduce solar heat ingress, lower cooling requirements, and introduce modern geometric styling to facade contours.",
      specs: ["Profile: Customizable aerofoil / rectangular shapes", "Finishes: PVDF coated, powder coated, anodized", "Application: Fixed / motorized adjustments", "Benefit: Solar shading & energy reduction"],
      imageUrl: "/images/products/aluminum-fins.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">

      {/* Page Header */}
      <section className="bg-primary text-text-inverse py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-4">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Engineering Precision
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Products</h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            European-quality fenestration profiles designed to perform at scale.
          </p>
        </div>
      </section>

      {/* Main List */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-16">
          {products.map((prod, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={prod.slug}
                className={`flex flex-col lg:flex-row gap-12 items-center border-b border-border-custom/30 pb-16 last:border-b-0 last:pb-0 last:border-none ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Visual Image with zoom hover effect */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-[420px] h-[300px] bg-slate-900 rounded-sm overflow-hidden relative shrink-0 border border-border-custom/40 group shadow-sm"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${prod.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-grow space-y-5"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">{prod.title}</h2>
                  <p className="text-text-secondary leading-relaxed text-base">{prod.desc}</p>

                  {/* Technical Specifications preview */}
                  <div className="bg-surface-alt p-6 border border-border-custom/40 rounded-sm shadow-inner">
                    <h4 className="text-xs uppercase tracking-wider text-accent font-bold font-accent mb-3">
                      Technical Overview
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-secondary">
                      {prod.specs.map((spec) => (
                        <li key={spec} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent shrink-0 rounded-full" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="bg-accent hover:bg-accent-light text-white font-accent font-semibold text-sm px-8 py-4 rounded-sm transition-all duration-200 inline-flex items-center space-x-2 shadow-md active:scale-95 transition-transform"
                    >
                      <span>Explore Product Specs</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary text-text-inverse py-16">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Need CAD Drawings or Product Brochures?</h2>
          <p className="text-text-muted max-w-md text-sm leading-relaxed">
            We provide architects and builders with complete engineering specifications and performance reports.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-all duration-200 active:scale-95 shadow-md inline-flex items-center space-x-2"
          >
            <span>Request Catalog Downloads</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
