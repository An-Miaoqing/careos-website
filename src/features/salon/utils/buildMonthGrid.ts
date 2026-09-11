import type { SalonEvent } from "../../../content/salon/events";
import type { MonthGrid } from "../../../shared/ui/WeeklyCalendar/WeeklyCalendar";
import { parseEventDate, monthKeyOf, GERMAN_MONTH_NAMES, WEEKDAY_LABELS } from "./buildWeeklySchedule";

function firstMondayOnOrBefore(date: Date): Date {
  const weekdayIndex = (date.getDay() + 6) % 7; // 0 = Monday
  const result = new Date(date);
  result.setDate(date.getDate() - weekdayIndex);
  return result;
}

export function buildMonthGrids(events: SalonEvent[]): MonthGrid[] {
  const eventsWithDates = events.map((event) => ({ event, date: parseEventDate(event.date) }));

  const monthStarts = Array.from(
    new Set(eventsWithDates.map(({ date }) => `${date.getFullYear()}-${date.getMonth()}`)),
  )
    .map((key) => {
      const [year, month] = key.split("-").map(Number);
      return new Date(year, month, 1);
    })
    .sort((a, b) => a.getTime() - b.getTime());

  return monthStarts.map((firstOfMonth) => {
    const year = firstOfMonth.getFullYear();
    const month = firstOfMonth.getMonth();
    const lastOfMonth = new Date(year, month + 1, 0);

    const gridStart = firstMondayOnOrBefore(firstOfMonth);
    const gridEnd = new Date(lastOfMonth);
    const trailingOffset = 6 - ((lastOfMonth.getDay() + 6) % 7);
    gridEnd.setDate(lastOfMonth.getDate() + trailingOffset);

    const totalDays = Math.round((gridEnd.getTime() - gridStart.getTime()) / 86_400_000) + 1;
    const totalWeeks = totalDays / 7;

    const weeks: MonthGrid["weeks"] = [];
    for (let w = 0; w < totalWeeks; w++) {
      const week: MonthGrid["weeks"][number] = [];
      for (let d = 0; d < 7; d++) {
        const cellDate = new Date(gridStart);
        cellDate.setDate(gridStart.getDate() + w * 7 + d);

        const dayEvents = eventsWithDates
          .filter(({ date }) => date.toDateString() === cellDate.toDateString())
          .map(({ event }) => ({
            id: event.id,
            title: event.title,
            time: event.time,
            price: event.price,
            description: event.description,
            categoryId: event.categoryId,
          }));

        week.push({
          dayNumber: cellDate.getDate(),
          dayLabel: WEEKDAY_LABELS[d],
          isoDate: cellDate.toDateString(),
          inCurrentMonth: cellDate.getMonth() === month,
          events: dayEvents,
        });
      }
      weeks.push(week);
    }

    return { monthKey: monthKeyOf(firstOfMonth), monthLabel: `${GERMAN_MONTH_NAMES[month]} ${year}`, weeks };
  });
}
