export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const galleryRegistry: GalleryImage[] = [
  // 1. Products
  {
    id: 1,
    src: "/images/products/aluminum-windows.webp",
    alt: "Precision European-standard aluminum window system profile detailing.",
    category: "Products",
  },
  {
    id: 2,
    src: "/images/products/aluminum-doors.webp",
    alt: "Slide-and-fold balcony door layout showcasing slim sightlines and EPDM gaskets.",
    category: "Products",
  },
  {
    id: 3,
    src: "/images/products/aluminum-fins.webp",
    alt: "Heavy-duty custom exterior aluminum shading fins profile layout.",
    category: "Products",
  },
  {
    id: 4,
    src: "/images/products/product-01.webp",
    alt: "Premium aluminum sliding window section showcasing weatherstripping and dual glazing.",
    category: "Products",
  },
  {
    id: 5,
    src: "/images/products/product-02.webp",
    alt: "Anodized structural frame assembly detailing and mechanical corners.",
    category: "Products",
  },
  {
    id: 6,
    src: "/images/products/product-03.webp",
    alt: "High-insulation window profile cross-section with multi-point locking system.",
    category: "Products",
  },
  {
    id: 7,
    src: "/images/products/product-04.webp",
    alt: "Slim-line architectural aluminum door profile and hinge assembly.",
    category: "Products",
  },
  {
    id: 8,
    src: "/images/products/facades.webp",
    alt: "Semi-unitized double glazed structural glass curtain wall design.",
    category: "Products",
  },

  // 2. Machinery
  {
    id: 9,
    src: "/images/machinery/machine-8.webp",
    alt: "Advanced CNC routing center for complex architectural panels.",
    category: "Machinery",
  },
  {
    id: 10,
    src: "/images/machinery/machine-9.webp",
    alt: "Automated profile wrapping machine for protective surface film.",
    category: "Machinery",
  },
  {
    id: 11,
    src: "/images/machinery/machine-10.webp",
    alt: "Precision digital caliper profile calibration and QA station.",
    category: "Machinery",
  },
  {
    id: 12,
    src: "/images/machinery/machine-11.webp",
    alt: "Pneumatic multi-head assembly table for hardware installation.",
    category: "Machinery",
  },
  {
    id: 13,
    src: "/images/machinery/machine-12.webp",
    alt: "High-pressure profile washing and degreasing tunnel.",
    category: "Machinery",
  },
  {
    id: 14,
    src: "/images/machinery/machine-13.webp",
    alt: "Electrostatic powder coating gun line for anodized profile finishes.",
    category: "Machinery",
  },
  {
    id: 15,
    src: "/images/machinery/machine-14.webp",
    alt: "Quality inspection bench with ultrasonic glass thickness verification.",
    category: "Machinery",
  },
  {
    id: 16,
    src: "/images/machinery/machine-1.webp",
    alt: "CNC double-head precision aluminum profile cutting machine.",
    category: "Machinery",
  },
  {
    id: 17,
    src: "/images/machinery/machine-6.webp",
    alt: "Pneumatic punching press for rapid corner joint preparation.",
    category: "Machinery",
  },
  {
    id: 18,
    src: "/images/machinery/machine-3.webp",
    alt: "Precision milling machine for drain holes and lock routing.",
    category: "Machinery",
  },
  {
    id: 19,
    src: "/images/machinery/machine-4.webp",
    alt: "Double-axis profile copy router for hardware installation cuts.",
    category: "Machinery",
  },
  {
    id: 20,
    src: "/images/machinery/machine-5.webp",
    alt: "Heavy-duty profile end-milling machine for structural mullion joins.",
    category: "Machinery",
  },
  {
    id: 21,
    src: "/images/machinery/machine-2.webp",
    alt: "Automated hydraulic corner crimping machine for robust frame joinery.",
    category: "Machinery",
  },
  {
    id: 22,
    src: "/images/machinery/machine-7.webp",
    alt: "Industrial profile bending machine for custom arched window designs.",
    category: "Machinery",
  },

  // 3. Workshop
  {
    id: 23,
    src: "/images/workshop/workshop-1.webp",
    alt: "Spacious assembly bay for high-volume structural glazing panels.",
    category: "Workshop",
  },
  {
    id: 24,
    src: "/images/workshop/workshop-2.webp",
    alt: "Quality testing bay for wind and water penetration verification.",
    category: "Workshop",
  },
  {
    id: 25,
    src: "/images/workshop/workshop-3.webp",
    alt: "Raw aluminum profile extrusion storage and logistics racks.",
    category: "Workshop",
  },
  {
    id: 26,
    src: "/images/workshop/workshop-4.webp",
    alt: "Hardware storage and lock cylinder sub-assembly warehouse.",
    category: "Workshop",
  },
  {
    id: 27,
    src: "/images/workshop/workshop-5.webp",
    alt: "Finished window pane packaging and dynamic sorting lines.",
    category: "Workshop",
  },
  {
    id: 28,
    src: "/images/workshop/workshop-6.webp",
    alt: "Facade panel unitization floor with overhead gantry cranes.",
    category: "Workshop",
  },
  {
    id: 29,
    src: "/images/workshop/workshop-7.webp",
    alt: "QA control room and automated shipping logistics office.",
    category: "Workshop",
  },

  // 4. Projects
  {
    id: 30,
    src: "/images/projects/casa-rio.webp",
    alt: "Casa Rio project - Premium casement and sliding profiles installed across towers.",
    category: "Projects",
  },
  {
    id: 31,
    src: "/images/projects/palava-city.webp",
    alt: "Palava City project - Heavy-duty weather-sealed aluminum sliding window tracks.",
    category: "Projects",
  },
  {
    id: 32,
    src: "/images/projects/lodha-amara.webp",
    alt: "Lodha Amara project - High-performance thermal break window profiles.",
    category: "Projects",
  },
  {
    id: 33,
    src: "/images/projects/lodha-woods.webp",
    alt: "Lodha Woods Kandivali - Extra-large viewing frames facing luxury greenery views.",
    category: "Projects",
  },
  {
    id: 34,
    src: "/images/projects/lodha-upper-thane.webp",
    alt: "Lodha Upper Thane township - Massive-scale premium sliding window profile installations.",
    category: "Projects",
  },
  {
    id: 35,
    src: "/images/projects/lodha-premier.webp",
    alt: "Lodha Premier Dombivli - Heavy-duty wind load resistant high-rise glazing layouts.",
    category: "Projects",
  },
  {
    id: 36,
    src: "/images/projects/lodha-bella-vita.webp",
    alt: "Lodha Bella Vita - Modern Mediterranean-inspired luxury window frames.",
    category: "Projects",
  },
  {
    id: 37,
    src: "/images/projects/lodha-panache.webp",
    alt: "Lodha Panache Pune - Sleek modern glass facade and window integrations.",
    category: "Projects",
  },
  {
    id: 38,
    src: "/images/projects/lodha-giardino.webp",
    alt: "Lodha Giardino - High-rise residential glazing matching garden views.",
    category: "Projects",
  },
  {
    id: 39,
    src: "/images/projects/lodha-iris.webp",
    alt: "Lodha Iris - Premium boutique twin tower structural glass layouts.",
    category: "Projects",
  },
  {
    id: 40,
    src: "/images/projects/project-01.webp",
    alt: "Completed high-rise township facade showing premium glazing installations.",
    category: "Projects",
  },
  {
    id: 41,
    src: "/images/projects/project-02.webp",
    alt: "Modern luxury villa installation featuring panoramic sliding doors.",
    category: "Projects",
  },
  {
    id: 42,
    src: "/images/projects/project-03.webp",
    alt: "Bespoke structural glass facade installed on a premium commercial complex.",
    category: "Projects",
  },
  {
    id: 43,
    src: "/images/projects/project-04.webp",
    alt: "Double glazed thermal break window layout inside a completed residential lobby.",
    category: "Projects",
  },
];

export const categories = ["All", "Products", "Workshop", "Machinery", "Projects"];
