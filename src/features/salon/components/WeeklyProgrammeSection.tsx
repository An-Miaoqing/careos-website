import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import WeeklyProgramme from "../../../shared/components/WeeklyProgramme/WeeklyProgramme";
import { programme } from "../../../content/salon/programme";

export default function WeeklyProgrammeSection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={programme.label} title={programme.title} description={programme.description} />
      <div className="mt-10">
        <WeeklyProgramme days={programme.days} />
      </div>
    </Section>
  );
}
