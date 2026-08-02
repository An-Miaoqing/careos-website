import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import { CheckIcon } from "../../../shared/components/icons";
import { comparison } from "../../../content/friend/comparison";

export default function ComparisonSection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={comparison.label} title={comparison.title} description={comparison.description} />
      <div className="mt-10 space-y-6">
        {comparison.items.map((item) => (
          <div
            key={item.id}
            className="grid gap-4 rounded-3xl border border-grey-light bg-white p-6 shadow-sm sm:grid-cols-[1fr_1.4fr] sm:items-center"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-grey-soft">{item.label}</p>
              <p className="mt-2 text-base text-gray-600">{item.otherText}</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-teal-light/60 p-4">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <p className="text-base font-semibold text-gray-900">{item.friendText}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
