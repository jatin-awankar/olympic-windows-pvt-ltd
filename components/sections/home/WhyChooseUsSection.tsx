"use client";

import { Factory, Truck, Handshake, PencilRuler, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { whyChooseUs } from "@/data/home";

const iconMap = {
  Factory,
  Truck,
  Handshake,
  PencilRuler,
  ShieldCheck,
  Leaf,
};

export default function WhyChooseUsSection() {
  return (
    <Section variant="primary">
      <Container className="flex flex-col space-y-16">
        <div className="text-center flex flex-col space-y-3">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Proven Differentiators
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.iconName];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-primary-light border border-border-custom/10 p-8 flex flex-col space-y-4 hover:border-accent/30 transition-colors group"
              >
                <div className="h-12 w-12 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold font-accent text-text-inverse group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
