import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Card from "../../../shared/components/Card/Card";
import { ServiceIcon } from "../../../shared/components/icons";
import { benefits } from "../../../content/membership/benefits";

export default function BenefitsSection() {
  return (
    <Section background="white">
      <SectionTitle eyebrow={benefits.label} title={benefits.title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {benefits.items.map((benefit) => (
          <Card key={benefit.id} className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white">
              <ServiceIcon name={benefit.icon} className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{benefit.title}</h3>
            <p className="mt-2 text-base text-gray-700">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
