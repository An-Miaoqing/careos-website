import Button from "../Button/Button";

type PhotoCtaButton = {
  label: string;
  href: string;
};

type PhotoCtaProps = {
  label?: string;
  headline: string;
  subline?: string;
  description?: string;
  backgroundImage: string;
  backgroundAlt: string;
  primaryButton: PhotoCtaButton;
  secondaryButton: PhotoCtaButton;
};

export default function PhotoCta({
  label,
  headline,
  subline,
  description,
  backgroundImage,
  backgroundAlt,
  primaryButton,
  secondaryButton,
}: PhotoCtaProps) {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden py-20">
      <img
        src={backgroundImage}
        alt={backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-about-overlay/75" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {label && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">{label}</p>
        )}
        <h2 className="font-serif mt-3 text-4xl font-light text-white sm:text-5xl">{headline}</h2>
        {subline && <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">{subline}</p>}
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base font-light text-white/80">{description}</p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to={primaryButton.href} variant="white">
            {primaryButton.label}
          </Button>
          <Button to={secondaryButton.href} variant="outline-white">
            {secondaryButton.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
