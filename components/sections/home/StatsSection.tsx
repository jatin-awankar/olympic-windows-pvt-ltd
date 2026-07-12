import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { stats } from "@/data/home";

export default function StatsSection() {
  return (
    <Section variant="surface" className="py-12" hasBorder>
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center py-4 ${
              i !== stats.length - 1 ? "md:border-r border-border-custom/30" : ""
            }`}
          >
            <span className="font-accent text-4xl md:text-5xl font-bold text-accent">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm text-text-secondary mt-1 font-accent font-semibold uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </Container>
    </Section>
  );
}
