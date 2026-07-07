import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Target, Award, MapPin } from "lucide-react";

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

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-primary text-text-inverse py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
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

      {/* Core Values */}
      <section className="bg-surface-alt py-20 border-b border-border-custom/30">
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
                <div key={val.title} className="bg-surface border border-border-custom/40 p-8 flex flex-col space-y-4">
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
      <section className="bg-surface py-20">
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
            <div className="border border-border-custom/40 p-8 bg-surface-alt flex flex-col space-y-4">
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
            <div className="border border-border-custom/40 p-8 bg-surface-alt flex flex-col space-y-4">
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
