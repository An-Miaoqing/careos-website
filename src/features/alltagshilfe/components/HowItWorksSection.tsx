import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import ProcessSteps from "../../../shared/components/ProcessSteps/ProcessSteps";
import { howItWorks } from "../../../content/alltagshilfe/howItWorks";

export default function HowItWorksSection() {
  return (
    <Section>
      <SectionTitle eyebrow={howItWorks.label} title={howItWorks.title} />
      <div className="mt-10">
        <ProcessSteps steps={howItWorks.steps} />
      </div>
    </Section>
  );
}
