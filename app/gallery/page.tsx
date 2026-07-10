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
  {
    id: 1,
    src: "/images/projects/casa-rio.webp",
    alt: "Casa Rio project - Premium casement and sliding profiles installed across towers.",
    category: "Projects",
  },
  {
    id: 2,
    src: "/images/projects/palava-city.webp",
    alt: "Palava City project - Heavy-duty weather-sealed aluminum sliding window tracks.",
    category: "Projects",
  },
  {
    id: 3,
    src: "/images/projects/lodha-amara.webp",
    alt: "Lodha Amara project - High-performance thermal break window profiles.",
    category: "Projects",
  },
  {
    id: 4,
    src: "/images/products/aluminum-windows.webp",
    alt: "Precision European-standard aluminum window system profile detailing.",
    category: "Products",
  },
  {
    id: 5,
    src: "/images/products/aluminum-doors.webp",
    alt: "Slide-and-fold balcony door layout showcasing slim sightlines and EPDM gaskets.",
    category: "Products",
  },
  {
    id: 6,
    src: "/images/products/facades.webp",
    alt: "Semi-unitized double glazed structural glass curtain wall design.",
    category: "Facades",
  },
];

const categories = ["All", "Projects", "Products", "Facades"];

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
      <section className="relative h-[90vh] min-h-[450px] flex items-center bg-primary text-text-inverse overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/headers/projects.webp"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        >
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Architectural Mask & Grid Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30 z-10" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-10" />

        {/* Header Text overlay */}
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full z-20 flex flex-col justify-center h-full">
          <div className="max-w-2xl flex flex-col space-y-4">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Visual Showcases
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">Media Gallery</h1>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              Explore our premium installations, specialized aluminum profile applications, and manufacturing precision captured in motion.
            </p>
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

          {/* Interactive Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
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
