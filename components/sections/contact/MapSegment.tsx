import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { contactConfig } from "@/data/contact";

export default function MapSegment() {
  const { maps } = contactConfig;

  return (
    <Section variant="surface-alt" className="py-16">
      <Container className="flex flex-col items-center space-y-8">
        <div className="space-y-2 text-center">
          <h3 className="font-accent font-bold text-2xl text-primary">Our Locations</h3>
          <p className="text-xs text-text-secondary max-w-lg mx-auto leading-relaxed">
            With a factory in India and an office in London, we're strategically positioned to serve our clients efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* India Factory Map */}
          <div className="flex flex-col space-y-4">
            <div className="text-center space-y-1">
              <h4 className="font-accent font-bold text-lg text-primary">India Factory</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                F11, 12 Balaji Plaza, Khoni - Taloja Bypass Road, Usatane, Maharashtra.
              </p>
            </div>
            <div className="w-full aspect-video border border-border-custom/40 rounded-sm overflow-hidden bg-slate-100 shadow-md">
              <iframe
                src={maps.indiaUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Olympic Windows India Factory & HQ Location"
              />
            </div>
          </div>

          {/* London Office Map */}
          <div className="flex flex-col space-y-4">
            <div className="text-center space-y-1">
              <h4 className="font-accent font-bold text-lg text-primary">London Office</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                UNIT 3A, Northgate Business Centre, Collier Row, Romford, London, UK
              </p>
            </div>
            <div className="w-full aspect-video border border-border-custom/40 rounded-sm overflow-hidden bg-slate-100 shadow-md">
              <iframe
                src={maps.londonUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Olympic Windows London Office Location"
              />
            </div>
          </div>
        </div>

        <p className="text-[10px] text-text-muted font-accent uppercase tracking-wider">
          Visits to our manufacturing facilities are strictly by appointment only.
        </p>
      </Container>
    </Section>
  );
}
