"use client";

import Link from "next/link";
import { ArrowRight, Building2, Layout, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectData } from "@/data/projects";

interface ProjectsListProps {
  projects: ProjectData[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
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
  );
}
