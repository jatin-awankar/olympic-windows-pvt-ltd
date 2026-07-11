import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Target, Award, MapPin } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the story of Olympic Windows. Invited by Lodha Group in 2012, we specialize in high-performance aluminum windows, doors, facades, and sun-shading profiles.",
};

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Precision Engineering",
      desc: "Every millimeter matters. We follow rigorous European standards to deliver profiles with flawless alignment, structural stability, and superior insulation.",
    },
    {
      icon: Target,
      title: "Scale & Timeliness",
      desc: "We match the demands of major real estate developments with a 7,500 monthly unit manufacturing capacity, backed by structured production control.",
    },
    {
      icon: Award,
      title: "Integrity & Trust",
      desc: "Long-term client success is our priority. Since our invitation by the Lodha Group in 2012, we build relationships on performance, quality, and support.",
    },
  ];

  const certifications = [
    {
      title: "CE Conformity Mark",
      desc: "Certified compliance with European Union health, safety, and environmental protection performance standards.",
      src: "/images/certifications/cert-1.webp",
    },
    {
      title: "Qualicoat Quality Label",
      desc: "International standard assurance for high-performance architectural powder coating finishes on aluminum profiles.",
      src: "/images/certifications/cert-2.webp",
    },
    {
      title: "ISO 9001:2015",
      desc: "Global standard certification verifying strict quality management protocols throughout design and fabrication.",
      src: "/images/certifications/cert-3.webp",
    },
    {
      title: "WiWA Performance Certified",
      desc: "Rigorously audited for structural wind load, air infiltration, and water penetration resistance during severe monsoon cycles.",
      src: "/images/certifications/cert-4.webp",
    },
    {
      title: "IFT Rosenheim Tested",
      desc: "Verified performance parameters for thermal insulation (U-value) and acoustic noise isolation standards.",
      src: "/images/certifications/cert-5.webp",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-primary text-text-inverse py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 17, 34, 0.95) 30%, rgba(10, 17, 34, 0.6) 100%), url('/images/headers/about-us.webp')`
          }}
        />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full flex flex-col space-y-4 z-10">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Get to Know Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Story</h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            European precision engineered for high-performance buildings.
          </p>
        </div>
      </section>

      {/* History and Mission */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">
              Founded on European Standards
            </h2>
            <div className="w-12 h-1 bg-accent" />
            <p className="text-text-secondary leading-relaxed">
              Olympic Windows is a European-based leader specializing in premium aluminum window and door systems. Invited by the Lodha Group to support their premier developments in 2012, we successfully established a dedicated state-of-the-art manufacturing infrastructure in Mumbai, India.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We leverage advanced technology, automated cutting machinery, and structural engineering to design window systems that endure extreme monsoon cycles, prevent dust ingress, and isolate high-decibel city noises.
            </p>
            <p className="text-text-secondary leading-relaxed">
              With over 100,000 units delivered, we are a key provider for architects, builders, and developers who prioritize clean alignments, zero defects, and high performance.
            </p>
          </div>

          <div className="lg:col-span-5 bg-surface-alt border border-border-custom/40 p-8 flex flex-col justify-between rounded-sm">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-bold font-accent">Company Vision</span>
              <h3 className="text-2xl font-bold text-primary mt-2">Setting the Horizon</h3>
              <p className="text-sm text-text-secondary mt-4 leading-relaxed">
                "To become the primary high-end fenestration choice for modern building landmarks, marrying design and structure to foster green, sustainable spaces."
              </p>
            </div>
            <div className="border-t border-border-custom/30 pt-6 mt-8">
              <p className="text-xs text-text-muted font-medium">Headquartered in Mumbai, India</p>
              <p className="text-xs text-text-muted mt-0.5">International Office: London, UK</p>
            </div>
          </div>
        </div>
      </section>
      {/* Fabrication Unit and Warehouse */}
      <section className="bg-surface-alt py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-primary-dark border border-border-custom/40 rounded-sm shadow-card overflow-hidden group">
            <Image
              src="/images/general/workshop.webp"
              alt="Olympic Windows Fabrication Unit and Warehouse"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-103"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Production Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">
              Fabrication Unit And Warehouse
            </h2>
            <div className="w-12 h-1 bg-accent" />
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base">
              <p>
                Our manufacturing facility is situated at our dedicated <strong>Usatane, Dombivli</strong> location (<strong>Khoni - Taloja Bypass Road, Maharashtra</strong>). This is where raw materials—including extruded aluminum, specialized hardware, and glass—are engineered and transformed into finished window and door frames.
              </p>
              <p>
                The facility is optimized with modern production lines, precision assembly areas, advanced quality control check zones, and administrative offices. This infrastructure supports our high-volume output capacity of up to <strong>7,500 units per month</strong>, allowing us to reliably deliver zero-defect window systems for massive B2B developments across India.
              </p>
            </div>
            <div className="pt-2 flex items-center space-x-6">
              <div className="border-l-2 border-accent pl-4">
                <span className="block text-2xl font-bold text-primary font-accent">100,000+</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">Units Delivered</span>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <span className="block text-2xl font-bold text-primary font-accent">7,500</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">Monthly Units Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-12">
          <div className="text-center flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              The Principles That Guide Us
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="bg-surface-alt border border-border-custom/40 p-8 flex flex-col space-y-4">
                  <div className="h-12 w-12 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold font-accent text-primary">{val.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-12">
          <div className="flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Global Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Where We Operate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* India Location */}
            <div className="border border-border-custom/40 p-8 bg-surface flex flex-col space-y-4">
              <MapPin className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-bold text-primary font-accent">India Factory & Headquarters</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Equipped with automated manufacturing, precision assembly lines, and testing facilities to support massive housing and commercial developments.
              </p>
              <div className="text-xs text-text-muted mt-2">
                <p className="font-semibold text-primary">Mumbai, Maharashtra, India</p>
                <p className="mt-1">Capacity: 7,500 Units / Month</p>
              </div>
            </div>

            {/* London Location */}
            <div className="border border-border-custom/40 p-8 bg-surface flex flex-col space-y-4">
              <MapPin className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-bold text-primary font-accent">London International Office</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Hosting design consultants, engineering advisors, and managing international supply chain standards.
              </p>
              <div className="text-xs text-text-muted mt-2">
                <p className="font-semibold text-primary">London, United Kingdom</p>
                <p className="mt-1">Scope: International Standards & Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and Standards */}
      <section className="bg-surface py-20 border-b border-border-custom/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col space-y-12">
          <div className="text-center flex flex-col space-y-3">
            <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
              Quality Assurance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Certifications & Standards
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-surface-alt border border-border-custom/40 p-6 flex flex-col items-center text-center rounded-sm">
                <div className="h-24 w-full relative mb-4 flex items-center justify-center bg-white/40 rounded-sm p-2 border border-border-custom/10">
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
                <h3 className="text-sm font-bold font-accent text-primary leading-snug">{cert.title}</h3>
                <p className="text-xs text-text-secondary mt-2 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary text-text-inverse py-16">
        <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Want to Discuss Your Design Requirements?</h2>
          <p className="text-text-muted max-w-md text-sm leading-relaxed">
            Get technical data sheets, profile drawings, or talk to our engineers.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white font-accent font-semibold px-8 py-3 text-sm transition-colors"
          >
            Contact Our Technical Team
          </Link>
        </div>
      </section>
    </div>
  );
}
