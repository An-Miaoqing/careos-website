import type { FocusEvent } from "react";
import PanelContent from "../PanelContent/PanelContent";
import type { LandingPanel } from "../../../../content/landing/panels";

type PanelProps = {
  panel: LandingPanel;
  isActive: boolean;
  isAnyActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

export default function Panel({ panel, isActive, isAnyActive, onActivate, onDeactivate }: PanelProps) {
  const hoverEnabled = panel.hoverEnabled !== false;
  const widthClass = isActive ? "lg:basis-[55%]" : isAnyActive ? "lg:basis-[22.5%]" : "lg:basis-1/3";
  const contentVisible = hoverEnabled ? isActive : true;

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!hoverEnabled) return;
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      onDeactivate();
    }
  };

  return (
    <div
      onMouseEnter={hoverEnabled ? onActivate : undefined}
      onMouseLeave={hoverEnabled ? onDeactivate : undefined}
      onFocus={hoverEnabled ? onActivate : undefined}
      onBlur={handleBlur}
      className={`relative flex min-h-[38vh] flex-col justify-end overflow-hidden p-6 text-white transition-[flex-basis] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:p-8 lg:h-full lg:min-h-0 lg:justify-center lg:p-10 ${widthClass}`}
    >
      <img
        src={panel.backgroundImage}
        alt={panel.backgroundAlt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover ${panel.backgroundPositionClassName ?? ""}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-br opacity-60 ${panel.gradientClassName}`} aria-hidden="true" />

      {panel.badge && (
        <span className="absolute inset-x-0 top-0 bg-orange px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-white sm:text-base">
          {panel.badge}
        </span>
      )}

      <div className="relative">
        <p className="text-sm font-bold text-white/60">{panel.number}</p>
        <h3 className="mt-3 text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-3xl lg:text-4xl">
          {panel.label}
        </h3>
        {panel.headline && (
          <p className="mt-3 max-w-[220px] text-2xl font-extrabold leading-snug sm:max-w-[240px] sm:text-3xl">
            {panel.headline}
          </p>
        )}

        <PanelContent panel={panel} isActive={contentVisible} />
      </div>
    </div>
  );
}
