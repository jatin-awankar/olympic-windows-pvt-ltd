import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function FeaturedVideo() {
  return (
    <Section variant="surface" className="py-16" hasBorder>
      <Container className="flex flex-col space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-accent">Featured Corporate Video</h2>
          <div className="w-12 h-1 bg-accent mx-auto" />
          <p className="text-sm text-text-secondary leading-relaxed">
            Take a virtual walkthrough of our engineering processes and custom glazing installations.
          </p>
        </div>

        <div className="relative aspect-video max-w-4xl mx-auto w-full bg-primary-dark border border-border-custom/40 rounded-sm shadow-card overflow-hidden group">
          <video
            autoPlay
            loop
            controls
            playsInline
            preload="auto"
            poster="/images/headers/projects.webp"
            className="absolute inset-0 w-full h-full object-cover z-10"
          >
            <source src="/video.webm" type="video/webm" />
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </Section>
  );
}
