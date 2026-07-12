export interface ValueItem {
  iconName: "ShieldCheck" | "Target" | "Award";
  title: string;
  desc: string;
}

export interface CertificationItem {
  title: string;
  desc: string;
  src: string;
}

export interface LocationItem {
  title: string;
  desc: string;
  city: string;
  scope: string;
}

export const values: ValueItem[] = [
  {
    iconName: "ShieldCheck",
    title: "Precision Engineering",
    desc: "Every millimeter matters. We follow rigorous European standards to deliver profiles with flawless alignment, structural stability, and superior insulation.",
  },
  {
    iconName: "Target",
    title: "Scale & Timeliness",
    desc: "We match the demands of major real estate developments with a 7,500 monthly unit manufacturing capacity, backed by structured production control.",
  },
  {
    iconName: "Award",
    title: "Integrity & Trust",
    desc: "Long-term client success is our priority. Since our invitation by the Lodha Group in 2012, we build relationships on performance, quality, and support.",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "CE Conformity Mark",
    desc: "Certified compliance with European Union health, safety, and environmental protection performance standards.",
    src: "/images/certifications/cert-1.webp",
  },
  {
    title: "Qualicoat Quality Label",
    desc: "International standard assurance for high-performance architectural powder coating finishes on aluminum profiles.",
    src: "/images/certifications/cert-2.webp",
  },
  {
    title: "ISO 9001:2015",
    desc: "Global standard certification verifying strict quality management protocols throughout design and fabrication.",
    src: "/images/certifications/cert-3.webp",
  },
  {
    title: "WiWA Performance Certified",
    desc: "Rigorously audited for structural wind load, air infiltration, and water penetration resistance during severe monsoon cycles.",
    src: "/images/certifications/cert-4.webp",
  },
  {
    title: "IFT Rosenheim Tested",
    desc: "Verified performance parameters for thermal insulation (U-value) and acoustic noise isolation standards.",
    src: "/images/certifications/cert-5.webp",
  },
];

export const vision = {
  tagline: "Company Vision",
  title: "Setting the Horizon",
  quote: "To become the primary high-end fenestration choice for modern building landmarks, marrying design and structure to foster green, sustainable spaces.",
  headquarters: "Headquartered in Mumbai, India",
  internationalOffice: "International Office: London, UK"
};

export const locations: LocationItem[] = [
  {
    title: "India Factory & Headquarters",
    desc: "Equipped with automated manufacturing, precision assembly lines, and testing facilities to support massive housing and commercial developments.",
    city: "Mumbai, Maharashtra, India",
    scope: "Capacity: 7,500 Units / Month"
  },
  {
    title: "London International Office",
    desc: "Hosting design consultants, engineering advisors, and managing international supply chain standards.",
    city: "London, United Kingdom",
    scope: "Scope: International Standards & Consultation"
  }
];
