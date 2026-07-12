export interface Initiative {
  id: string;
  iconName: "Recycle" | "Landmark" | "Layers";
  title: string;
  desc: string;
  imageUrl: string;
}

export const initiatives: Initiative[] = [
  {
    id: "recycling",
    iconName: "Recycle",
    title: "Closed-Loop Aluminum Recycling",
    desc: "Aluminum is infinitely recyclable. At our Mumbai fabrication facility, 100% of aluminum scrap, off-cuts, and metal shavings are collected, separated, and returned to smelters for re-extrusion, supporting a circular economy.",
    imageUrl: "/images/impact/recycling.webp",
  },
  {
    id: "women-empowerment",
    iconName: "Landmark",
    title: "Women Empowerment in Manufacturing",
    desc: "We actively challenge the gender gap in the heavy industrial sector. Olympic Windows runs a dedicated vocational training program to employ and empower women in manufacturing design, logistics control, and precise quality assessment roles.",
    imageUrl: "/images/impact/women-empowerment.webp",
  },
  {
    id: "optimization",
    iconName: "Layers",
    title: "Profile Scrap Optimization",
    desc: "Using advanced nesting software, we calculate optimal cutting layouts before feeding profiles to fabrication lines. This optimization has reduced our default profile scrap rate from 8% down to under 2.5%, reducing material impact.",
    imageUrl: "/images/impact/profile-scrap.webp",
  },
];
