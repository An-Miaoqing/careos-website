import { Link } from "react-router-dom";
import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Card from "../../../shared/components/Card/Card";
import { ServiceIcon, ArrowRightIcon } from "../../../shared/components/icons";
import { participation } from "../../../content/membership/participation";

export default function ParticipationSection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={participation.label} title={participation.title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {participation.options.map((option) => (
          <Card key={option.id} className="flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
              <ServiceIcon name={option.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{option.label}</h3>
            <p className="mt-2 flex-1 text-base text-gray-700">{option.description}</p>
            <Link
              to={option.linkHref}
              className="mt-4 inline-flex items-center gap-2 text-base font-bold text-teal hover:text-teal-dark"
            >
              {option.linkLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
