import type { BookingDuration, BookingFormData } from "../../../types/booking";

export const durations: BookingDuration[] = [
  { id: "2h", label: "2 Stunden", hours: 2, price: "ab 50 €" },
  { id: "4h", label: "4 Stunden", hours: 4, price: "ab 100 €" },
  { id: "6h", label: "6 Stunden", hours: 6, price: "ab 150 €" },
  { id: "custom", label: "Individuell", hours: null, price: "auf Anfrage" },
];

type DurationSelectionProps = {
  form: BookingFormData;
  updateField: (field: keyof BookingFormData, value: string | boolean | null) => void;
};

export default function DurationSelection({ form, updateField }: DurationSelectionProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {durations.map((duration) => (
        <button
          key={duration.id}
          type="button"
          onClick={() => updateField("durationId", duration.id)}
          className={`rounded-[1.5rem] border p-6 text-left transition-all ${
            form.durationId === duration.id
              ? "border-orange bg-orange-light/60 shadow-sm"
              : "border-grey-light bg-white hover:border-orange/40"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-extrabold text-gray-900">{duration.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {duration.hours ? `Für etwa ${duration.hours} Stunden Betreuung.` : "Flexible Dauer passend zu Ihrem Bedarf."}
              </p>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange shadow-sm">
              {duration.price}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
