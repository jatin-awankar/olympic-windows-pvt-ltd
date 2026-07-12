import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ProductOverview from "@/components/sections/products/ProductOverview";
import ProductFactsheet from "@/components/sections/products/ProductFactsheet";
import { productRegistry } from "@/data/products";

export function generateStaticParams() {
  return [
    { category: "aluminum-windows" },
    { category: "aluminum-doors" },
    { category: "facades" },
    { category: "aluminum-fins" },
  ];
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productRegistry[resolvedParams.category];
  return {
    title: `${product?.title || "Product"}`,
    description: product?.desc || "Premium aluminum fenestration products.",
  };
}

export default async function ProductCategoryDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const product = productRegistry[resolvedParams.category];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full font-sans">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://olympicwindows.in"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://olympicwindows.in/products"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": product.title,
                    "item": `https://olympicwindows.in/products/${resolvedParams.category}`
                  }
                ]
              },
              {
                "@type": "Product",
                "name": product.title,
                "image": `https://olympicwindows.in${product.imageUrl}`,
                "description": product.desc,
                "category": "Aluminum Fenestration System",
                "brand": {
                  "@type": "Brand",
                  "name": "Olympic Windows"
                },
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "INR",
                  "lowPrice": "5000",
                  "highPrice": "25000",
                  "offerCount": "10",
                  "url": `https://olympicwindows.in/products/${resolvedParams.category}`
                }
              }
            ]
          })
        }}
      />

      <PageHeader
        title={product.title}
        subtitle={product.desc}
        tagline="System Specification"
        bgImage={product.imageUrl}
        bgOpacity={35}
      >
        <Link
          href="/products"
          className="inline-flex items-center space-x-2 text-accent hover:text-accent-light text-xs font-accent font-bold uppercase transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Products</span>
        </Link>
      </PageHeader>

      <Section variant="surface" hasBorder>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ProductOverview product={product} />

          <ProductFactsheet product={product} />
        </Container>
      </Section>

      <section className="bg-primary text-text-inverse py-16">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Discuss Profile Customizations</h2>
          <p className="text-text-muted max-w-md text-sm leading-relaxed">
            Need customized glazing depths or specific thermal barriers for your site?
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-4 rounded-sm transition-colors text-sm hover:shadow-lg active:scale-95 transition-transform"
          >
            Contact Design Engineering
          </Link>
        </div>
      </section>
    </div>
  );
}
