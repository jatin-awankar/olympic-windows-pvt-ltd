"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProductSpecSummary } from "@/data/products";

interface ProductsListProps {
  productList: ProductSpecSummary[];
}

export default function ProductsList({ productList }: ProductsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {productList.map((prod, i) => (
        <motion.div
          key={prod.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="border border-border-custom/40 bg-surface-alt/45 p-6 md:p-8 flex flex-col justify-between rounded-sm hover:shadow-card hover:border-accent/40 transition-all duration-300 group"
        >
          <div className="space-y-6">
            <div className="h-56 w-full bg-slate-900 rounded-sm overflow-hidden relative shrink-0 border border-border-custom/25">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-103"
                style={{ backgroundImage: `url(${prod.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-primary font-accent group-hover:text-accent transition-colors">
                {prod.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                {prod.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border-custom/20">
              {prod.specs.map((spec, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-text-secondary">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  <span className="font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-border-custom/20 flex items-center justify-between">
            <Link
              href={`/products/${prod.slug}`}
              className="bg-accent hover:bg-accent-light text-white font-accent font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all duration-200 inline-flex items-center space-x-2 active:scale-95 transition-transform shadow-sm"
            >
              <span>Explore Specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
