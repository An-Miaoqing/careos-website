import Hero from "../../../shared/components/Hero/Hero";
import CTABanner from "../../../shared/components/CTABanner/CTABanner";
import ComingSoon from "../../../shared/components/ComingSoon/ComingSoon";

export default function NewsPage() {
  return (
    <>
      <Hero
        eyebrow="News & Events"
        title="Neuigkeiten & Veranstaltungen"
        description="Wir arbeiten derzeit an diesem Bereich."
      />

      <ComingSoon
        title="Neuigkeiten & Veranstaltungen"
        description="Wir arbeiten derzeit an diesem Bereich. Schon bald finden Sie hier aktuelle Neuigkeiten, Veranstaltungen und wichtige Informationen rund um Gut begleitet."
      />

      <CTABanner />
    </>
  );
}
