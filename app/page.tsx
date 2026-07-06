"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Factory, Truck, Handshake, PencilRuler, ShieldCheck, Leaf, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Setting New Standards in Aluminum Windows and Doors",
      desc: "A European-based company, bringing cutting-edge design and technology to India.",
      bgImage: "/images/hero/slide-1.jpg",
      btnText: "Read More",
      btnHref: "/about",
    },
    {
      title: "Trusted by Lodha Group",
      desc: "Delivering Excellence Across Iconic Projects.",
      bgImage: "/images/hero/slide-2.webp",
      btnText: "Explore Our Projects",
      btnHref: "/projects",
    },
    {
      title: "Engineered to Perfection – Our Premium Range of Windows and Doors",
      desc: "Tailored solutions designed for every space, ensuring durability, performance, and aesthetic excellence.",
      bgImage: "/images/hero/slide-3.jpg",
      btnText: "View Products",
      btnHref: "/products",
    },
    {
      title: "Women Empowerment & Sustainable Recycling",
      desc: "We are committed to Environmental Responsibility and Innovative Recycling Practices.",
      bgImage: "/images/hero/slide-4.png",
      btnText: "View More",
      btnHref: "/impact",
    },
    {
      title: "Elevate Your Spaces with European-Standard Aluminum Windows & Doors",
      desc: "Custom Designs • European Standards • High Durability",
      bgImage: "/images/hero/slide-5.jpg",
      btnText: "Contact Us",
      btnHref: "/contact",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const stats = [
    { value: "100k+", label: "Units Delivered" },
    { value: "100%", label: "Safety Compliance" },
    { value: "10+", label: "Years of Excellence" },
  ];

  const whyChooseUs = [
    {
      icon: Factory,
      title: "European Standards Manufacturing",
      desc: "Rooted in European standards, we bring precision engineering and timeless design to aluminum windows and doors.",
    },
    {
      icon: Truck,
      title: "Reliable and Timely Delivery",
      desc: "With a monthly production capacity of 7,500 units, we consistently meet our clients' timelines and expectations.",
    },
    {
      icon: Handshake,
      title: "Trusted by Industry Leaders",
      desc: "Our partnership with the Lodha Group and other renowned clients stands as a testament to our commitment to quality and innovation.",
    },
    {
      icon: PencilRuler,
      title: "Innovative Designs, Custom Solutions",
      desc: "Our customizable window and door systems are designed to meet the unique needs of our clients, offering solutions that blend functionality and style seamlessly.",
    },
    {
      icon: ShieldCheck,
      title: "Strict Quality Control",
      desc: "With a skilled workforce, regular quality assessments, and the latest tools and technologies, we ensure exceptional precision and performance in every product we deliver.",
    },
    {
      icon: Leaf,
      title: "Sustainability Commitment",
      desc: "We follow eco-friendly manufacturing processes and are dedicated to contributing to a sustainable future.",
    },
  ];

  const products = [
    {
      title: "Aluminum Windows",
      desc: "We provide a huge variety of window frames according to our client's design and order, combining sliding and openable features.",
      href: "/products/aluminum-windows",
      imageUrl: "/images/products/aluminum-windows.jpg",
    },
    {
      title: "Aluminum Doors",
      desc: "Heavy-duty sliding, glazed, folding, and swing doors offering smooth operations, structural durability, and robust security.",
      href: "/products/aluminum-doors",
      imageUrl: "/images/products/aluminum-doors.png",
    },
    {
      title: "Facades & Curtain Walls",
      desc: "High-performance structural glass facades engineered for extreme wind resistance and modern architectural aesthetics.",
      href: "/products/facades",
      imageUrl: "/images/products/facades.png",
    },
    {
      title: "Aluminum Fins",
      desc: "Premium solar shading and louvers profiles combining structural thermal efficiency with sleek geometric elegance.",
      href: "/products/aluminum-fins",
      imageUrl: "/images/products/aluminum-fins.jpg",
    },
  ];

  const projects = [
    {
      name: "Casa Rio",
      desc: "Delivered 175 towers, encompassing 70,000+ units and 92,000 sqm of fenestration.",
      stat: "175 Towers",
      href: "/projects/casa-rio",
      imageUrl: "/images/projects/casa-rio.png",
    },
    {
      name: "Palava City",
      desc: "Completed 92 towers (18 stories each), covering 82,000 units and 128,000 sqm.",
      stat: "92 Towers",
      href: "/projects/palava-city",
      imageUrl: "/images/projects/palava-city.png",
    },
    {
      name: "Lodha Amara",
      desc: "Delivered 17 towers (30 stories each) with 17,500 units and 48,000 sqm, plus ongoing phases.",
      stat: "17 Towers",
      href: "/projects/lodha-amara",
      imageUrl: "/images/projects/lodha-amara.png",
    },
  ];

  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">

      {/* 1. Hero Section (Dynamic Slider) */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-primary text-text-inverse overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.92) 20%, rgba(10, 17, 34, 0.4) 100%), url(${heroSlides[currentSlide].bgImage})`
            }}
          />
        </AnimatePresence>

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
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-surface py-12 border-b border-border-custom/50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center py-4 ${i !== stats.length - 1 ? "md:border-r border-border-custom/30" : ""
                }`}
            >
              <span className="font-accent text-4xl md:text-5xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-text-secondary mt-1 font-accent font-semibold uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Who We Are Section */}
      <section className="bg-surface py-24 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image box with real photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 aspect-[4/3] w-full relative border border-border-custom/40 p-3 bg-surface-alt rounded-sm"
          >
            <div
              className="absolute inset-3 bg-cover bg-center rounded-sm bg-slate-900"
              style={{ backgroundImage: `url('/images/general/cta-bg.jpg')` }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              We provide the best aluminum windows and doors
            </h2>
            <div className="h-0.5 w-16 bg-accent" />
            <p className="text-text-secondary leading-relaxed text-base">
              European based company, Specialized in aluminum windows and doors invited by Lodha group to India in 2012. We have successfully designed, developed and delivered the requirements of our customer. Providing our clients with a highly engineered system along with our fully trained service.
            </p>
            <p className="text-text-secondary leading-relaxed text-base">
              With our production facility in Mumbai and project coordination capacity, we maintain strict structural control, water-tightness certifications, and reliable delivery matching large-scale development programs.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-accent hover:text-accent-light font-accent font-semibold text-sm transition-colors group"
              >
                <span>Read More About Our Story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Products Grid Showcase */}
      <section className="bg-surface-alt py-24 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-16">
          <div className="text-center flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Our Products
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-2" />
            <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed mt-2">
              We provide a huge variety of windows and door frames according to our client’s design and order as per to their demand. Our combine style of sliding with fixed and openable with fixed windows ensuring desirable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod, i) => (
              <motion.div
                key={prod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-surface border border-border-custom/40 flex flex-col justify-between p-6 hover:shadow-card hover:border-accent/40 transition-all duration-300 rounded-sm group"
              >
                <div className="space-y-4">
                  <div className="h-44 w-full bg-slate-900 rounded-sm overflow-hidden relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${prod.imageUrl})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
                  <h3 className="text-lg font-bold text-primary font-accent group-hover:text-accent transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {prod.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-border-custom/20 mt-6 flex items-center justify-between">
                  <Link
                    href={prod.href}
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent-light text-sm font-semibold transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center pt-4">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 border border-accent hover:bg-accent text-accent hover:text-white px-8 py-3.5 font-accent font-semibold text-sm rounded-sm transition-all duration-200"
            >
              <span>Explore All Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="bg-primary text-text-inverse py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-16">
          <div className="text-center flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Proven Differentiators
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Choose Us
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-primary-light border border-border-custom/10 p-8 flex flex-col space-y-4 hover:border-accent/30 transition-colors group"
                >
                  <div className="h-12 w-12 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold font-accent text-text-inverse group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Featured Projects */}
      <section className="bg-surface py-24 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border-custom/20 pb-6">
            <div className="flex flex-col space-y-3">
              <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
                Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                Our Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent-light font-accent font-semibold text-sm transition-colors group mt-4 md:mt-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="border border-border-custom/40 flex flex-col justify-between bg-surface-alt relative group"
              >
                <div className="absolute top-4 right-4 bg-accent text-white font-accent font-bold text-[10px] uppercase tracking-wider px-3 py-1 z-10 shadow-sm">
                  {proj.stat}
                </div>
                <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${proj.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-85" />
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary font-accent group-hover:text-accent transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border-custom/25 mt-6">
                    <Link
                      href={proj.href}
                      className="inline-flex items-center space-x-2 text-accent hover:text-accent-light text-sm font-semibold transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonial Section */}
      <section className="bg-primary-light text-text-inverse py-20 border-b border-border-custom/20">
        <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center space-y-6">
          <div className="flex space-x-1 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg md:text-2xl font-light italic leading-relaxed text-text-inverse/90">
            "Olympic Windows has consistently demonstrated exceptional engineering capacity and precision manufacturing. Their systems deliver wind and monsoon proofing required for towering residential buildings in coastal cities like Mumbai."
          </blockquote>
          <div className="border-t border-accent/30 w-16 my-2" />
          <div>
            <p className="font-accent font-bold text-text-inverse">Lodha Technical Partnership Review</p>
            <p className="text-xs text-text-muted mt-0.5">Palava City Projects Management Office</p>
          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="bg-accent text-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
            Partner with Mumbai's premium developer-preferred aluminum fenestration specialists. Get a comprehensive consultation on wind loads, designs, and budgets.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-colors text-sm hover:shadow-lg active:scale-95 transition-transform"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+919167394442"
              className="border border-white/50 hover:border-white text-white hover:bg-white/10 font-accent font-semibold px-8 py-4 rounded-sm transition-colors text-sm hover:shadow-lg active:scale-95 transition-transform"
            >
              Call: +91 91673 94442
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
