import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import { concept } from "../../../content/friend/concept";

export default function ConceptSection() {
  return (
    <Section id="konzept" background="teal-light">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow={concept.label} title={concept.title} align="left" />
          <p className="mt-6 text-lg leading-relaxed text-gray-700">{concept.text}</p>
        </div>
        <img
          src={concept.image}
          alt={concept.imageAlt}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
    </Section>
  );
}
