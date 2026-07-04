import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Window & Door Systems",
  description: "Browse our premium aluminum fenestration products: thermal break windows, robust sliding and folding doors, unitized facades, and architectural shading fins.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
