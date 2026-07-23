import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Carousel from "../../../shared/ui/Carousel/Carousel";
import SalonEventCard from "./SalonEventCard";
import { events } from "../../../content/salon/events";

export default function EventsSection() {
  return (
    <Section background="white">
      <SectionTitle eyebrow={events.label} title={events.title} description={events.description} />
      <div className="mt-10">
        <Carousel
          items={events.items}
          getKey={(event) => event.id}
          ariaLabel="Kommende Veranstaltungen im Salon"
          renderItem={(event) => <SalonEventCard event={event} />}
        />
      </div>
    </Section>
  );
}
