import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function FabricationSection() {
  return (
    <Section variant="surface-alt" hasBorder>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
      </Container>
    </Section>
  );
}
