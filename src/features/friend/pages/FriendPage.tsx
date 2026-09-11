import Seo from "../../../shared/components/Seo/Seo";
import Hero from "../../../shared/components/Hero/Hero";
import CTABanner from "../../../shared/components/CTABanner/CTABanner";
import IntroductionSection from "../components/IntroductionSection";
import ConceptSection from "../components/ConceptSection";
import HowFriendHelpsSection from "../components/HowFriendHelpsSection";
import ComparisonSection from "../components/ComparisonSection";
import FeaturesSection from "../components/FeaturesSection";
import PrivacySection from "../components/PrivacySection";
import AudienceSection from "../components/AudienceSection";
import RoadmapSection from "../components/RoadmapSection";
import FaqSection from "../components/FaqSection";
import { hero } from "../../../content/friend/hero";
import { waitlistCta } from "../../../content/friend/cta";

export default function FriendPage() {
  return (
    <>
      <Seo
        title="Companion Friend | Companion"
        description="Companion Friend ist ein ruhiger, digitaler Begleiter für zu Hause — Gespräche, Erinnerungen und Verbindung zur Familie, ohne komplizierte Technik."
        canonicalUrl="https://gutbegleitet.org/friend"
        ogImage="https://gutbegleitet.org/gut-friend-1.png"
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
      <ConceptSection />
      <HowFriendHelpsSection />
      <ComparisonSection />
      <FeaturesSection />
      <PrivacySection />
      <AudienceSection />
      <RoadmapSection />
      <FaqSection />

      <CTABanner
        title={waitlistCta.title}
        description={waitlistCta.description}
        buttonLabel={waitlistCta.buttonLabel}
        buttonHref={waitlistCta.buttonHref}
      />
    </>
  );
}
