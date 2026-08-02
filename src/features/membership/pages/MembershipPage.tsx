import Seo from "../../../shared/components/Seo/Seo";
import Hero from "../../../shared/components/Hero/Hero";
import CTABanner from "../../../shared/components/CTABanner/CTABanner";
import IntroductionSection from "../components/IntroductionSection";
import ParticipationSection from "../components/ParticipationSection";
import BenefitsSection from "../components/BenefitsSection";
import ProcessSection from "../components/ProcessSection";
import RegistrationSection from "../components/RegistrationSection";
import FaqSection from "../components/FaqSection";
import RelatedServicesSection from "../components/RelatedServicesSection";
import { hero } from "../../../content/membership/hero";
import { contactCta } from "../../../content/membership/cta";

export default function MembershipPage() {
  return (
    <>
      <Seo
        title="Mitglied werden | Gut Begleitet"
        description="Werden Sie Teil von Gut Begleitet — als Club-Mitglied, Familie, Freiwillige:r oder Partnerorganisation. Registrieren Sie unverbindlich Ihr Interesse."
        canonicalUrl="https://gutbegleitet.org/mitgliedschaft"
        ogImage="https://gutbegleitet.org/home-page-2.jpeg"
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
      <ParticipationSection />
      <BenefitsSection />
      <ProcessSection />
      <RegistrationSection />
      <FaqSection />
      <RelatedServicesSection />

      <CTABanner
        title={contactCta.title}
        description={contactCta.description}
        buttonLabel={contactCta.buttonLabel}
        buttonHref={contactCta.buttonHref}
      />
    </>
  );
}
