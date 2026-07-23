import PhotoCta from "../../../../shared/components/PhotoCta/PhotoCta";
import { aboutCta } from "../../../../content/landing/aboutCta";

export default function AboutCtaSection() {
  return (
    <PhotoCta
      label={aboutCta.label}
      headline={aboutCta.headline}
      subline={aboutCta.subline}
      description={aboutCta.text}
      backgroundImage={aboutCta.backgroundImage}
      backgroundAlt={aboutCta.backgroundAlt}
      primaryButton={aboutCta.primaryButton}
      secondaryButton={aboutCta.secondaryButton}
    />
  );
}
