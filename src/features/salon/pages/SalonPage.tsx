import Seo from "../../../shared/components/Seo/Seo";
import Hero from "../../../shared/components/Hero/Hero";
import CTABanner from "../../../shared/components/CTABanner/CTABanner";
import IntroductionSection from "../components/IntroductionSection";
import WhatIsSalonClubSection from "../components/WhatIsSalonClubSection";
import ActivitiesSection from "../components/ActivitiesSection";
import WeeklyProgrammeSection from "../components/WeeklyProgrammeSection";
import EventsSection from "../components/EventsSection";
import GallerySection from "../components/GallerySection";
import VenueSection from "../components/VenueSection";
import TeamSection from "../components/TeamSection";
import AudienceSection from "../components/AudienceSection";
import FaqSection from "../components/FaqSection";
import { hero } from "../../../content/salon/hero";
import { membershipCta, contactCta } from "../../../content/salon/cta";

export default function SalonPage() {
  return (
    <>
      <Seo
        title="Der Gut Begleitet Salon | Gut Begleitet"
        description="Der Gut Begleitet Salon in Wien: Gemeinschaft, Kultur und Aktivitäten für Senioren und Angehörige. Kaffee, Workshops, Events und mehr im Kepinski Studio."
        canonicalUrl="https://gutbegleitet.org/salon"
        ogImage="https://gutbegleitet.org/salon-activity-1.png"
      />

      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.subheadline}
        backgroundImage={hero.backgroundImage}
        backgroundAlt={hero.backgroundAlt}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <IntroductionSection />
      <WhatIsSalonClubSection />
      <ActivitiesSection />
      <WeeklyProgrammeSection />
      <EventsSection />
      <GallerySection />
      <VenueSection />
      <TeamSection />
      <AudienceSection />
      <FaqSection />

      <CTABanner
        title={membershipCta.title}
        description={membershipCta.description}
        buttonLabel={membershipCta.buttonLabel}
        buttonHref={membershipCta.buttonHref}
      />

      <CTABanner
        title={contactCta.title}
        description={contactCta.description}
        buttonLabel={contactCta.buttonLabel}
        buttonHref={contactCta.buttonHref}
      />
    </>
  );
}
