import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import { CheckIcon } from "../../../shared/components/icons";
import { venue } from "../../../content/salon/venue";

export default function VenueSection() {
  return (
    <Section background="white">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow={venue.label} title={venue.title} align="left" />
          <p className="mt-6 text-lg leading-relaxed text-gray-700">{venue.text}</p>
          <p className="mt-4 text-base font-semibold text-gray-800">
            {venue.address} · <span className="text-teal">{venue.website}</span>
          </p>
        </div>
        <ul className="space-y-3">
          {venue.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 rounded-2xl bg-teal-light/50 px-4 py-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <span className="text-base text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
