import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Accordion from "../../../shared/components/Accordion/Accordion";
import { faq } from "../../../content/friend/faq";

export default function FaqSection() {
  return (
    <Section id="faq" background="white">
      <SectionTitle eyebrow={faq.label} title={faq.title} />
      <div className="mx-auto mt-10 max-w-3xl space-y-4">
        {faq.items.map((item) => (
          <Accordion key={item.id} title={<h3 className="text-lg font-bold text-gray-900">{item.question}</h3>}>
            <p>{item.answer}</p>
          </Accordion>
        ))}
      </div>
    </Section>
  );
}
