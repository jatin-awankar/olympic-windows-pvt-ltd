"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [mounted, setMounted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<"phone" | "whatsapp" | null>(null);

  const whatsappNumber = "919167394442"; 
  const phoneNumber = "+919167394442";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="relative flex items-center"
        onMouseEnter={() => setHoveredButton("phone")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <AnimatePresence>
          {hoveredButton === "phone" && (
            <motion.span
              key="phone-tooltip"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-14 mr-2 bg-primary text-text-inverse text-xs font-accent font-semibold tracking-wider uppercase px-3 py-1.5 shadow-md border border-border-custom/25 whitespace-nowrap"
            >
              Call Sales Office
            </motion.span>
          )}
        </AnimatePresence>
        <motion.a
          href={`tel:${phoneNumber}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          title="Call Us"
        >
          <Phone className="h-5 w-5" />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative flex items-center"
        onMouseEnter={() => setHoveredButton("whatsapp")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <AnimatePresence>
          {hoveredButton === "whatsapp" && (
            <motion.span
              key="whatsapp-tooltip"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-14 mr-2 bg-[#25D366] text-white text-xs font-accent font-semibold tracking-wider uppercase px-3 py-1.5 shadow-md whitespace-nowrap"
            >
              WhatsApp Chat
            </motion.span>
          )}
        </AnimatePresence>
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-primary"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.a>
      </motion.div>
    </div>
  );
}
