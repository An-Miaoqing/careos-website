import Button from "../Button/Button";
import type { ReactNode } from "react";

type HeroCta = {
  label: string;
  href: string;
};

type HeroProps = {
  title: string;
  description?: ReactNode;
  eyebrow?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  backgroundPositionClassName?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

function HeroCtas({ primaryCta, secondaryCta }: { primaryCta?: HeroCta; secondaryCta?: HeroCta }) {
  if (!primaryCta && !secondaryCta) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      {primaryCta && (
        <Button to={primaryCta.href} variant="primary">
          {primaryCta.label}
        </Button>
      )}
      {secondaryCta && (
        <Button to={secondaryCta.href} variant="outline">
          {secondaryCta.label}
        </Button>
      )}
    </div>
  );
}

export default function Hero({
  title,
  description,
  eyebrow,
  backgroundImage,
  backgroundAlt,
  backgroundPositionClassName,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  if (backgroundImage) {
    return (
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <img
          src={backgroundImage}
          alt={backgroundAlt ?? ""}
          className={`absolute inset-0 h-full w-full object-cover ${backgroundPositionClassName ?? ""}`}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-navy/55" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow && (
              <p className="text-base font-bold uppercase tracking-wider text-orange-light">{eyebrow}</p>
            )}
            <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{title}</h1>
            {description && (
              <div className="mt-5 text-xl leading-relaxed text-white/90">{description}</div>
            )}
            <HeroCtas primaryCta={primaryCta} secondaryCta={secondaryCta} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-teal-light pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-base font-bold uppercase tracking-wider text-orange">{eyebrow}</p>
          )}
          <h1 className="mt-2 text-3xl font-extrabold text-teal sm:text-4xl lg:text-5xl">{title}</h1>
          {description && (
            <div className="mt-5 text-xl leading-relaxed text-gray-700">{description}</div>
          )}
          <HeroCtas primaryCta={primaryCta} secondaryCta={secondaryCta} />
        </div>
      </div>
    </section>
  );
}
