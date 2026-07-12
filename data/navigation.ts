export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
];

export const productLinks: NavLink[] = [
  { name: "Aluminum Windows", href: "/products/aluminum-windows" },
  { name: "Aluminum Doors", href: "/products/aluminum-doors" },
  { name: "Facades & Curtain Walls", href: "/products/facades" },
  { name: "Aluminum Fins", href: "/products/aluminum-fins" },
];

export const legalLinks: NavLink[] = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];
