import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import { introduction } from "../../../content/salon/introduction";

export default function IntroductionSection() {
  return (
    <Section background="white">
      <SectionTitle eyebrow={introduction.label} title={introduction.title} />
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
        {introduction.text}
      </p>
    </Section>
  );
}
