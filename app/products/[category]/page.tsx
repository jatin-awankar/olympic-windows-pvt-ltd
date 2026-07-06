import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Download, Info } from "lucide-react";

interface ProductData {
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
  specs: Record<string, string>;
  finishes: string[];
  applications: string[];
  imageUrl: string;
}

const productRegistry: Record<string, ProductData> = {
  "aluminum-windows": {
    title: "Aluminum Windows",
    desc: "Precision engineered casement, sliding, and tilt-and-turn window systems.",
    longDesc: "Our premium aluminum windows are built to European standards, combining high-grade 6063-T6 aluminum alloys with advanced thermal breaks. Designed specifically for high-rise residential towers, these window systems provide exceptional structural stability, wind resistance, and sound proofing to create quiet, energy-efficient living environments.",
    features: [
      "Thermal Break technology for enhanced energy efficiency & cooling savings.",
      "Multi-point locking systems for maximum home security.",
      "Dual gasket compression sealing that isolates high wind pressure and coastal monsoons.",
      "Acoustic damping inserts that reduce outdoor noise levels by up to 40 dB.",
      "Slim-line sightlines to maximize architectural view field and daylight access.",
    ],
    specs: {
      "Alloy Standard": "6063-T6 Structural Grade Aluminum",
      "Profile Depth": "60mm to 120mm sliding channels",
      "Max Glazing Depth": "Up to 32mm double-insulated glass",
      "Air Permeability": "Class 4 (EN 12207)",
      "Water Tightness": "Class 9A (EN 12208)",
      "Wind Load Resistance": "Up to 3.0 kPa (EN 12210)",
    },
    finishes: ["Anodized Silver / Bronze", "Qualicoat Powder Coated (any RAL color)", "Wood-grain textured sublimation"],
    applications: ["Luxury High-Rise Residential", "Premium Coastal Villas", "Hotels & Commercial Offices"],
    imageUrl: "/images/products/aluminum-windows.jpg",
  },
  "aluminum-doors": {
    title: "Aluminum Doors",
    desc: "High-security sliding, folding, and swing doors built for expansive balconies.",
    longDesc: "Olympic aluminum doors offer structural strength and smooth, silent operational movement. Whether you choose slide-and-fold (bi-fold) doors to open up balcony horizons, or robust lift-and-slide doors for massive glass panels, our heavy-duty profiles deliver absolute security, weather sealing, and modern architectural transitions.",
    features: [
      "Heavy-duty rollers supporting glass panels of up to 400kg each.",
      "Flush threshold options for seamless interior-to-exterior transitions.",
      "Multi-point lock mechanics with anti-pry locking points.",
      "High weather sealing using EPDM double gaskets.",
      "Available in motorized sliding systems for home automation integrations.",
    ],
    specs: {
      "Alloy Standard": "6063-T6 Structural Grade Aluminum",
      "Profile Depth": "70mm to 150mm frame profiles",
      "Glazing Thickness": "24mm to 36mm double glazing",
      "Operating force": "Class 1 (EN 13115)",
      "Resistance to repeated opening": "200,000 cycles (EN 1191)",
      "Wind Load Resistance": "Up to 2.5 kPa (EN 12210)",
    },
    finishes: ["Anodized Silver / Champagne / Black", "Qualicoat Powder Coated (any RAL color)", "Sublimated Wood Finish"],
    applications: ["Luxury Balconies & Penthouses", "Retail Stores & Frontages", "Hotels & Premium Lodges"],
    imageUrl: "/images/products/aluminum-doors.jpg",
  },
  "facades": {
    title: "Facades & Curtain Walls",
    desc: "High-performance glass facades engineered for extreme wind resistance.",
    longDesc: "Our curtain wall and structural glazed facade systems provide modern high-rise building skins with clean aesthetic continuity, solar protection, and structural integrity. Engineered to handle seismic movements and high-coastal wind pressures, they provide thermal barriers and maximum architectural visibility.",
    features: [
      "Available in unitized (pre-fabricated shop assembly) and semi-unitized systems.",
      "Structural glazing profiles with high-load bracket anchors.",
      "Integrated solar control double-glazed glass selections.",
      "Thermal expansion joints that handle high seismic drift values.",
      "Fully compatible with automated windows and ventilation vents.",
    ],
    specs: {
      "Alloy Standard": "6063-T6 structural alloy extrusions",
      "System Depth": "100mm to 200mm mullion depths",
      "Air Permeability": "Pass (ASTM E283)",
      "Water Penetration": "No leakage at 500 Pa (ASTM E331)",
      "Structural performance": "Wind design load up to 4.5 kPa (ASTM E330)",
      "U-Value": "Down to 1.6 W/m²K (depending on glazing)",
    },
    finishes: ["Qualicoat Powder Coated", "Anodized Dark Bronze / Charcoal Black", "PVDF Coated finishes"],
    applications: ["Commercial Tall Office Towers", "High-Rise Residential Skins", "Retail Glass Atriums & Vaults"],
    imageUrl: "/images/products/facades.png",
  },
  "aluminum-fins": {
    title: "Aluminum Architectural Fins",
    desc: "Exterior louvers and architectural fins that reduce solar heat ingress.",
    longDesc: "Aluminum architectural fins represent the junction of environmental engineering and visual design. Installed as exterior screen systems, they shade glazing from direct solar heat, lower building HVAC energy consumption, and add architectural texture and shadow depth to external walls.",
    features: [
      "Aerofoil, rectangular, or custom architectural blade contours.",
      "Can be installed vertically, horizontally, or as floating sun-screens.",
      "Available in fixed brackets or motorized pivoting layouts for active tracking.",
      "Heavy-grade alloys designed to withstand high gust winds without vibrations.",
      "Improves green building points and visual privacy values.",
    ],
    specs: {
      "Alloy Standard": "6063-T5 / T6 Aluminum Alloy",
      "Blade Widths": "100mm to 450mm single section profiles",
      "Finishes Available": "Qualicoat Powder Coated, PVDF, Anodized",
      "Control Systems": "Manual, timed sensors, or automated BMS triggers",
      "Span Capacity": "Up to 4.5m between structural mounts",
    },
    finishes: ["Qualicoat Premium Powder Coated", "Anodized Silver / Dark Bronze", "PVDF 3-Coat finishes"],
    applications: ["Office Complex Sun Screening", "Institutional Buildings", "Residential Window Shading screens"],
    imageUrl: "/images/products/aluminum-fins.jpg",
  },
};

export function generateStaticParams() {
  return [
    { category: "aluminum-windows" },
    { category: "aluminum-doors" },
    { category: "facades" },
    { category: "aluminum-fins" },
  ];
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productRegistry[resolvedParams.category];
  return {
    title: `${product?.title || "Product"}`,
    description: product?.desc || "Premium aluminum fenestration products.",
  };
}

export default async function ProductCategoryDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const product = productRegistry[resolvedParams.category];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full font-sans">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://olympicwindows.in"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://olympicwindows.in/products"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": product.title,
                    "item": `https://olympicwindows.in/products/${resolvedParams.category}`
                  }
                ]
              },
              {
                "@type": "Product",
                "name": product.title,
                "image": `https://olympicwindows.in${product.imageUrl}`,
                "description": product.desc,
                "category": "Aluminum Fenestration System",
                "brand": {
                  "@type": "Brand",
                  "name": "Olympic Windows"
                },
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "INR",
                  "lowPrice": "5000",
                  "highPrice": "25000",
                  "offerCount": "10",
                  "url": `https://olympicwindows.in/products/${resolvedParams.category}`
                }
              }
            ]
          })
        }}
      />

      {/* Back button & Header Banner */}
      <section className="bg-primary text-text-inverse py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.95) 30%, rgba(10, 17, 34, 0.6) 100%), url(${product.imageUrl})`
          }}
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-6 z-10">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent-light text-xs font-accent font-bold uppercase transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Products</span>
          </Link>
          <div className="flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              System Specification
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{product.title}</h1>
            <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
              {product.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Specifications Content */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Overview and Features */}
          <div className="lg:col-span-7 space-y-8">

            {/* Styled Image Preview */}
            <div className="aspect-video w-full relative bg-slate-900 border border-border-custom/40 rounded-sm overflow-hidden shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold text-primary font-accent">System Overview</h2>
              <div className="w-12 h-0.5 bg-accent" />
              <p className="text-text-secondary leading-relaxed text-base">{product.longDesc}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary font-accent">Key Performance Features</h3>
              <div className="flex flex-col space-y-3">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm text-text-secondary">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Finishes & Applications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-custom/20">
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-accent font-bold font-accent">
                  Available Finishes
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary">
                  {product.finishes.map((fin) => (
                    <li key={fin} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      <span>{fin}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-accent font-bold font-accent">
                  Recommended Applications
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-border-custom/40 rounded-sm bg-surface-alt overflow-hidden shadow-sm">
              <div className="bg-primary text-text-inverse px-6 py-4 flex items-center space-x-2 border-b border-border-custom/20">
                <Info className="h-5 w-5 text-accent" />
                <span className="font-accent font-bold text-sm uppercase tracking-wider">Technical Specifications</span>
              </div>
              <div className="divide-y divide-border-custom/30 text-xs text-text-secondary font-accent">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4">
                    <span className="font-medium text-primary">{key}</span>
                    <span className="text-right font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Drawing Preview / Catalog Box */}
            <div className="border border-border-custom/40 p-6 bg-surface-alt rounded-sm flex flex-col justify-between h-[180px] shadow-sm">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-accent font-bold font-accent">Product Documentation</h4>
                <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                  Download profile blueprints, acoustic charts, and certification tests.
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <a
                  href="/contact"
                  className="w-full border border-accent hover:bg-accent text-accent hover:text-white py-3.5 rounded-sm text-xs font-accent font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center space-x-2 active:scale-95 transition-transform"
                >
                  <Download className="h-4 w-4" />
                  <span>Request Full Catalog PDF</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary text-text-inverse py-16">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Discuss Profile Customizations</h2>
          <p className="text-text-muted max-w-md text-sm leading-relaxed">
            Need customized glazing depths or specific thermal barriers for your site?
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-colors text-sm hover:shadow-lg active:scale-95 transition-transform"
          >
            Contact Design Engineering
          </Link>
        </div>
      </section>
    </div>
  );
}
