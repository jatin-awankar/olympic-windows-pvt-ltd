export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olympic Windows",
    short_name: "Olympic Windows",
    description: "European precision engineered aluminum windows, doors, facades, and architectural sun-shading fins.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1122",
    theme_color: "#D4AF37",
    icons: [
      {
        src: "/images/logo/logo-sm.webp",
        sizes: "128x128",
        type: "image/webp",
      },
      {
        src: "/images/logo/logo-md.webp",
        sizes: "256x256",
        type: "image/webp",
      },
      {
        src: "/images/logo/logo-high.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
