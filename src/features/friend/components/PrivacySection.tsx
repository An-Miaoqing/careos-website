import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Card from "../../../shared/components/Card/Card";
import { ServiceIcon } from "../../../shared/components/icons";
import { privacy } from "../../../content/friend/privacy";

export default function PrivacySection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={privacy.label} title={privacy.title} description={privacy.description} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {privacy.points.map((point) => (
          <Card key={point.id} className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-white">
              <ServiceIcon name={point.icon} className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
              <p className="mt-2 text-base text-gray-700">{point.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
