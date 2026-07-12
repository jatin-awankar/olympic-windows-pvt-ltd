"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NavLink } from "@/data/navigation";
import { contactConfig } from "@/data/contact";

const menuContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
} as const;

const menuItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 350, damping: 25 } },
} as const;

interface MobileDrawerProps {
  navLinks: NavLink[];
  productLinks: NavLink[];
  pathname: string;
  onClose: () => void;
}

export default function MobileDrawer({ navLinks, productLinks, pathname, onClose }: MobileDrawerProps) {
  const isActive = (href: string) => pathname === href;

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
      className="lg:hidden fixed inset-x-0 bottom-0 top-20 z-40 w-full bg-primary/98 backdrop-blur-md text-text-inverse flex flex-col px-6 py-8 overflow-y-auto h-[calc(100dvh-5rem)]"
    >
      <motion.nav
        variants={menuContainerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col space-y-5 font-accent text-lg"
      >
        {navLinks.map((link) => (
          <motion.div key={link.name} variants={menuItemVariants}>
            <Link
              href={link.href}
              onClick={onClose}
              className={`transition-colors duration-200 block ${
                isActive(link.href) ? "text-accent font-semibold" : "text-text-inverse hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}

        <motion.div variants={menuItemVariants} className="border-t border-white/10 pt-4">
          <div className="font-semibold text-text-muted text-xs uppercase tracking-wider mb-3">
            Products
          </div>
          <div className="flex flex-col pl-4 space-y-3">
            <Link
              href="/products"
              onClick={onClose}
              className={`text-base block transition-colors duration-200 ${
                isActive("/products") ? "text-accent font-semibold" : "text-text-inverse hover:text-accent"
              }`}
            >
              All Products
            </Link>
            {productLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`text-base block transition-colors duration-200 ${
                  isActive(link.href) ? "text-accent font-semibold" : "text-text-inverse hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={menuItemVariants}
          className="border-t border-white/10 pt-6 flex flex-col space-y-4 mt-auto"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="bg-accent hover:bg-accent-light text-white text-center font-accent font-semibold py-3.5 rounded-sm active:scale-95 transition-all shadow-md block hover:shadow-lg"
          >
            Book Consultation
          </Link>
          <a
            href={contactConfig.phone.link}
            className="border border-white/10 hover:border-accent text-center py-3.5 rounded-sm text-text-inverse hover:text-accent font-accent font-semibold active:scale-95 transition-all block"
          >
            Call: {contactConfig.phone.display}
          </a>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
