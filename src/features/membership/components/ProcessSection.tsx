import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import ProcessSteps from "../../../shared/components/ProcessSteps/ProcessSteps";
import { process } from "../../../content/membership/process";

export default function ProcessSection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={process.label} title={process.title} />
      <div className="mt-10">
        <ProcessSteps steps={process.steps} />
      </div>
    </Section>
  );
}
