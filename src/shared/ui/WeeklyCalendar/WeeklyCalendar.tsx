import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/icons";
import Button from "../../components/Button/Button";

export type CalendarEvent = {
  id: string;
  title: string;
  time: string;
  price: string;
  description: string;
  categoryId: string;
};

export type CalendarDay = {
  day: string;
  date: string;
  events: CalendarEvent[];
};

export type CalendarWeek = {
  weekLabel: string;
  monthKey: string;
  days: CalendarDay[];
};

export type MonthDay = {
  dayNumber: number;
  dayLabel: string;
  isoDate: string;
  inCurrentMonth: boolean;
  events: CalendarEvent[];
};

export type MonthGrid = {
  monthKey: string;
  monthLabel: string;
  weeks: MonthDay[][];
};

const WEEKDAY_SHORT_LABELS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

type SelectedEvent = CalendarEvent & { day: string; date: string };

type WeeklyCalendarProps = {
  weeks: CalendarWeek[];
  monthGrids: MonthGrid[];
  emptyDayLabel: string;
  ariaLabel: string;
  location: string;
  detailCta: { label: string; href: string };
  categoryColors: Record<string, string>;
};

function findMonthIndex(monthGrids: MonthGrid[], monthKey: string): number {
  const index = monthGrids.findIndex((grid) => grid.monthKey === monthKey);
  return index === -1 ? 0 : index;
}

export default function WeeklyCalendar({
  weeks,
  monthGrids,
  emptyDayLabel,
  ariaLabel,
  location,
  detailCta,
  categoryColors,
}: WeeklyCalendarProps) {
  const [viewMode, setViewMode] = useState<"week" | "month">("week");
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeMonth, setActiveMonth] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(null);

  if (weeks.length === 0) {
    return null;
  }

  const week = weeks[activeWeek];
  const atStart = activeWeek === 0;
  const atEnd = activeWeek === weeks.length - 1;

  const month = monthGrids[activeMonth];
  const atFirstMonth = activeMonth === 0;
  const atLastMonth = activeMonth === monthGrids.length - 1;

  const goToWeek = (index: number) => {
    setActiveWeek(index);
    setSelectedEvent(null);
  };

  const goToMonth = (index: number) => {
    setActiveMonth(index);
    setSelectedEvent(null);
  };

  const toggleView = () => {
    if (viewMode === "week") {
      setActiveMonth(findMonthIndex(monthGrids, week.monthKey));
      setViewMode("month");
    } else {
      setViewMode("week");
    }
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xl font-bold text-teal">{viewMode === "week" ? week.weekLabel : month?.monthLabel}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                viewMode === "week" ? goToWeek(Math.max(0, activeWeek - 1)) : goToMonth(Math.max(0, activeMonth - 1))
              }
              disabled={viewMode === "week" ? atStart : atFirstMonth}
              aria-label={viewMode === "week" ? "Vorherige Woche" : "Vorheriger Monat"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-teal shadow-sm transition-opacity hover:bg-teal-light disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() =>
                viewMode === "week"
                  ? goToWeek(Math.min(weeks.length - 1, activeWeek + 1))
                  : goToMonth(Math.min(monthGrids.length - 1, activeMonth + 1))
              }
              disabled={viewMode === "week" ? atEnd : atLastMonth}
              aria-label={viewMode === "week" ? "Nächste Woche" : "Nächster Monat"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-teal shadow-sm transition-opacity hover:bg-teal-light disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          <button
            type="button"
            onClick={toggleView}
            className="rounded-full border-2 border-teal px-4 py-2 text-sm font-bold text-teal transition-colors hover:bg-teal-light"
          >
            {viewMode === "week" ? "Ganzen Monat anzeigen" : "Zur Wochenansicht"}
          </button>
        </div>
      </div>

      {viewMode === "week" ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7" role="region" aria-label={ariaLabel}>
          {week.days.map((dayEntry) => (
            <div
              key={dayEntry.day}
              className={`min-w-0 rounded-2xl border p-3 ${
                dayEntry.events.length > 0 ? "border-teal/20 bg-white" : "border-grey-light bg-white/60"
              }`}
            >
              <p className="text-base font-bold uppercase tracking-wide text-teal">{dayEntry.day}</p>
              <p className="text-sm text-grey-soft">{dayEntry.date}</p>

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
                        className={`w-full min-w-0 overflow-hidden rounded-lg px-2 py-2 text-left transition-colors ${
                          isSelected ? "bg-teal-light" : "hover:bg-teal-light/50"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <span
                            className={`h-2.5 w-2.5 shrink-0 rounded-full ${categoryColors[event.categoryId] ?? "bg-teal"}`}
                            aria-hidden="true"
                          />
                          <p className="min-w-0 flex-1 truncate text-base font-bold text-gray-900" title={event.title}>
                            {event.title}
                          </p>
                        </div>
                        <p className="mt-0.5 text-sm text-grey-soft">{event.time} Uhr</p>
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
      ) : (
        <div className="mt-6" role="region" aria-label={`${ariaLabel} – Monatsansicht`}>
          <div className="grid grid-cols-7 gap-1 text-center text-sm font-bold uppercase tracking-wide text-teal sm:gap-2">
            {WEEKDAY_SHORT_LABELS.map((label) => (
              <div key={label}>{label}</div>
            ))}
          </div>
          <div className="mt-2 space-y-1 sm:space-y-2">
            {month?.weeks.map((weekRow, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-1 sm:gap-2">
                {weekRow.map((dayCell) => (
                  <div
                    key={dayCell.isoDate}
                    className={`flex min-h-[5.5rem] min-w-0 flex-col gap-1 overflow-hidden rounded-xl border p-1.5 sm:min-h-[7rem] sm:p-2 ${
                      dayCell.inCurrentMonth ? "border-grey-light bg-white" : "border-transparent bg-white/40"
                    }`}
                  >
                    <span
                      className={`text-sm sm:text-base ${
                        dayCell.inCurrentMonth ? "font-semibold text-gray-900" : "text-grey-soft"
                      }`}
                    >
                      {dayCell.dayNumber}
                    </span>
                    <div className="flex min-w-0 flex-col gap-1">
                      {dayCell.events.map((event) => {
                        const isSelected = selectedEvent?.id === event.id;
                        return (
                          <button
                            key={event.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() =>
                              setSelectedEvent({ ...event, day: dayCell.dayLabel, date: `${dayCell.dayNumber}.` })
                            }
                            className={`min-w-0 rounded-md px-1 py-1 text-left transition-colors ${
                              isSelected ? "bg-teal-light" : "hover:bg-teal-light/50"
                            }`}
                          >
                            <div className="flex min-w-0 items-start gap-1.5">
                              <span
                                className={`mt-1 h-2 w-2 shrink-0 rounded-full sm:mt-1.5 ${categoryColors[event.categoryId] ?? "bg-teal"}`}
                                aria-hidden="true"
                              />
                              <span className="hidden min-w-0 flex-1 sm:block">
                                <p className="truncate text-sm font-bold leading-tight text-gray-900" title={event.title}>
                                  {event.title}
                                </p>
                                <p className="truncate text-xs text-grey-soft">{event.time} Uhr</p>
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-teal/15 bg-white p-6" aria-live="polite">
        {selectedEvent ? (
          <>
            <div className="flex items-center gap-2">
              <span
                className={`h-3 w-3 shrink-0 rounded-full ${categoryColors[selectedEvent.categoryId] ?? "bg-teal"}`}
                aria-hidden="true"
              />
              <p className="text-sm text-grey-soft">
                {selectedEvent.day} · {selectedEvent.date}
              </p>
            </div>
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

      {viewMode === "week" && weeks.length > 1 && (
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
