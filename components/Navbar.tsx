"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, productLinks } from "@/data/navigation";
import { contactConfig } from "@/data/contact";
import MobileDrawer from "@/components/MobileDrawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 text-text-inverse ${scrolled
        ? "bg-primary/95 backdrop-blur-md border-white/10 shadow-md"
        : "bg-primary border-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl px-6 md:px-10 h-20 items-center justify-between">
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
            <Image
              src="/images/general/tag.webp"
              alt="Setting New Standards"
              width={100}
              height={16}
              className="object-contain opacity-60 mt-0.5"
              priority
            />
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
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 focus:outline-none relative ${isProductsActive() || isProductsDropdownOpen
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
                      className={`block px-4 py-2 text-sm rounded-sm transition-colors duration-200 ${pathname === "/products"
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
                        className={`block px-4 py-2 text-sm rounded-sm transition-colors duration-200 ${isActive(link.href)
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
            href={contactConfig.phone.link}
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
          <MobileDrawer
            navLinks={navLinks}
            productLinks={productLinks}
            pathname={pathname}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
