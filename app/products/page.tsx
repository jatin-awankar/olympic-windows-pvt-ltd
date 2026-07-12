import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ProductsList from "@/components/sections/products/ProductsList";
import { productList } from "@/data/products";

export const metadata: Metadata = {
  title: "Premium Window & Door Systems",
  description: "Browse our premium aluminum fenestration products: thermal break windows, robust sliding and folding doors, unitized facades, and architectural shading fins.",
};

export default function ProductsIndex() {
  return (
    <div className="flex flex-col w-full font-sans overflow-hidden">
      <PageHeader
        title="Our Products"
        subtitle="European precision engineered for high-performance buildings."
        tagline="Design System Extrusions"
        bgImage="/images/headers/products.webp"
        bgOpacity={40}
      />

      <Section variant="surface" hasBorder>
        <Container>
          <ProductsList productList={productList} />
        </Container>
      </Section>
    </div>
  );
}
