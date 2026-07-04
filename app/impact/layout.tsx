import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "Learn about the social and environmental initiatives at Olympic Windows, including closed-loop aluminum recycling, women empowerment in manufacturing, and cutting-waste optimization.",
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
