"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Data-driven list of fallback/placeholder gallery images (reusing optimized WebP assets)
const galleryRegistry: GalleryImage[] = [
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

  // 2. Facades
  {
    id: 8,
    src: "/images/products/facades.webp",
    alt: "Semi-unitized double glazed structural glass curtain wall design.",
    category: "Facades",
  },

  // 3. Machinery
  {
    id: 9,
    src: "/images/machinery/machine-1.webp",
    alt: "CNC double-head precision aluminum profile cutting machine.",
    category: "Machinery",
  },
  {
    id: 10,
    src: "/images/machinery/machine-2.webp",
    alt: "Automated hydraulic corner crimping machine for robust frame joinery.",
    category: "Machinery",
  },
  {
    id: 11,
    src: "/images/machinery/machine-3.webp",
    alt: "Precision milling machine for drain holes and lock routing.",
    category: "Machinery",
  },
  {
    id: 12,
    src: "/images/machinery/machine-4.webp",
    alt: "Double-axis profile copy router for hardware installation cuts.",
    category: "Machinery",
  },
  {
    id: 13,
    src: "/images/machinery/machine-5.webp",
    alt: "Heavy-duty profile end-milling machine for structural mullion joins.",
    category: "Machinery",
  },
  {
    id: 14,
    src: "/images/machinery/machine-6.webp",
    alt: "Pneumatic punching press for rapid corner joint preparation.",
    category: "Machinery",
  },
  {
    id: 15,
    src: "/images/machinery/machine-7.webp",
    alt: "Industrial profile bending machine for custom arched window designs.",
    category: "Machinery",
  },
  {
    id: 16,
    src: "/images/machinery/machine-8.webp",
    alt: "Advanced CNC routing center for complex architectural panels.",
    category: "Machinery",
  },
  {
    id: 17,
    src: "/images/machinery/machine-9.webp",
    alt: "Automated profile wrapping machine for protective surface film.",
    category: "Machinery",
  },
  {
    id: 18,
    src: "/images/machinery/machine-10.webp",
    alt: "Precision digital caliper profile calibration and QA station.",
    category: "Machinery",
  },
  {
    id: 19,
    src: "/images/machinery/machine-11.webp",
    alt: "Pneumatic multi-head assembly table for hardware installation.",
    category: "Machinery",
  },
  {
    id: 20,
    src: "/images/machinery/machine-12.webp",
    alt: "High-pressure profile washing and degreasing tunnel.",
    category: "Machinery",
  },
  {
    id: 21,
    src: "/images/machinery/machine-13.webp",
    alt: "Electrostatic powder coating gun line for anodized profile finishes.",
    category: "Machinery",
  },
  {
    id: 22,
    src: "/images/machinery/machine-14.webp",
    alt: "Quality inspection bench with ultrasonic glass thickness verification.",
    category: "Machinery",
  },
  {
    id: 23,
    src: "/images/workshop/workshop-1.webp",
    alt: "Spacious assembly bay for high-volume structural glazing panels.",
    category: "Machinery",
  },
  {
    id: 24,
    src: "/images/workshop/workshop-2.webp",
    alt: "Quality testing bay for wind and water penetration verification.",
    category: "Machinery",
  },
  {
    id: 25,
    src: "/images/workshop/workshop-3.webp",
    alt: "Raw aluminum profile extrusion storage and logistics racks.",
    category: "Machinery",
  },
  {
    id: 26,
    src: "/images/workshop/workshop-4.webp",
    alt: "Hardware storage and lock cylinder sub-assembly warehouse.",
    category: "Machinery",
  },
  {
    id: 27,
    src: "/images/workshop/workshop-5.webp",
    alt: "Finished window pane packaging and dynamic sorting lines.",
    category: "Machinery",
  },
  {
    id: 28,
    src: "/images/workshop/workshop-6.webp",
    alt: "Facade panel unitization floor with overhead gantry cranes.",
    category: "Machinery",
  },
  {
    id: 29,
    src: "/images/workshop/workshop-7.webp",
    alt: "QA control room and automated shipping logistics office.",
    category: "Machinery",
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
    alt: "Lodha Woods Kandivali - Extra-large viewing frames facing lush forest views.",
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

const categories = ["All", "Products", "Facades", "Machinery", "Projects"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Filtered images based on active tab selection
  const filteredImages = galleryRegistry.filter(
    (img) => selectedCategory === "All" || img.category === selectedCategory
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, filteredImages.length]);

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      {/* Page Header Hero */}
      <section className="bg-primary text-text-inverse py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.95) 30%, rgba(10, 17, 34, 0.6) 100%), url('/images/general/cta-bg.webp')`,
          }}
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-4 z-10">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Visual Showcases
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Media Gallery</h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Explore our premium installations, specialized aluminum profile applications, and manufacturing precision.
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="bg-surface py-16 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">Featured Corporate Video</h2>
            <div className="w-12 h-1 bg-accent mx-auto" />
            <p className="text-sm text-text-secondary leading-relaxed">
              Take a virtual walkthrough of our engineering processes and custom glazing installations.
            </p>
          </div>

          {/* Responsive Performance-Optimized Video Player */}
          <div className="relative aspect-video max-w-4xl mx-auto w-full bg-primary-dark border border-border-custom/40 rounded-sm shadow-card overflow-hidden group">
            <video
              autoPlay
              loop
              controls
              playsInline
              preload="auto"
              poster="/images/headers/projects.webp"
              className="absolute inset-0 w-full h-full object-cover z-10"
            >
              <source src="/video.webm" type="video/webm" />
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-border-custom/20 pb-6 gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-primary font-accent">Image Gallery</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Click any image to view details and launch the fullscreen lightbox slider.
              </p>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveImageIndex(null); // Reset lightbox indexes
                  }}
                  className={`px-4 py-2 text-xs font-accent font-semibold tracking-wider rounded-sm transition-all duration-200 border ${selectedCategory === cat
                    ? "bg-accent border-accent text-white shadow-sm"
                    : "bg-surface border-border-custom/40 text-text-secondary hover:text-accent hover:border-accent"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Responsive Grid with Staggered Animations */}
          <div className="min-h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.04,
                    },
                  },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredImages.map((img, index) => (
                  <motion.div
                    key={img.id}
                    variants={{
                      hidden: { opacity: 0, y: 15, scale: 0.98 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    onClick={() => setActiveImageIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveImageIndex(index);
                      }
                    }}
                    className="group relative aspect-[4/3] w-full border border-border-custom/30 rounded-sm overflow-hidden bg-primary-dark shadow-sm hover:shadow-card transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    role="button"
                    tabIndex={0}
                    aria-label={`Open preview modal for ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle Interactive Screen Mask */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-white flex flex-col items-center space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                          <Eye className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider font-accent">Zoom View</span>
                      </div>
                    </div>
                    {/* Category Pill Tag */}
                    <span className="absolute top-3 left-3 bg-primary-dark/80 text-text-inverse text-[9px] font-accent font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-sm border border-white/5 rounded-sm">
                      {img.category}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal Slider Overlay */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen media lightbox"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Lightbox Slider Main Panel */}
            <div className="relative w-full max-w-5xl aspect-[4/3] px-6 flex items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1
                  )
                }
                className="absolute left-6 z-40 w-12 h-12 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95 transition-transform"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Central Main Slide Image */}
              <div className="relative w-full h-full">
                <Image
                  src={filteredImages[activeImageIndex].src}
                  alt={filteredImages[activeImageIndex].alt}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0
                  )
                }
                className="absolute right-6 z-40 w-12 h-12 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-95 transition-transform"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Description & Position Panel */}
            <div className="max-w-2xl text-center px-6 mt-6 space-y-2">
              <span className="text-accent text-xs font-accent font-bold uppercase tracking-wider">
                {filteredImages[activeImageIndex].category} • Slide {activeImageIndex + 1} of {filteredImages.length}
              </span>
              <p className="text-white/80 text-sm leading-relaxed max-w-xl mx-auto">
                {filteredImages[activeImageIndex].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
