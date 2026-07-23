export type WeeklyProgrammeDay = {
  day: string;
  activity: string | null;
  time?: string;
  note?: string;
};

type WeeklyProgrammeProps = {
  days: WeeklyProgrammeDay[];
};

export default function WeeklyProgramme({ days }: WeeklyProgrammeProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
      {days.map((entry) => (
        <div
          key={entry.day}
          className={`rounded-2xl border p-5 text-center ${
            entry.activity ? "border-teal/20 bg-teal-light/50" : "border-grey-light bg-white"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-wide text-teal">{entry.day}</p>
          {entry.activity ? (
            <>
              <p className="mt-2 text-base font-bold text-gray-900">{entry.activity}</p>
              {entry.time && <p className="mt-1 text-sm text-gray-600">{entry.time} Uhr</p>}
            </>
          ) : (
            <p className="mt-2 text-sm text-grey-soft">{entry.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}
