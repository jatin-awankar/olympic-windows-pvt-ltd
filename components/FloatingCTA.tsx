"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingButtonProps {
  href: string;
  icon: LucideIcon;
  iconClassName: string;
  label: string;
  tooltipClassName: string;
  buttonClassName: string;
  ringClassName: string;
  delay: number;
  ariaLabel: string;
  external?: boolean;
}

function FloatingButton({
  href,
  icon: Icon,
  iconClassName,
  label,
  tooltipClassName,
  buttonClassName,
  ringClassName,
  delay,
  ariaLabel,
  external = false,
}: FloatingButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-14 mr-2 text-xs font-accent font-semibold tracking-wider uppercase px-3 py-1.5 shadow-md whitespace-nowrap ${tooltipClassName}`}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary ${buttonClassName} ${ringClassName}`}
        aria-label={ariaLabel}
        title={label}
      >
        <Icon className={iconClassName} />
      </motion.a>
    </motion.div>
  );
}

export default function FloatingCTA() {
  const [mounted, setMounted] = useState(false);

  const whatsappNumber = "919167394442";
  const phoneNumber = "+919167394442";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
      <FloatingButton
        href={`tel:${phoneNumber}`}
        icon={Phone}
        iconClassName="h-5 w-5"
        label="Call Sales Office"
        tooltipClassName="bg-primary text-text-inverse border border-border-custom/25"
        buttonClassName="bg-accent"
        ringClassName="focus:ring-accent"
        delay={0.1}
        ariaLabel="Call Olympic Windows sales office"
      />
      <FloatingButton
        href={`https://wa.me/${whatsappNumber}`}
        icon={MessageCircle}
        iconClassName="h-6 w-6"
        label="WhatsApp Chat"
        tooltipClassName="bg-[#25D366] text-white"
        buttonClassName="bg-[#25D366]"
        ringClassName="focus:ring-[#25D366]"
        delay={0.2}
        ariaLabel="Chat with Olympic Windows on WhatsApp"
        external
      />
    </div>
  );
}
