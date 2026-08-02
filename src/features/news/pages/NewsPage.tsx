import Hero from "../../../shared/components/Hero/Hero";
import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import CTABanner from "../../../shared/components/CTABanner/CTABanner";
import ComingSoon from "../../../shared/components/ComingSoon/ComingSoon";
import TeaserBanner from "../../../shared/components/TeaserBanner/TeaserBanner";
import NewsCard from "../components/NewsCard";
import EventCard from "../components/EventCard";
import ProjectCard from "../components/ProjectCard";
import { carouselCards } from "../../../content/landing/carousel";
import type { NewsCarouselCard, EventCarouselCard, ProjectCarouselCard } from "../../../content/landing/carousel";

const newsItems = carouselCards.filter((card): card is NewsCarouselCard => card.type === "news");
const eventItems = carouselCards.filter((card): card is EventCarouselCard => card.type === "event");
const projectItems = carouselCards.filter((card): card is ProjectCarouselCard => card.type === "project");

export default function NewsPage() {
  return (
    <>
      <Hero
        eyebrow="News & Events"
        title="Neuigkeiten & Veranstaltungen"
        description="Alles Aktuelle von Gut Begleitet — Neuigkeiten, Veranstaltungen und Projekte auf einen Blick."
      />

      <TeaserBanner
        label="Bald verfügbar"
        title="Gut Begleitet Friend — KI-Begleiter kommt bald"
        description="Unser smarter Tischbegleiter befindet sich in der Entwicklung. Tragen Sie sich auf die Warteliste ein."
        ctaLabel="Mehr erfahren"
        ctaHref="/friend"
      />

      <Section background="white">
        <SectionTitle align="left" eyebrow="Neuigkeiten" title="Was bei uns passiert" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((card) => (
            <NewsCard key={card.id} card={card} />
          ))}
        </div>
      </Section>

      <Section background="teal-light">
        <SectionTitle align="left" eyebrow="Veranstaltungen" title="Kommende Termine" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventItems.map((card) => (
            <EventCard key={card.id} card={card} />
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionTitle align="left" eyebrow="Community & Projekte" title="Was sich bei uns entwickelt" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectItems.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </div>
      </Section>

      <ComingSoon
        title="Social Media & weitere Formate"
        description="Schon bald finden Sie hier auch Beiträge aus sozialen Netzwerken und weitere Ankündigungen rund um Gut Begleitet."
      />

      <CTABanner />
    </>
  );
}
