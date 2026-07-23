import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Testimonial from "../../../shared/components/Testimonial/Testimonial";
import { testimonials } from "../../../content/alltagshilfe/testimonials";

export default function TestimonialsSection() {
  return (
    <Section>
      <SectionTitle eyebrow={testimonials.label} title={testimonials.title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.items.map((item) => (
          <Testimonial key={item.id} quote={item.quote} name={item.name} relation={item.relation} />
        ))}
      </div>
    </Section>
  );
}
