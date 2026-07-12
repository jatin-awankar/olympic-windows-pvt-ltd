import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  bgImage?: string;
  bgOpacity?: number;
  py?: "py-16" | "py-20" | "py-24";
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  tagline,
  bgImage,
  bgOpacity = 40,
  py = "py-20",
  children,
}: PageHeaderProps) {
  return (
    <Section variant="primary" className={`${py} relative overflow-hidden`}>
      {/* Background Image with Linear Gradient Overlay */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            opacity: bgOpacity / 100,
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.95) 30%, rgba(10, 17, 34, 0.6) 100%), url('${bgImage}')`
          }}
        />
      )}

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <Container className="relative w-full flex flex-col space-y-4 z-10">
        {children}

        <div className="flex flex-col space-y-3">
          {tagline && (
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              {tagline}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
