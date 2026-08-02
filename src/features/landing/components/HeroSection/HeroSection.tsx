import type { MouseEvent } from "react";
import Button from "../../../../shared/components/Button/Button";
import Badge from "../../../../shared/components/Badge/Badge";
import StatItem from "../../../../shared/components/StatItem/StatItem";
import { hero } from "../../../../content/landing/hero";

export default function HeroSection() {
  const scrollToPanels = (event: MouseEvent) => {
    event.preventDefault();
    document.getElementById(hero.primaryCta.targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex h-screen min-h-[560px] items-center overflow-hidden">
      <img
        src={hero.backgroundImage}
        alt={hero.backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-navy/55" aria-hidden="true" />

      <div className="relative mx-auto mt-10 flex w-full max-w-5xl flex-col items-center px-4 text-center sm:mt-16 sm:px-6 lg:mt-20 lg:px-8">
        <Badge variant="eyebrow" className="!text-white">
          {hero.eyebrow}
        </Badge>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[4.5rem] lg:leading-[1.1]">
          {hero.headlineLine1}
          <br />
          {hero.headlineLine2}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-xl">
          {hero.subheadline}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`#${hero.primaryCta.targetId}`} onClick={scrollToPanels} variant="secondary">
            {hero.primaryCta.label}
          </Button>
          <Button to={hero.secondaryCta.href} variant="primary">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 rounded-2xl bg-navy-dark/40 px-8 py-5 sm:gap-12">
          {hero.stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} light />
          ))}
        </div>
      </div>

      <a
        href={`#${hero.primaryCta.targetId}`}
        onClick={scrollToPanels}
        aria-hidden="true"
        tabIndex={-1}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/80 lg:block"
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
