import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { certifications } from "@/data/about";

export default function CertificationsSection() {
  return (
    <Section variant="surface" hasBorder>
      <Container className="flex flex-col space-y-12">
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
      </Container>
    </Section>
  );
}
