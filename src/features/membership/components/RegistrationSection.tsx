import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import InterestForm from "../../../shared/components/InterestForm/InterestForm";
import { participation } from "../../../content/membership/participation";

export default function RegistrationSection() {
  return (
    <Section id="interesse" background="white">
      <SectionTitle
        eyebrow="Interesse registrieren"
        title="Registrieren Sie unverbindlich Ihr Interesse"
        description="Erzählen Sie uns, woran Sie interessiert sind — wir melden uns persönlich bei Ihnen."
      />
      <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-grey-light bg-beige p-6 shadow-sm sm:p-8">
        <InterestForm interestOptions={participation.options.map((option) => option.label)} />
      </div>
    </Section>
  );
}
