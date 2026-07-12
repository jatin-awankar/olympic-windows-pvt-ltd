"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { products } from "@/data/home";

export default function ProductsSection() {
  return (
    <Section variant="surface-alt" hasBorder>
      <Container className="flex flex-col space-y-16">
        <div className="text-center flex flex-col space-y-3">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Our Products
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-2" />
          <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed mt-2">
            We provide a huge variety of windows and door frames according to our client’s design and order as per to their demand. Our combine style of sliding with fixed and openable with fixed windows ensuring desirable performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod, i) => (
            <motion.div
              key={prod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-surface border border-border-custom/40 flex flex-col justify-between p-6 hover:shadow-card hover:border-accent/40 transition-all duration-300 rounded-sm group"
            >
              <div className="space-y-4">
                <div className="h-44 w-full bg-slate-900 rounded-sm overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${prod.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="text-lg font-bold text-primary font-accent group-hover:text-accent transition-colors">
                  {prod.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {prod.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-border-custom/20 mt-6 flex items-center justify-between">
                <Link
                  href={prod.href}
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent-light text-sm font-semibold transition-colors"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center pt-4">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 border border-accent hover:bg-accent text-accent hover:text-white px-8 py-3.5 font-accent font-semibold text-sm rounded-sm transition-all duration-200"
          >
            <span>Explore All Products</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
