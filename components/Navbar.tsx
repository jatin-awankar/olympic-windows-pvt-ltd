"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Impact", href: "/impact" },
    { name: "Contact", href: "/contact" },
  ];

  const productLinks = [
    { name: "Aluminum Windows", href: "/products/aluminum-windows" },
    { name: "Aluminum Doors", href: "/products/aluminum-doors" },
    { name: "Facades & Curtain Walls", href: "/products/facades" },
    { name: "Aluminum Fins", href: "/products/aluminum-fins" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isProductsActive = () => pathname.startsWith("/products");

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 text-text-inverse ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-white/10 shadow-md"
          : "bg-primary border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl px-6 md:px-10 h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/images/logo/logo-sm.webp"
            alt="Olympic Windows Logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="font-accent text-lg font-bold tracking-wider text-text-inverse leading-tight">
              OLYMPIC <span className="text-accent group-hover:text-accent-light transition-colors">WINDOWS</span>
            </span>
            <span className="text-[8px] uppercase tracking-[0.20em] text-text-muted">
              European Precision • Indian Scale
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-accent text-sm relative">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-2 transition-colors duration-200 hover:text-accent text-text-inverse"
              >
                <span className={active ? "text-accent font-medium" : ""}>{link.name}</span>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Products Dropdown Trigger */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
            onFocus={() => setIsProductsDropdownOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsProductsDropdownOpen(false);
              }
            }}
          >
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 focus:outline-none relative ${
                isProductsActive() || isProductsDropdownOpen
                  ? "text-accent font-medium"
                  : "text-text-inverse hover:text-accent"
              }`}
            >
              <span>Products</span>
              <motion.div
                animate={{ rotate: isProductsDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
              {isProductsActive() && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Desktop Dropdown Menu */}
            <AnimatePresence>
              {isProductsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 mt-3 w-64 bg-primary-light/98 backdrop-blur-md border border-white/10 rounded-sm shadow-xl origin-top-left z-50"
                >
                  <div className="py-2.5 px-1">
                    <Link
                      href="/products"
                      onClick={() => setIsProductsDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm rounded-sm transition-colors duration-200 ${
                        pathname === "/products"
                          ? "text-accent bg-primary/45 font-medium"
                          : "text-text-inverse hover:bg-primary/40 hover:text-accent"
                      }`}
                    >
                      All Products
                    </Link>
                    <div className="border-t border-white/5 my-1.5 mx-3" />
                    {productLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsProductsDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm rounded-sm transition-colors duration-200 ${
                          isActive(link.href)
                            ? "text-accent bg-primary/45 font-medium"
                            : "text-text-inverse hover:bg-primary/40 hover:text-accent"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white font-accent font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Nav Icons */}
        <div className="flex lg:hidden items-center space-x-4">
          <a
            href="tel:+919167394442"
            className="p-2 text-text-inverse hover:text-accent transition-colors"
            title="Call Us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-inverse hover:text-accent transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
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
                    onClick={() => setIsOpen(false)}
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
                    onClick={() => setIsOpen(false)}
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
                      onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
                  className="bg-accent hover:bg-accent-light text-white text-center font-accent font-semibold py-3.5 rounded-sm active:scale-95 transition-all shadow-md block hover:shadow-lg"
                >
                  Book Consultation
                </Link>
                <a
                  href="tel:+919167394442"
                  className="border border-white/10 hover:border-accent text-center py-3.5 rounded-sm text-text-inverse hover:text-accent font-accent font-semibold active:scale-95 transition-all block"
                >
                  Call: +91 91673 94442
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
