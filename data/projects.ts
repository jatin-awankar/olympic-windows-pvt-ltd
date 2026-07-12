export interface ProjectData {
  slug: string;
  name: string;
  developer: string;
  desc: string;
  longDesc: string;
  towers: string;
  units: string;
  sqm: string;
  year: string;
  challenges: string[];
  solutions: string[];
  imageUrl: string;
}

export type ProjectDetailData = Omit<ProjectData, "slug">;

export const projectRegistry: Record<string, ProjectDetailData> = {
  "casa-rio": {
    name: "Casa Rio",
    developer: "Lodha Group",
    desc: "Delivered 175 towers, encompassing 70,000+ units and 92,000 sqm of premium aluminum sliding and casement profiles.",
    longDesc: "Casa Rio represents one of our most expansive installations. With 175 residential towers built near the coastal regions of Mumbai, the main challenge was to deliver aluminum profile sections capable of preventing monsoon rain ingress and resisting high wind pressure, while maintaining smooth operation across 70,000+ individual units.",
    towers: "175 Towers",
    units: "70,000+ Units",
    sqm: "92,000 sqm",
    year: "2014 - 2017",
    challenges: [
      "Extremely tight developer timelines matching rapid tower construction.",
      "High coastal rain ingress risk due to the geographical location.",
      "Ensuring consistent quality standards across 70,000+ sliding window tracks.",
    ],
    solutions: [
      "Nesting and automated profile cutting lines operated at full capacity to match slab cast timelines.",
      "Engineered double EPDM weather-strip gaskets designed to seal tightly under high wind pressure.",
      "On-site installation leveling audits conducted by our dedicated inspection engineers.",
    ],
    imageUrl: "/images/projects/casa-rio.webp",
  },
  "palava-city": {
    name: "Palava City",
    developer: "Lodha Group",
    desc: "Completed 92 towers (18 stories each), covering 82,000 units and 128,000 sqm of heavy-duty fenestration profiles.",
    longDesc: "Palava City required a major, coordinated production run. Delivering 92 towers of 18 stories each, we designed customized aluminum profile systems to manage thermal isolation and structural load balancing. The sheer volume required active coordination between our Mumbai manufacturing HQ and the development logistics teams.",
    towers: "92 Towers",
    units: "82,000+ Units",
    sqm: "128,000 sqm",
    year: "2017 - 2020",
    challenges: [
      "Managing logistically complex deliveries to match phase-wise handovers.",
      "Reducing heat loading across west-facing facades of 18-story towers.",
      "Delivering high structural safety values to prevent framework vibrations.",
    ],
    solutions: [
      "Phase-wise container packaging routed directly to specific tower drop sites.",
      "Custom profile frames supporting double glazing to minimize thermal ingress.",
      "Thick structural mullion shapes anchors certified for extreme wind ratings.",
    ],
    imageUrl: "/images/projects/palava-city.webp",
  },
  "lodha-amara": {
    name: "Lodha Amara",
    developer: "Lodha Group",
    desc: "Delivered 17 towers (30 stories each) with 17,500 units and 48,000 sqm of thermal break window configurations.",
    longDesc: "Lodha Amara required high-rise specialized fenestration. Built to 30 stories, these towers experience significantly high wind loads. We supplied premium thermal break profiles with multi-point locks and acoustic double-glazing configurations to deliver a quiet, insulated high-rise residential experience.",
    towers: "17 Towers",
    units: "17,500+ Units",
    sqm: "48,000 sqm",
    year: "2020 - 2023 (and ongoing)",
    challenges: [
      "High wind shear forces at upper stories (up to 30 levels).",
      "Noise isolation demands near transit highways.",
      "High architectural demands for slim, minimalist frame styles.",
    ],
    solutions: [
      "Rigid structural calculations and WiWA certifications to verify window frame resistance up to 3.0 kPa.",
      "Acoustic damping frame sections matched with soundproof double glazing.",
      "Integrated slim window styles with hidden drainage channels to maintain exterior aesthetics.",
    ],
    imageUrl: "/images/projects/lodha-amara.webp",
  },
  "lodha-woods": {
    name: "Lodha Woods, Kandivali",
    developer: "Lodha Group",
    desc: "Delivered premium window installations across 3 towers (22 & 38 stories, 2,000 units), started in May 2024. 100% completed.",
    longDesc: "Lodha Woods Kandivali is a signature residential project situated amidst dense forest-facing views. Olympic Windows completed the custom fabrication and full scale deployment of sliding and casement systems for 3 towers ranging up to 38 stories, ensuring high stability against structural shear and premium glass visibility.",
    towers: "3 Towers",
    units: "2,000 Units",
    sqm: "18,500 sqm",
    year: "May 2024 - Dec 2025",
    challenges: [
      "Designing window spans that provide unobstructed views of surrounding greenery while maintaining structural safety values.",
      "Coordinating logistically with tower handovers reaching up to 38 levels.",
      "Strict thermal and acoustical rating compliance."
    ],
    solutions: [
      "Developed customized ultra-slim outer frames with heavy-duty structural mullion anchors.",
      "Devised vertical crane-loading schedules timed with floor-by-floor panel installation loops.",
      "Utilized high-performance thermal break assemblies to optimize climate control."
    ],
    imageUrl: "/images/projects/lodha-woods.webp",
  },
  "lodha-upper-thane": {
    name: "Lodha Upper Thane, Anjur",
    developer: "Lodha Group",
    desc: "Completed 22 towers (19 stories, 15,500 units) started in Oct 2018. Features 8 towers currently in progress and 3 towers upcoming.",
    longDesc: "Lodha Upper Thane represents a massive township development requiring immense logistical scale. Spanning 22 completed towers (19 stories, 15,500 units) with 8 towers in active progress and 3 towers scheduled for construction, Olympic Windows established a dedicated on-site fabrication yard to maintain strict slab cast delivery matches.",
    towers: "33 Towers total",
    units: "15,500 Units",
    sqm: "112,000 sqm",
    year: "Oct 2018 - Ongoing",
    challenges: [
      "Massive delivery scale demanding over 112,000 sqm of finished aluminum window sections.",
      "Varying phase schedules requiring flexible logistics and continuous production capabilities.",
      "Water tightness checks under intense monsoon conditions typical of Thane region."
    ],
    solutions: [
      "Established a localized project logistics center to batch-package window assemblies.",
      "Deployed dynamic workflow scheduling to dynamically match real-time tower slab handovers.",
      "Engineered high-sill sliding tracks with specialized multi-chamber EPDM seals to stop rain ingress."
    ],
    imageUrl: "/images/projects/lodha-upper-thane.webp",
  },
  "lodha-premier": {
    name: "Lodha Premier, Dombivli",
    developer: "Lodha Group",
    desc: "Completed 10 towers (23 stories, 5,500 units, 15,000 sqm) from Jan 2022. Active phase includes 4 towers in progress and 4 towers upcoming.",
    longDesc: "Lodha Premier in Dombivli is a highly modern development calling for superior aesthetic and weather resistance profile systems. Spanning 10 completed towers of 23 stories (5,500 units), the phase includes 4 towers in active progress and 4 upcoming towers. We delivered 15,000 sqm of certified heavy-duty window and glazing configurations.",
    towers: "18 Towers total",
    units: "5,500 Units",
    sqm: "15,000 sqm",
    year: "Jan 2022 - Ongoing",
    challenges: [
      "High rain-load wind pressures demanding custom frame reinforcements.",
      "Tight construction timelines across 10 completed towers.",
      "Ensuring flawless glass surface alignment on facades."
    ],
    solutions: [
      "Conducted WiWA certifications on structural profiles to guarantee water tightness up to 300 Pa.",
      "Utilized CNC double-head cutting lines for rapid, precise section output.",
      "Implemented laser-aligned anchor setups during frame installation loops."
    ],
    imageUrl: "/images/projects/lodha-premier.webp",
  },
  "lodha-bella-vita": {
    name: "Lodha Bella Vita",
    developer: "Lodha Group",
    desc: "Completed 2 towers (27 stories, completed July 2024) started April 2023. Current phases include 2 towers in progress and 4 towers upcoming.",
    longDesc: "Lodha Bella Vita is a premium luxury residential project blending nature and classical European architectures. Olympic Windows successfully engineered and deployed custom fenestration configurations across 2 completed towers of 27 stories between April 2023 and July 2024. 2 towers are currently in progress and 4 towers are upcoming.",
    towers: "8 Towers total",
    units: "1,200+ Units",
    sqm: "24,000 sqm",
    year: "April 2023 - Ongoing",
    challenges: [
      "Integrating minimalist sliding tracks that match classical European styling templates.",
      "Strict deadline parameters, delivering two 27-story tower packages in 15 months.",
      "Ensuring acoustic damping near busy urban access corridors."
    ],
    solutions: [
      "Designed specialized thin-mullion sliding windows matching architectural designs.",
      "Accelerated manufacturing lines to coordinate dual tower delivery schedules.",
      "Integrated acoustic double-glazed assemblies with specialized sound reduction profiles."
    ],
    imageUrl: "/images/projects/lodha-bella-vita.webp",
  },
  "lodha-panache": {
    name: "Lodha Panache, Hinjewadi",
    developer: "Lodha Group",
    desc: "Newest luxury tower project in Pune. Construction scope features 1 tower currently in progress and 5 towers upcoming.",
    longDesc: "Lodha Panache Hinjewadi represents our latest expansion in the Pune luxury segment. Boasting 1 tower currently in active progress and 5 upcoming towers, Olympic Windows is fabricating and deploying modern, high-rise wind-resistant window systems featuring slim line profiles, multi-point lock mechanics, and dual-layer glazing.",
    towers: "6 Towers total",
    units: "1,800+ Units",
    sqm: "19,000 sqm",
    year: "2024 - Ongoing",
    challenges: [
      "High architectural custom-styling requirements for Hinjewadi's signature tech skyline.",
      "Accommodating structural movement in high-rise concrete frameworks."
    ],
    solutions: [
      "Customized powder-coated premium grey profiles designed for sleek modern building elevation layouts.",
      "Utilized heavy-duty deflection track systems to safely accommodate vertical framework compression."
    ],
    imageUrl: "/images/projects/lodha-panache.webp",
  },
  "lodha-giardino": {
    name: "Lodha Giardino, Kharadi",
    developer: "Lodha Group",
    desc: "Upcoming luxury residences in Kharadi, Pune. Pioneer development scheduled for 2 towers (27 stories).",
    longDesc: "Lodha Giardino Kharadi is a luxury nature-themed housing estate. As the pioneer of premium residential townships in Kharadi, the project features 2 towers of 27 stories. Olympic Windows is coordinating directly with the architectural consultants to supply high-performance sliding track profiles that support premium safety glass panels.",
    towers: "2 Towers",
    units: "800+ Units",
    sqm: "12,000 sqm",
    year: "Upcoming",
    challenges: [
      "Matching the vertical garden design aesthetics with green-tinted structural glass frames.",
      "Fulfilling premium sound attenuation guidelines near transit lines."
    ],
    solutions: [
      "Collaborated with project facade consultants to design custom color anodized window borders.",
      "Prepared double glazed gas-filled insulating window assemblies to provide sound dampening."
    ],
    imageUrl: "/images/projects/lodha-giardino.webp",
  },
  "lodha-iris": {
    name: "Lodha Iris",
    developer: "Lodha Group",
    desc: "Upcoming luxury segment project inside Lodha Upper Thane township featuring 2 premium residential towers.",
    longDesc: "Lodha Iris is an upcoming premium residential phase inside the massive Lodha Upper Thane township. Olympic Windows will fabricate and deliver high-performance sliding track configurations, matching the developer's scale and specifications for 2 premium high-rise towers.",
    towers: "2 Towers",
    units: "600+ Units",
    sqm: "8,500 sqm",
    year: "Upcoming",
    challenges: [
      "Matching styling guides with the pre-existing Upper Thane phases.",
      "Executing rapid turnaround schedules during construction starts."
    ],
    solutions: [
      "Utilized standardized profile dyes to ensure color and texture coherence with older phases.",
      "Allocated production capacity slots at our central plant to ensure early component deliveries."
    ],
    imageUrl: "/images/projects/lodha-iris.webp",
  },
};

export const projects: ProjectData[] = Object.entries(projectRegistry).map(([slug, details]) => ({
  slug,
  ...details
}));
