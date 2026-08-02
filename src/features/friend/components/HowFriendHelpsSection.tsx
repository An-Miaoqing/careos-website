import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Card from "../../../shared/components/Card/Card";
import { ServiceIcon } from "../../../shared/components/icons";
import { helps } from "../../../content/friend/helps";

export default function HowFriendHelpsSection() {
  return (
    <Section background="white">
      <SectionTitle eyebrow={helps.label} title={helps.title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {helps.items.map((item) => (
          <Card key={item.id}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
              <ServiceIcon name={item.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-base text-gray-700">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
