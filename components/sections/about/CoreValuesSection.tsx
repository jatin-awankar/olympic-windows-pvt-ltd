import { ShieldCheck, Target, Award } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { values } from "@/data/about";

const iconMap = { ShieldCheck, Target, Award };

export default function CoreValuesSection() {
  return (
    <Section variant="surface" hasBorder>
      <Container className="flex flex-col space-y-12">
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
            const Icon = iconMap[val.iconName];
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
      </Container>
    </Section>
  );
}
