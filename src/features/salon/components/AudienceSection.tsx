import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Card from "../../../shared/components/Card/Card";
import { ServiceIcon } from "../../../shared/components/icons";
import { audience } from "../../../content/salon/audience";

export default function AudienceSection() {
  return (
    <Section background="white">
      <SectionTitle eyebrow={audience.label} title={audience.title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {audience.segments.map((segment) => (
          <Card key={segment.id} className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
              <ServiceIcon name={segment.icon} className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{segment.label}</h3>
            <p className="mt-2 text-base text-gray-700">{segment.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
