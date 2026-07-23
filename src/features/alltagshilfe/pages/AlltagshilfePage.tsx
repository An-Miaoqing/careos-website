import Seo from "../../../shared/components/Seo/Seo";
import Hero from "../../../shared/components/Hero/Hero";
import Section from "../../../shared/components/Section/Section";
import CTABanner from "../../../shared/components/CTABanner/CTABanner";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import PricingSection from "../components/PricingSection";
import TrustSection from "../components/TrustSection";
import FaqSection from "../components/FaqSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { hero } from "../../../content/alltagshilfe/hero";
import { bookingCta, contactCta } from "../../../content/alltagshilfe/cta";

export default function AlltagshilfePage() {
  return (
    <>
      <Seo
        title="Alltagshilfe & Begleitung in Wien | Gut Begleitet"
        description="Alltagshilfe in Wien: Haushalt, Einkauf, Arztbegleitung, Gesellschaft und mehr. Persönlich, verlässlich, flexibel buchbar. Jetzt Beratung anfragen."
        canonicalUrl="https://gutbegleitet.org/alltagshilfe"
        ogImage="https://gutbegleitet.org/gut-begleitet-hero.jpeg"
      />

      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.subheadline} />

      <Section background="white">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700">
          {hero.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />

      <CTABanner
        title={bookingCta.title}
        description={bookingCta.description}
        buttonLabel={bookingCta.buttonLabel}
        buttonHref={bookingCta.buttonHref}
      />

      <TrustSection />
      <FaqSection />
      <TestimonialsSection />

      <CTABanner
        title={contactCta.title}
        description={contactCta.description}
        buttonLabel={contactCta.buttonLabel}
        buttonHref={contactCta.buttonHref}
      />
    </>
  );
}
