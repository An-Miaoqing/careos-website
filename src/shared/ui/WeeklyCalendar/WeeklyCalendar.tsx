import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/icons";
import Button from "../../components/Button/Button";

export type CalendarEvent = {
  id: string;
  title: string;
  time: string;
  price: string;
  description: string;
};

export type CalendarDay = {
  day: string;
  date: string;
  events: CalendarEvent[];
};

export type CalendarWeek = {
  weekLabel: string;
  days: CalendarDay[];
};

type SelectedEvent = CalendarEvent & { day: string; date: string };

type WeeklyCalendarProps = {
  weeks: CalendarWeek[];
  emptyDayLabel: string;
  ariaLabel: string;
  location: string;
  detailCta: { label: string; href: string };
};

export default function WeeklyCalendar({ weeks, emptyDayLabel, ariaLabel, location, detailCta }: WeeklyCalendarProps) {
  const [activeWeek, setActiveWeek] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(null);

  if (weeks.length === 0) {
    return null;
  }

  const week = weeks[activeWeek];
  const atStart = activeWeek === 0;
  const atEnd = activeWeek === weeks.length - 1;

  const goToWeek = (index: number) => {
    setActiveWeek(index);
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg font-bold text-teal">{week.weekLabel}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goToWeek(Math.max(0, activeWeek - 1))}
            disabled={atStart}
            aria-label="Vorherige Woche"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-teal shadow-sm transition-opacity hover:bg-teal-light disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goToWeek(Math.min(weeks.length - 1, activeWeek + 1))}
            disabled={atEnd}
            aria-label="Nächste Woche"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-teal shadow-sm transition-opacity hover:bg-teal-light disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7" role="region" aria-label={ariaLabel}>
        {week.days.map((dayEntry) => (
          <div
            key={dayEntry.day}
            className={`rounded-2xl border p-2 ${
              dayEntry.events.length > 0 ? "border-teal/20 bg-white" : "border-grey-light bg-white/60"
            }`}
          >
            <p className="text-sm font-bold uppercase tracking-wide text-teal">{dayEntry.day}</p>
            <p className="text-xs text-grey-soft">{dayEntry.date}</p>

            {dayEntry.events.length > 0 ? (
              <div className="mt-2 space-y-1">
                {dayEntry.events.map((event) => {
                  const isSelected = selectedEvent?.id === event.id;
                  return (
                    <button
                      key={event.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedEvent({ ...event, day: dayEntry.day, date: dayEntry.date })}
                      className={`w-full rounded-lg px-2 py-1.5 text-left transition-colors ${
                        isSelected ? "bg-teal-light" : "hover:bg-teal-light/50"
                      }`}
                    >
                      <p className="text-sm font-bold text-gray-900">{event.title}</p>
                      <p className="text-xs text-grey-soft">{event.time} Uhr</p>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="mt-2 text-sm text-grey-soft">{emptyDayLabel}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-teal/15 bg-white p-6" aria-live="polite">
        {selectedEvent ? (
          <>
            <p className="text-sm text-grey-soft">
              {selectedEvent.day} · {selectedEvent.date}
            </p>
            <h3 className="mt-1 text-xl font-bold text-gray-900">{selectedEvent.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-700">{selectedEvent.description}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-grey-soft">
              <span>{selectedEvent.time} Uhr</span>
              <span>{selectedEvent.price}</span>
              <span>{location}</span>
            </div>
            <div className="mt-6">
              <Button to={detailCta.href} variant="secondary">
                {detailCta.label}
              </Button>
            </div>
          </>
        ) : (
          <p className="text-base text-grey-soft">Wählen Sie eine Veranstaltung aus, um Details zu sehen.</p>
        )}
      </div>

      {weeks.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label={`${ariaLabel} – Wochen`}>
          {weeks.map((weekOption, index) => (
            <button
              key={weekOption.weekLabel}
              type="button"
              role="tab"
              aria-selected={index === activeWeek}
              aria-label={`Woche ${index + 1} von ${weeks.length}`}
              onClick={() => goToWeek(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeWeek ? "w-6 bg-teal" : "w-2.5 bg-grey-light hover:bg-teal/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
