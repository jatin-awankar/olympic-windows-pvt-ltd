import { Star } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { testimonial } from "@/data/home";

export default function TestimonialSection() {
  return (
    <Section className="bg-primary-light border-b border-border-custom/20">
      <Container className="max-w-4xl text-center flex flex-col items-center space-y-6">
        <div className="flex space-x-1 text-accent">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <blockquote className="text-lg md:text-2xl font-light italic leading-relaxed text-text-inverse/90">
          "{testimonial.quote}"
        </blockquote>
        <div className="border-t border-accent/30 w-16 my-2" />
        <div>
          <p className="font-accent font-bold text-text-inverse">{testimonial.author}</p>
          <p className="text-xs text-text-muted mt-0.5">{testimonial.title}</p>
        </div>
      </Container>
    </Section>
  );
}
