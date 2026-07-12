import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import FeaturedVideo from "@/components/sections/gallery/FeaturedVideo";
import InteractiveGallery from "@/components/sections/gallery/InteractiveGallery";
import { galleryRegistry, categories } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Explore our premium window and door installations, specialized aluminum profile applications, and manufacturing precision in the Olympic Windows media gallery.",
};

export default function Gallery() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <PageHeader
        title="Media Gallery"
        subtitle="Explore our premium installations, specialized aluminum profile applications, and manufacturing precision."
        tagline="Visual Showcases"
        bgImage="/images/general/cta-bg.webp"
        bgOpacity={40}
      />

      <FeaturedVideo />

      <InteractiveGallery
        galleryRegistry={galleryRegistry}
        categories={categories}
      />
    </div>
  );
}
