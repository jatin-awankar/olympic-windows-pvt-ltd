"use client";

import { MessageSquare, Settings, CheckCircle2, Hammer, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { ProcessStep } from "@/data/services";

interface ProcessTimelineProps {
  processes: ProcessStep[];
}

const iconMap = {
  MessageSquare: MessageSquare,
  Settings: Settings,
  CheckCircle2: CheckCircle2,
  Hammer: Hammer,
  Activity: Activity,
};

export default function ProcessTimeline({ processes }: ProcessTimelineProps) {
  return (
    <div className="flex flex-col space-y-8">
      {processes.map((proc, i) => {
        const Icon = iconMap[proc.iconName];
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
              {Icon && <Icon className="h-5 w-5" />}
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
  );
}
