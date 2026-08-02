type PricingCardProps = {
  rate: string;
  bullets: string[];
  notes?: string[];
};

export default function PricingCard({ rate, bullets, notes = [] }: PricingCardProps) {
  return (
    <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-teal/10 bg-white/90 p-8 text-center shadow-sm sm:p-10">
      <p className="text-5xl font-black text-teal sm:text-6xl">{rate}</p>
      <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left text-lg text-gray-700">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3 rounded-2xl bg-teal-light/50 px-4 py-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {notes.map((note) => (
        <p key={note} className="mt-6 text-lg leading-relaxed text-gray-700">
          {note}
        </p>
      ))}
    </div>
  );
}
