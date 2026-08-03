import Hero from "../../../shared/components/Hero/Hero";
import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import CTABanner from "../../../shared/components/CTABanner/CTABanner";
import ComingSoon from "../../../shared/components/ComingSoon/ComingSoon";
import TeaserBanner from "../../../shared/components/TeaserBanner/TeaserBanner";
import CarouselCard from "../components/CarouselCard";
import { carouselCards } from "../../../content/landing/carousel";

const displayItems = carouselCards.filter((card) => card.type !== "more");

export default function NewsPage() {
  return (
    <>
      <Hero
        eyebrow="News & Events"
        title="Neuigkeiten & Veranstaltungen"
        description="Alles Aktuelle von Gut Begleitet — Neuigkeiten, Veranstaltungen und Projekte auf einen Blick"
      />

      <TeaserBanner
        label="Bald verfügbar"
        title="Gut Begleitet Friend — KI-Begleiter kommt bald"
        description="Unser smarter Tischbegleiter befindet sich in der Entwicklung. Tragen Sie sich auf die Warteliste ein."
        ctaLabel="Mehr erfahren"
        ctaHref="/friend"
      />

      <Section background="white">
        <SectionTitle align="left" eyebrow="Alles auf einen Blick" title="Neuigkeiten, Veranstaltungen & Projekte" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((card) => (
            <CarouselCard key={card.id} card={card} />
          ))}
        </div>
      </Section>

      <ComingSoon
        title="Social Media & weitere Formate"
        description="Schon bald finden Sie hier auch Beiträge aus sozialen Netzwerken und weitere Ankündigungen rund um Gut Begleitet"
      />

      <CTABanner />
    </>
  );
}
