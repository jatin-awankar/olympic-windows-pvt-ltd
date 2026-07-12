export interface ProductSpecSummary {
  slug: string;
  title: string;
  desc: string;
  specs: string[];
  imageUrl: string;
}

export interface ProductDetail {
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
  specs: Record<string, string>;
  finishes: string[];
  applications: string[];
  imageUrl: string;
}

export const productList: ProductSpecSummary[] = [
  {
    slug: "aluminum-windows",
    title: "Aluminum Windows",
    desc: "Precision engineered casement, sliding, and tilt-and-turn window systems. Specially designed to manage high wind loads and heavy rainfall while maintaining slim sights.",
    specs: [
      "Profile: Thermal Break / Non-Thermal Break",
      "Glass: Double Glazed, Soundproof, Tinted",
      "Hardware: Multi-Point Locking Systems",
      "Monsoon Rating: Wind load up to 2.5 kPa"
    ],
    imageUrl: "/images/products/aluminum-windows.webp",
  },
  {
    slug: "aluminum-doors",
    title: "Aluminum Doors",
    desc: "High-security sliding, folding, and swing doors built for expansive high-rise balconies and heavy commercial traffic. Offers silent, smooth operations.",
    specs: [
      "Profile: Heavy-Duty Reinforced Aluminum",
      "Glass: Tempered / Laminated Safety Glass",
      "Operations: Lift-and-slide, bi-fold, swing",
      "Monsoon Rating: Fully weather-sealed gaskets"
    ],
    imageUrl: "/images/products/aluminum-doors.webp",
  },
  {
    slug: "facades",
    title: "Facades & Curtain Walls",
    desc: "Structural glazed facade and curtain walling systems providing high-thermal insulation and clean structural continuity for luxury commercial and residential facades.",
    specs: [
      "System: Semi-unitized / Unitized Facades",
      "Glass: Low-E, Thermal insulated structural double glazing",
      "Materials: High-grade 6063-T6 alloy extrusion",
      "Monsoon Rating: Fully wind Rig tested"
    ],
    imageUrl: "/images/products/facades.webp",
  },
  {
    slug: "aluminum-fins",
    title: "Aluminum Architectural Fins",
    desc: "Exterior solar shading louvers and architectural fin profiles that reduce solar heat ingress, optimize daylight access, and add modern shadow contours to building facades.",
    specs: [
      "System: Fixed or Motorized pivoting louvers",
      "Contours: Aerofoil, rectangular, or custom blades",
      "Materials: Structural grade 6063-T5/T6 alloys",
      "Heat Control: Reduces HVAC loading, solar protection"
    ],
    imageUrl: "/images/products/aluminum-fins.webp",
  }
];

export const productRegistry: Record<string, ProductDetail> = {
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
    imageUrl: "/images/products/aluminum-windows.webp",
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
    imageUrl: "/images/products/aluminum-doors.webp",
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
    imageUrl: "/images/products/facades.webp",
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
    imageUrl: "/images/products/aluminum-fins.webp",
  },
};
