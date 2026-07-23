import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Card from "../../../shared/components/Card/Card";
import { ServiceIcon } from "../../../shared/components/icons";
import { features } from "../../../content/friend/features";

export default function FeaturesSection() {
  return (
    <Section id="funktionen" background="white">
      <SectionTitle eyebrow={features.label} title={features.title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((feature) => (
          <Card key={feature.id}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-white">
              <ServiceIcon name={feature.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-base text-gray-700">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
