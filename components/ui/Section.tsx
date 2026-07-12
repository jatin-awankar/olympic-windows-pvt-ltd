import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "surface" | "surface-alt" | "primary" | "accent" | "transparent";
  hasBorder?: boolean;
}

export default function Section({
  children,
  className = "",
  variant = "transparent",
  hasBorder = false,
  ...props
}: SectionProps) {
  const bgClasses = {
    surface: "bg-surface text-text-primary",
    "surface-alt": "bg-surface-alt text-text-primary",
    primary: "bg-primary text-text-inverse",
    accent: "bg-accent text-white",
    transparent: "",
  };

  const borderClass = hasBorder ? "border-b border-border-custom/30" : "";

  return (
    <section
      className={`py-24 ${bgClasses[variant]} ${borderClass} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
