"use client";

import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { contactConfig } from "@/data/contact";

export default function ContactDetails() {
  const { phone, email, whatsapp, indiaAddress, londonAddress } = contactConfig;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="lg:col-span-5 flex flex-col space-y-8"
    >
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">
          Reach Out Directly
        </h2>
        <div className="w-12 h-0.5 bg-accent" />
        <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
          Have drawing files, elevation sections, or layouts to share? Feel free to email them directly or submit the details.
        </p>
      </div>

      {/* Direct Channels */}
      <div className="flex flex-col space-y-4">
        <a
          href={phone.link}
          className="flex items-center space-x-4 p-4 border border-border-custom/40 rounded-sm bg-surface-alt/25 hover:border-accent/40 hover:bg-surface-alt/50 transition-all duration-200 group"
        >
          <div className="h-10 w-10 bg-surface border border-border-custom/50 flex items-center justify-center text-accent rounded-sm shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
            <Phone className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">{phone.label}</span>
            <span className="text-sm font-semibold text-primary font-accent">{phone.display}</span>
          </div>
        </a>

        <a
          href={email.link}
          className="flex items-center space-x-4 p-4 border border-border-custom/40 rounded-sm bg-surface-alt/25 hover:border-accent/40 hover:bg-surface-alt/50 transition-all duration-200 group"
        >
          <div className="h-10 w-10 bg-surface border border-border-custom/50 flex items-center justify-center text-accent rounded-sm shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
            <Mail className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">{email.label}</span>
            <span className="text-sm font-semibold text-primary font-accent">{email.display}</span>
          </div>
        </a>

        <a
          href={whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 p-4 border border-border-custom/40 rounded-sm bg-surface-alt/25 hover:border-accent/40 hover:bg-surface-alt/50 transition-all duration-200 group"
        >
          <div className="h-10 w-10 bg-surface border border-border-custom/50 flex items-center justify-center text-accent rounded-sm shrink-0 transition-colors group-hover:bg-[#25D366] group-hover:text-white">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">{whatsapp.label}</span>
            <span className="text-sm font-semibold text-primary font-accent flex items-center space-x-1">
              <span>{whatsapp.display}</span>
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </span>
          </div>
        </a>
      </div>

      {/* Address Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-custom/20">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-accent">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="text-[10px] uppercase tracking-wider font-bold font-accent">{indiaAddress.title}</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            <strong>{indiaAddress.companyName}</strong><br />
            {indiaAddress.streetAddress}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-accent">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="text-[10px] uppercase tracking-wider font-bold font-accent">{londonAddress.title}</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            <strong>{londonAddress.companyName}</strong><br />
            {londonAddress.streetAddress}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
