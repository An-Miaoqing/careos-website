import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import ProcessSteps from "../../../shared/components/ProcessSteps/ProcessSteps";
import { roadmap } from "../../../content/friend/roadmap";

export default function RoadmapSection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={roadmap.label} title={roadmap.title} />
      <div className="mt-10">
        <ProcessSteps steps={roadmap.stages} activeIndex={roadmap.activeIndex} activeLabel={roadmap.activeLabel} />
      </div>
    </Section>
  );
}
