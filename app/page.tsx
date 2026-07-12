import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import StatsSection from "@/components/sections/home/StatsSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ProductsSection from "@/components/sections/home/ProductsSection";
import WhyChooseUsSection from "@/components/sections/home/WhyChooseUsSection";
import FeaturedProjectsSection from "@/components/sections/home/FeaturedProjectsSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import CtaSection from "@/components/sections/home/CtaSection";

export const metadata: Metadata = {
  title: "Premium Aluminum Windows & Doors | Olympic Windows",
  description: "European-engineered aluminum window and door systems customized for high-rise residential & commercial projects in India. Trusted partner of Lodha Group.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <HeroSection />

      <StatsSection />

      <AboutSection />

      <ProductsSection />

      <WhyChooseUsSection />

      <FeaturedProjectsSection />

      <TestimonialSection />

      <CtaSection />
    </div>
  );
}
