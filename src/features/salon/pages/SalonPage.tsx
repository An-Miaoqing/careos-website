import Seo from "../../../shared/components/Seo/Seo";
import Hero from "../../../shared/components/Hero/Hero";
import CTABanner from "../../../shared/components/CTABanner/CTABanner";
import IntroductionSection from "../components/IntroductionSection";
import ActivitiesSection from "../components/ActivitiesSection";
import WeeklyScheduleSection from "../components/WeeklyScheduleSection";
import GallerySection from "../components/GallerySection";
import VenueSection from "../components/VenueSection";
import TeamSection from "../components/TeamSection";
import AudienceSection from "../components/AudienceSection";
import FaqSection from "../components/FaqSection";
import { hero } from "../../../content/salon/hero";
import { communityCta } from "../../../content/salon/cta";

export default function SalonPage() {
  return (
    <>
      <Seo
        title="Der Gut Begleitet Salon | Gut Begleitet"
        description="Der Gut Begleitet Salon in Wien: Gemeinschaft, Kultur und Aktivitäten für Senior:innen und Angehörige. Kaffee, Workshops, Events und mehr im Kepinski Studio."
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
      <ActivitiesSection />
      <WeeklyScheduleSection />
      <GallerySection />
      <VenueSection />
      <TeamSection />
      <AudienceSection />
      <FaqSection />

      <CTABanner
        title={communityCta.title}
        description={communityCta.description}
        buttonLabel={communityCta.primaryLabel}
        buttonHref={communityCta.primaryHref}
        secondaryLabel={communityCta.secondaryLabel}
        secondaryHref={communityCta.secondaryHref}
      />
    </>
  );
}
