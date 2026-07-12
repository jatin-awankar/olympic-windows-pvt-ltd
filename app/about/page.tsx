import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import HistorySection from "@/components/sections/about/HistorySection";
import FabricationSection from "@/components/sections/about/FabricationSection";
import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import LocationsSection from "@/components/sections/about/LocationsSection";
import CertificationsSection from "@/components/sections/about/CertificationsSection";
import AboutCtaSection from "@/components/sections/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the story of Olympic Windows. Invited by Lodha Group in 2012, we specialize in high-performance aluminum windows, doors, facades, and sun-shading profiles.",
};

export default function About() {
  return (
    <div className="flex flex-col w-full font-sans">
      <PageHeader
        title="Our Story"
        subtitle="European precision engineered for high-performance buildings."
        tagline="Get to Know Us"
        bgImage="/images/headers/about-us.webp"
        bgOpacity={40}
      />

      <HistorySection />

      <FabricationSection />

      <CoreValuesSection />

      <LocationsSection />

      <CertificationsSection />

      <AboutCtaSection />
    </div>
  );
}
