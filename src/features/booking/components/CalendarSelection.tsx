import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import type { AvailabilitySlot, BookingFormData } from "../../../types/booking";

const generateAvailability = () => {
  const today = new Date();
  const dates: AvailabilitySlot[] = [];

  for (let i = 0; i < 180; i += 1) {
    const current = new Date(today);
    current.setDate(today.getDate() + i);

    if (current.getDay() === 0 || current.getDay() === 6) {
      continue;
    }

    const isoDate = current.toISOString().slice(0, 10);
    const label = current.toLocaleDateString("de-DE", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    });

    const slots = ["09:00", "10:30", "13:00", "15:30"];
    if (current.getDay() === 3) {
      slots[0] = "08:30";
    }

    dates.push({ date: isoDate, label, slots });

    if (dates.length >= 24) {
      break;
    }
  }

  return dates;
};

export const availability = generateAvailability();

type CalendarSelectionProps = {
  form: BookingFormData;
  updateField: (field: keyof BookingFormData, value: string | boolean | null) => void;
  selectedDate: AvailabilitySlot | undefined;
};

export default function CalendarSelection({ form, updateField, selectedDate }: CalendarSelectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900">Kalender</h3>
          <p className="mt-2 text-base leading-relaxed text-gray-700">
            Wählen Sie ein zukünftiges Datum. Danach erscheinen die verfügbaren Uhrzeiten.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-grey-light bg-white p-3 shadow-sm sm:p-4">
          <Calendar
            onChange={(value) => {
              if (value instanceof Date) {
                const isoDate = value.toISOString().slice(0, 10);
                updateField("date", isoDate);
                updateField("time", "");
              }
            }}
            value={form.date ? new Date(form.date) : undefined}
            minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
            locale="de-DE"
            className="w-full rounded-[1.25rem] border-0"
            tileClassName={({ date }) => {
              const isoDate = date.toISOString().slice(0, 10);
              const isSelected = form.date === isoDate;
              const isToday = date.toDateString() === new Date().toDateString();
              return `rounded-xl ${isSelected ? "bg-teal text-white" : ""} ${isToday ? "font-extrabold ring-2 ring-orange" : ""}`;
            }}
            prev2Label={null}
            next2Label={null}
          />
        </div>

        {selectedDate && (
          <div className="rounded-[1.5rem] border border-grey-light bg-white p-5 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900">Verfügbare Uhrzeiten</h4>
            <p className="mt-1 text-sm text-gray-600">Bitte wählen Sie eine Uhrzeit für {selectedDate.label}.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {selectedDate.slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => updateField("time", slot)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    form.time === slot
                      ? "border-teal bg-teal text-white"
                      : "border-grey-light bg-white text-gray-700 hover:border-teal/40"
                  }`}
                >
                  {slot} Uhr
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-grey-light">
        <h3 className="text-xl font-extrabold text-gray-900">Ihre Auswahl</h3>
        <div className="mt-5 space-y-4 text-sm text-gray-700">
          <div className="rounded-2xl bg-beige p-4">
            <p className="font-semibold text-gray-900">Datum</p>
            <p className="mt-1">{selectedDate?.label ?? "Bitte wählen Sie ein Datum"}</p>
          </div>
          <div className="rounded-2xl bg-beige p-4">
            <p className="font-semibold text-gray-900">Uhrzeit</p>
            <p className="mt-1">{form.time ? `${form.time} Uhr` : "Bitte wählen Sie eine Uhrzeit"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
