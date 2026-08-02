import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import WeeklyCalendar from "../../../shared/ui/WeeklyCalendar/WeeklyCalendar";
import { events, location } from "../../../content/salon/events";
import { schedule } from "../../../content/salon/schedule";
import { buildWeeklySchedule } from "../utils/buildWeeklySchedule";

export default function WeeklyScheduleSection() {
  const weeks = buildWeeklySchedule(events.items);

  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={schedule.label} title={schedule.title} description={schedule.description} />
      <div className="mt-10">
        <WeeklyCalendar
          weeks={weeks}
          emptyDayLabel="Keine Veranstaltung geplant"
          ariaLabel="Wochenprogramm im Salon"
          location={location}
          detailCta={{ label: schedule.ctaLabel, href: schedule.ctaHref }}
        />
      </div>
    </Section>
  );
}
