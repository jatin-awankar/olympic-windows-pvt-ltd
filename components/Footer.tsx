import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-text-inverse border-t border-border-custom/25 font-sans">
      {/* Top Footer Panel */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo/logo-sm.png"
              alt="Olympic Windows Logo"
              className="h-9 w-9 object-contain"
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
          <p className="text-sm text-text-muted leading-relaxed max-w-xs">
            Precision engineering and premium materials combined to create high-performance aluminum window and door systems.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.linkedin.com/company/olympic-windows-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              title="LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              title="Instagram"
            >
              <svg className="h-5 w-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/olympicwindows.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              title="Facebook"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              title="YouTube"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.387.51a3.003 3.003 0 0 0-2.11 2.108C0 8.025 0 12 0 12s0 3.975.503 5.837a3.003 3.003 0 0 0 2.11 2.108c1.862.51 9.387.51 9.387.51s7.525 0 9.387-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.975 24 12 24 12s0-3.975-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="font-accent font-semibold text-sm uppercase tracking-wider text-accent mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-text-muted font-accent">
            <li>
              <Link href="/about" className="hover:text-accent transition-colors duration-150">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent transition-colors duration-150">Services</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-accent transition-colors duration-150">Projects</Link>
            </li>
            <li>
              <Link href="/impact" className="hover:text-accent transition-colors duration-150">Impact & CSR</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors duration-150">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h3 className="font-accent font-semibold text-sm uppercase tracking-wider text-accent mb-5">
            Products
          </h3>
          <ul className="space-y-3 text-sm text-text-muted font-accent">
            <li>
              <Link href="/products/aluminum-windows" className="hover:text-accent transition-colors duration-150">Aluminum Windows</Link>
            </li>
            <li>
              <Link href="/products/aluminum-doors" className="hover:text-accent transition-colors duration-150">Aluminum Doors</Link>
            </li>
            <li>
              <Link href="/products/facades" className="hover:text-accent transition-colors duration-150">Facades & Curtain Walls</Link>
            </li>
            <li>
              <Link href="/products/aluminum-fins" className="hover:text-accent transition-colors duration-150">Aluminum Fins</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-4 font-accent">
          <h3 className="font-semibold text-sm uppercase tracking-wider text-accent mb-1">
            Contact Us
          </h3>
          <div className="flex items-start space-x-3 text-sm text-text-muted">
            <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-text-inverse">India Factory & HQ</p>
              <p className="text-xs mt-1 leading-relaxed">
                F11, 12 Balaji Plaza, Khoni - Taloja Bypass Road, Usatane, Maharashtra
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 text-sm text-text-muted">
            <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-text-inverse">London Office</p>
              <p className="text-xs mt-1 leading-relaxed">
                UNIT 3A, Northgate Business Centre, Collier Row, Ramford, London, UK
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-sm text-text-muted">
            <Phone className="h-4 w-4 text-accent shrink-0" />
            <a href="tel:+919820000000" className="hover:text-accent transition-colors duration-150">+91 98200 00000</a>
          </div>
          <div className="flex items-center space-x-3 text-sm text-text-muted">
            <Mail className="h-4 w-4 text-accent shrink-0" />
            <a href="mailto:info@olympicwindows.co.in" className="hover:text-accent transition-colors duration-150">info@olympicwindows.co.in</a>
          </div>
        </div>

      </div>

      {/* Bottom Legal Panel */}
      <div className="border-t border-border-custom/10 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 flex flex-col md:flex-row items-center justify-between text-xs text-text-muted space-y-4 md:space-y-0">
          <p>© {currentYear} Olympic Windows Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 font-accent">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors duration-150">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors duration-150">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-accent transition-colors duration-150">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
