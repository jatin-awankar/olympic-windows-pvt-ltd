import { MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { locations } from "@/data/about";

export default function LocationsSection() {
  return (
    <Section variant="surface-alt">
      <Container className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-3">
          <span className="text-accent font-accent font-semibold tracking-wider text-xs uppercase">
            Global Presence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Where We Operate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div key={loc.title} className="border border-border-custom/40 p-8 bg-surface flex flex-col space-y-4">
              <MapPin className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-bold text-primary font-accent">{loc.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {loc.desc}
              </p>
              <div className="text-xs text-text-muted mt-2">
                <p className="font-semibold text-primary">{loc.city}</p>
                <p className="mt-1">{loc.scope}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
