import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our premium aluminum fenestration services: from design consultation, custom engineering, precise manufacturing, on-site installation to long-term maintenance contracts.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
