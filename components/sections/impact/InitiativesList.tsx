"use client";

import { Recycle, Landmark, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { Initiative } from "@/data/impact";

interface InitiativesListProps {
  initiatives: Initiative[];
}

const iconMap = {
  Recycle: Recycle,
  Landmark: Landmark,
  Layers: Layers,
};

export default function InitiativesList({ initiatives }: InitiativesListProps) {
  return (
    <div className="flex flex-col space-y-24">
      {initiatives.map((init, index) => {
        const Icon = iconMap[init.iconName];
        const isEven = index % 2 === 0;

        return (
          <div
            key={init.id}
            id={init.id}
            className={`flex flex-col lg:flex-row gap-12 items-center scroll-mt-24 ${
              isEven ? "" : "lg:flex-row-reverse"
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
                {Icon && <Icon className="h-5 w-5" />}
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
  );
}
