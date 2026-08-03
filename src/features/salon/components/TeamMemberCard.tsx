import type { TeamMember } from "../../../content/salon/team";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col rounded-3xl border border-grey-light bg-white p-6 shadow-sm">
      <div
        aria-hidden="true"
        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-orange-light text-3xl font-extrabold text-orange-dark"
      >
        {member.name.charAt(0)}
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-900">{member.name}</h3>
      <p className="text-base text-grey-soft">{member.role}</p>
      <p className="mt-3 text-base leading-relaxed text-gray-700">{member.bio}</p>
    </article>
  );
}
