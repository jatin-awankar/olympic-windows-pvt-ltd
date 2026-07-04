import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iconic Township Projects",
  description: "Explore Case Studies of projects completed by Olympic Windows: Casa Rio (175 towers), Palava City (92 towers), and Lodha Amara (17 towers).",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
