import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

export default function Container({
  children,
  className = "",
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`${clean ? "" : "mx-auto max-w-7xl px-6 md:px-10 w-full"} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
