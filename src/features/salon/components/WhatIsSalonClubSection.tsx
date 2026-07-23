import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import { whatIsSalonClub } from "../../../content/salon/introduction";

export default function WhatIsSalonClubSection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={whatIsSalonClub.label} title={whatIsSalonClub.title} />
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
        {whatIsSalonClub.text}
      </p>
    </Section>
  );
}
