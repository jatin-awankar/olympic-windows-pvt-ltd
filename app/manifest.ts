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
        src: "/images/logo/logo-sm.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/images/logo/logo-md.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/images/logo/logo-high.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
