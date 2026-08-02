import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import PricingCard from "../../../shared/components/PricingCard/PricingCard";
import { pricing } from "../../../content/alltagshilfe/pricing";

export default function PricingSection() {
  return (
    <Section id="preise" background="white">
      <SectionTitle eyebrow={pricing.label} title={pricing.title} />
      <div className="mt-10">
        <PricingCard
          rate={pricing.hourlyRate}
          bullets={pricing.bullets}
          notes={[pricing.packagesNote, pricing.minimumBookingNote, pricing.paymentMethodsNote]}
        />
      </div>
    </Section>
  );
}
