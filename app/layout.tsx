import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olympicwindows.in"),
  title: {
    default: "Olympic Windows | Premium Aluminum Windows & Doors",
    template: "%s | Olympic Windows"
  },
  description: "European precision engineered aluminum windows, doors, facades, and fins. Invited to India by Lodha Group in 2012. Over 100,000 units delivered with uncompromising quality.",
  keywords: ["aluminum windows", "aluminum doors", "mumbai window manufacturer", "premium window system", "facades", "lodha window partner"],
  authors: [{ name: "Olympic Windows" }],
  creator: "Olympic Windows",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Olympic Windows | Premium Aluminum Windows & Doors",
    description: "European precision engineered aluminum windows, doors, facades, and fins.",
    url: "https://olympicwindows.in",
    siteName: "Olympic Windows",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/logo-high.webp",
        width: 512,
        height: 512,
        alt: "Olympic Windows Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olympic Windows | Premium Aluminum Windows & Doors",
    description: "European precision engineered aluminum windows, doors, facades, and fins.",
    images: ["/images/logo/logo-high.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Olympic Windows",
              "image": "https://olympicwindows.in/images/logo/logo-high.webp",
              "@id": "https://olympicwindows.in/#organization",
              "url": "https://olympicwindows.in",
              "telephone": "+919167394442",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "F11, 12 Balaji Plaza, Khoni - Taloja Bypass Road, Usatane",
                "addressLocality": "Navi Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "421306",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.0047394,
                "longitude": 73.1091599
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/olympic-windows-private-limited/",
                "https://www.facebook.com/olympicwindows.co.in/"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#1A1A1A] font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  );
}
