import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Impact & CSR", href: "/impact" },
  { name: "Contact Us", href: "/contact" },
];

const productLinks = [
  { name: "Aluminum Windows", href: "/products/aluminum-windows" },
  { name: "Aluminum Doors", href: "/products/aluminum-doors" },
  { name: "Facades & Curtain Walls", href: "/products/facades" },
  { name: "Aluminum Fins", href: "/products/aluminum-fins" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-text-inverse border-t border-border-custom/25 font-sans" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logo/logo-sm.webp"
              alt="Olympic Windows Logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-accent text-lg font-bold tracking-wider text-text-inverse leading-tight">
                OLYMPIC <span className="text-accent group-hover:text-accent-light transition-colors">WINDOWS</span>
              </span>
              <Image
                src="/images/general/tag.webp"
                alt="Setting New Standards"
                width={100}
                height={25}
                className="object-contain opacity-60 mt-0.5"
                priority
              />
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
              aria-label="Olympic Windows on LinkedIn"
              title="LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* TODO: Replace with actual Olympic Windows Instagram profile URL */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Olympic Windows on Instagram"
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
              aria-label="Olympic Windows on Facebook"
              title="Facebook"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* TODO: Replace with actual Olympic Windows YouTube channel URL */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Olympic Windows on YouTube"
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
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent transition-colors duration-150">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h3 className="font-accent font-semibold text-sm uppercase tracking-wider text-accent mb-5">
            Products
          </h3>
          <ul className="space-y-3 text-sm text-text-muted font-accent">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent transition-colors duration-150">{link.name}</Link>
              </li>
            ))}
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
            <a href="tel:+919167394442" className="hover:text-accent transition-colors duration-150">+91 91673 94442</a>
          </div>
          <div className="flex items-center space-x-3 text-sm text-text-muted">
            <Mail className="h-4 w-4 text-accent shrink-0" />
            <a href="mailto:info@olympicwindows.in" className="hover:text-accent transition-colors duration-150">info@olympicwindows.in</a>
          </div>
        </div>

      </div>

      {/* Bottom Legal Panel */}
      <div className="border-t border-border-custom/10 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 flex flex-col md:flex-row items-center justify-between text-xs text-text-muted space-y-4 md:space-y-0">
          <p>© {currentYear} Olympic Windows Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 font-accent">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent transition-colors duration-150">{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
