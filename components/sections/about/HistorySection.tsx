import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { vision } from "@/data/about";

export default function HistorySection() {
  return (
    <Section variant="surface" hasBorder>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
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
            <span className="text-xs uppercase tracking-widest text-accent font-bold font-accent">{vision.tagline}</span>
            <h3 className="text-2xl font-bold text-primary mt-2">{vision.title}</h3>
            <p className="text-sm text-text-secondary mt-4 leading-relaxed">
              "{vision.quote}"
            </p>
          </div>
          <div className="border-t border-border-custom/30 pt-6 mt-8">
            <p className="text-xs text-text-muted font-medium">{vision.headquarters}</p>
            <p className="text-xs text-text-muted mt-0.5">{vision.internationalOffice}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
