import type { SalonEvent } from "../../../content/salon/events";
import type { CalendarWeek } from "../../../shared/ui/WeeklyCalendar/WeeklyCalendar";

export const GERMAN_MONTHS: Record<string, number> = {
  Januar: 0,
  Februar: 1,
  März: 2,
  April: 3,
  Mai: 4,
  Juni: 5,
  Juli: 6,
  August: 7,
  September: 8,
  Oktober: 9,
  November: 10,
  Dezember: 11,
};

export const GERMAN_MONTH_NAMES = Object.keys(GERMAN_MONTHS);

export const WEEKDAY_LABELS = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

export function parseEventDate(dateText: string): Date {
  const match = dateText.match(/(\d{1,2})\.\s+(\S+)\s+(\d{4})/);
  if (!match) {
    throw new Error(`Unrecognized event date format: "${dateText}"`);
  }
  const [, day, monthName, year] = match;
  const month = GERMAN_MONTHS[monthName];
  return new Date(Number(year), month, Number(day));
}

export function monthKeyOf(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}`;
}

function mondayOf(date: Date): Date {
  const weekdayIndex = (date.getDay() + 6) % 7; // 0 = Monday
  const monday = new Date(date);
  monday.setDate(date.getDate() - weekdayIndex);
  monday.setHours(0, 0, 0, 0);
  return monday;
}

function formatWeekLabel(monday: Date): string {
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const fmt = (d: Date) => `${d.getDate()}.${d.getMonth() + 1}.`;
  return `${fmt(monday)} – ${fmt(sunday)}${sunday.getFullYear()}`;
}

function formatDayDate(date: Date): string {
  return `${date.getDate()}.${date.getMonth() + 1}.`;
}

export function buildWeeklySchedule(events: SalonEvent[]): CalendarWeek[] {
  const eventsWithDates = events.map((event) => ({ event, date: parseEventDate(event.date) }));

  const weekStarts = Array.from(
    new Set(eventsWithDates.map(({ date }) => mondayOf(date).getTime())),
  ).sort((a, b) => a - b);

  return weekStarts.map((weekStartTime) => {
    const monday = new Date(weekStartTime);

    const days = WEEKDAY_LABELS.map((label, index) => {
      const dayDate = new Date(monday);
      dayDate.setDate(monday.getDate() + index);

      const dayEvents = eventsWithDates
        .filter(({ date }) => date.toDateString() === dayDate.toDateString())
        .map(({ event }) => ({
          id: event.id,
          title: event.title,
          time: event.time,
          price: event.price,
          description: event.description,
          categoryId: event.categoryId,
        }));

      return { day: label, date: formatDayDate(dayDate), events: dayEvents };
    });

    return { weekLabel: formatWeekLabel(monday), monthKey: monthKeyOf(monday), days };
  });
}
