import type { HelperProfile } from "../../../content/alltagshilfe/trust";
import { CheckIcon } from "../../../shared/components/icons";

export default function HelperProfileCard({ profile }: { profile: HelperProfile }) {
  const initial = profile.name.charAt(0);

  return (
    <article className="flex flex-col rounded-3xl border border-grey-light bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-teal-light text-3xl font-extrabold text-teal"
        >
          {initial}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{profile.name}</h3>
          <p className="text-base text-grey-soft">
            {profile.role} · {profile.since}
          </p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-base leading-relaxed text-gray-700">{profile.bio}</p>

      <ul className="mt-4 space-y-2">
        {profile.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-base font-semibold text-gray-800">
            <CheckIcon className="h-5 w-5 shrink-0 text-teal" />
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
