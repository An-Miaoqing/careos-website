import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import WeeklyCalendar from "../../../shared/ui/WeeklyCalendar/WeeklyCalendar";
import { events, location } from "../../../content/salon/events";
import { schedule } from "../../../content/salon/schedule";
import { activities } from "../../../content/salon/activities";
import { buildWeeklySchedule } from "../utils/buildWeeklySchedule";
import { buildMonthGrids } from "../utils/buildMonthGrid";

const categoryColors = Object.fromEntries(
  activities.categories.map((category) => [category.id, category.colorClassName]),
);

export default function WeeklyScheduleSection() {
  const weeks = buildWeeklySchedule(events.items);
  const monthGrids = buildMonthGrids(events.items);

  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={schedule.label} title={schedule.title} description={schedule.description} />
      <div className="mt-10">
        <WeeklyCalendar
          weeks={weeks}
          monthGrids={monthGrids}
          emptyDayLabel="Keine Veranstaltung geplant"
          ariaLabel="Wochenprogramm im Salon"
          location={location}
          detailCta={{ label: schedule.ctaLabel, href: schedule.ctaHref }}
          categoryColors={categoryColors}
        />
      </div>
    </Section>
  );
}
