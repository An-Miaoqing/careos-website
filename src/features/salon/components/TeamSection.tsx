import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import TeamMemberCard from "./TeamMemberCard";
import { team } from "../../../content/salon/team";

export default function TeamSection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={team.label} title={team.title} description={team.intro} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </Section>
  );
}
