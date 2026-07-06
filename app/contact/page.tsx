"use client";

import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Page Header */}
      <section className="bg-primary text-text-inverse py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-4">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Let's Collaborate
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Get in touch with our sales, technical, or logistics teams.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
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
                href="tel:+919820000000" 
                className="flex items-center space-x-4 p-4 border border-border-custom/40 rounded-sm bg-surface-alt/25 hover:border-accent/40 hover:bg-surface-alt/50 transition-all duration-200 group"
              >
                <div className="h-10 w-10 bg-surface border border-border-custom/50 flex items-center justify-center text-accent rounded-sm shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Call Technical Sales</span>
                  <span className="text-sm font-semibold text-primary font-accent">+91 98200 00000</span>
                </div>
              </a>

              <a 
                href="mailto:info@olympicwindows.co.in" 
                className="flex items-center space-x-4 p-4 border border-border-custom/40 rounded-sm bg-surface-alt/25 hover:border-accent/40 hover:bg-surface-alt/50 transition-all duration-200 group"
              >
                <div className="h-10 w-10 bg-surface border border-border-custom/50 flex items-center justify-center text-accent rounded-sm shrink-0 transition-colors group-hover:bg-accent group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Email Inquiry</span>
                  <span className="text-sm font-semibold text-primary font-accent">info@olympicwindows.co.in</span>
                </div>
              </a>

              <a 
                href="https://wa.me/919820000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 p-4 border border-border-custom/40 rounded-sm bg-surface-alt/25 hover:border-accent/40 hover:bg-surface-alt/50 transition-all duration-200 group"
              >
                <div className="h-10 w-10 bg-surface border border-border-custom/50 flex items-center justify-center text-accent rounded-sm shrink-0 transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Instant Chat</span>
                  <span className="text-sm font-semibold text-primary font-accent flex items-center space-x-1">
                    <span>Chat on WhatsApp</span>
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
                  <span className="text-[10px] uppercase tracking-wider font-bold font-accent">India Factory & HQ</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  <strong>Olympic Windows HQ</strong><br />
                  F11, 12 Balaji Plaza, Khoni - Taloja Bypass Road, Usatane, Maharashtra
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-accent">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider font-bold font-accent">London Office</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  <strong>Olympic Windows UK</strong><br />
                  UNIT 3A, Northgate Business Centre, Collier Row, Romford, London, UK
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>

      {/* Map Segment */}
      <section className="bg-surface-alt py-16 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col items-center space-y-8">
          <div className="space-y-2 text-center">
            <h3 className="font-accent font-bold text-2xl text-primary">Our Locations</h3>
            <p className="text-xs text-text-secondary max-w-lg mx-auto leading-relaxed">
              With a factory in India and an office in London, we're strategically positioned to serve our clients efficiently and effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* India Factory Map */}
            <div className="flex flex-col space-y-4">
              <div className="text-center space-y-1">
                <h4 className="font-accent font-bold text-lg text-primary">India Factory</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  F11, 12 Balaji Plaza, Khoni - Taloja Bypass Road, Usatane, Maharashtra.
                </p>
              </div>
              <div className="w-full aspect-video border border-border-custom/40 rounded-sm overflow-hidden bg-slate-100 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3387816047157!2d73.1091599!3d19.0047394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e722a27ffb2b%3A0xe54ef84c7e6c98aa!2sBalaji%20Plaza%2C%20Khoni%20-%20Taloja%20Bypass%20Rd%2C%20Usatane%2C%20Maharashtra%20421306!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Olympic Windows India Factory & HQ Location"
                />
              </div>
            </div>

            {/* London Office Map */}
            <div className="flex flex-col space-y-4">
              <div className="text-center space-y-1">
                <h4 className="font-accent font-bold text-lg text-primary">London Office</h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  UNIT 3A, Northgate Business Centre, Collier Row, Romford, London, UK
                </p>
              </div>
              <div className="w-full aspect-video border border-border-custom/40 rounded-sm overflow-hidden bg-slate-100 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.0!2d0.1847!3d51.5834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sCollier%20Row%2C%20Romford!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Olympic Windows London Office Location"
                />
              </div>
            </div>
          </div>

          <p className="text-[10px] text-text-muted font-accent uppercase tracking-wider">
            Visits to our manufacturing facilities are strictly by appointment only.
          </p>
        </div>
      </section>
    </div>
  );
}
