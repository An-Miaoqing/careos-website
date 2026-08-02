import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import type { AvailabilitySlot, BookingFormData } from "../../../types/booking";
import styles from "./CalendarSelection.module.css";

const toDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const bookingWindowStart = new Date();
bookingWindowStart.setHours(0, 0, 0, 0);
bookingWindowStart.setDate(bookingWindowStart.getDate() + 1);

const bookingWindowEnd = new Date(bookingWindowStart);
bookingWindowEnd.setMonth(bookingWindowEnd.getMonth() + 3);

const generateAvailability = () => {
  const dates: AvailabilitySlot[] = [];

  for (
    const current = new Date(bookingWindowStart);
    current <= bookingWindowEnd;
    current.setDate(current.getDate() + 1)
  ) {
    if (current.getDay() === 0 || current.getDay() === 6) {
      continue;
    }

    const isoDate = toDateKey(current);
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
  }

  return dates;
};

export const availability = generateAvailability();
const availableDates = new Set(availability.map((slot) => slot.date));

type CalendarSelectionProps = {
  form: BookingFormData;
  updateField: (field: keyof BookingFormData, value: string | boolean | null) => void;
  selectedDate: AvailabilitySlot | undefined;
};

export default function CalendarSelection({ form, updateField, selectedDate }: CalendarSelectionProps) {
  const selectedDateValue = form.date ? new Date(`${form.date}T12:00:00`) : undefined;

  return (
    <div>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Schritt 01 · Wunschtermin</p>
        <h3>Wann dürfen wir Sie begleiten?</h3>
        <p>Wählen Sie zuerst einen verfügbaren Tag und anschließend eine Uhrzeit.</p>
      </div>

      <div className={styles.bookingGrid}>
        <div className={styles.calendarCard}>
          <div className={styles.calendarMeta}>
            <span>Verfügbare Termine</span>
            <span><i aria-hidden="true" />Buchbarer Tag</span>
          </div>
          <Calendar
            onChange={(value) => {
              if (value instanceof Date) {
                const isoDate = toDateKey(value);
                updateField("date", isoDate);
                updateField("time", "");
              }
            }}
            value={selectedDateValue}
            minDate={bookingWindowStart}
            maxDate={bookingWindowEnd}
            locale="de-DE"
            className={styles.calendar}
            tileDisabled={({ date, view }) => view === "month" && !availableDates.has(toDateKey(date))}
            tileClassName={({ date }) => {
              const isoDate = toDateKey(date);
              const isSelected = form.date === isoDate;
              return `${styles.dayTile} ${isSelected ? styles.selectedDay : ""}`;
            }}
            tileContent={({ date, view }) => view === "month" && availableDates.has(toDateKey(date)) ? (
              <span className={styles.availabilityDot} aria-hidden="true" />
            ) : null}
            formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: "short" }).replace(".", "")}
            formatMonthYear={(locale, date) => date.toLocaleDateString(locale, { month: "long", year: "numeric" })}
            navigationAriaLabel="Kalendermonat auswählen"
            prevAriaLabel="Vorheriger Monat"
            nextAriaLabel="Nächster Monat"
            prevLabel={<span aria-hidden="true">←</span>}
            nextLabel={<span aria-hidden="true">→</span>}
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
          />
        </div>

        <div className={styles.sidebar}>
          <aside className={styles.selectionCard}>
            <div className={styles.selectionHeading}>
              <span>Ihre Auswahl</span>
              <i aria-hidden="true">✓</i>
            </div>
            <div className={styles.selectionDetails}>
              <div>
                <span>Datum</span>
                <strong>{selectedDate?.label ?? "Noch nicht gewählt"}</strong>
              </div>
              <div>
                <span>Uhrzeit</span>
                <strong>{form.time ? `${form.time} Uhr` : "Noch nicht gewählt"}</strong>
              </div>
            </div>
            <p className={styles.selectionHint}>
              {form.date && form.time
                ? "Ihr Wunschtermin ist bereit für den nächsten Schritt."
                : "Datum und Uhrzeit können später vor dem Absenden noch einmal geprüft werden."}
            </p>
          </aside>

          <div className={styles.timeCard}>
            <div>
              <span className={styles.timeEyebrow}>Verfügbare Uhrzeiten</span>
              <h4>{selectedDate?.label ?? "Zuerst Datum wählen"}</h4>
            </div>
            {selectedDate ? (
              <div className={styles.timeSlots}>
                {selectedDate.slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => updateField("time", slot)}
                    className={form.time === slot ? styles.selectedTime : undefined}
                    aria-pressed={form.time === slot}
                  >
                    <span>{slot}</span>
                    <small>Uhr</small>
                  </button>
                ))}
              </div>
            ) : (
              <p className={styles.timeEmpty}>Die verfügbaren Zeiten erscheinen nach der Datumswahl.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
