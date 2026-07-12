"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/home";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center bg-primary text-text-inverse overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100 z-0" : "opacity-0 scale-105 pointer-events-none z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.92) 20%, rgba(10, 17, 34, 0.4) 100%), url(${slide.bgImage})`,
          }}
        />
      ))}

      {/* Structural Grid overlays */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full z-10 flex flex-col justify-center h-full">
        <div className="max-w-3xl flex flex-col space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={`span-${currentSlide}`}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-accent font-accent font-semibold tracking-[0.2em] text-xs uppercase"
          >
            European Precision • Indian Scale
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={`title-${currentSlide}`}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-text-inverse"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={`desc-${currentSlide}`}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base md:text-lg text-text-muted leading-relaxed"
          >
            {heroSlides[currentSlide].desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={`btn-${currentSlide}`}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-4"
          >
            <Link
              href={heroSlides[currentSlide].btnHref}
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-light text-white font-accent font-semibold text-sm px-8 py-4 rounded-sm transition-all duration-200 active:scale-95 shadow-lg"
            >
              <span>{heroSlides[currentSlide].btnText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:border-accent bg-primary/45 hover:bg-accent/80 text-white backdrop-blur-sm transition-all duration-150 cursor-pointer hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:border-accent bg-primary/45 hover:bg-accent/80 text-white backdrop-blur-sm transition-all duration-150 cursor-pointer hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
