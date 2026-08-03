import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Card from "../../../shared/components/Card/Card";
import { ServiceIcon } from "../../../shared/components/icons";
import { activities } from "../../../content/salon/activities";

export default function ActivitiesSection() {
  return (
    <Section id="aktivitaeten" background="white">
      <SectionTitle eyebrow={activities.label} title={activities.title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.categories.map((category) => (
          <Card key={category.id}>
            <div className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${category.colorClassName}`}>
              <ServiceIcon name={category.icon} className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">{category.label}</h3>
            <ul className="mt-3 space-y-2 text-lg text-gray-700">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
