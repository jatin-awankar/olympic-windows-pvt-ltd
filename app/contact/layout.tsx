import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Olympic Windows. Request a technical consultation, coordinate freight logistics, or download specification sheets for aluminum window, door, and facade profiles.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
