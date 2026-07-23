import { Link } from "react-router-dom";
import type { LandingPanel } from "../../../../content/landing/panels";

type PanelContentProps = {
  panel: LandingPanel;
  isActive: boolean;
};

export default function PanelContent({ panel, isActive }: PanelContentProps) {
  return (
    <div
      className={`mt-4 transition-opacity duration-500 lg:mt-6 ${
        isActive ? "lg:opacity-100" : "lg:pointer-events-none lg:absolute lg:opacity-0"
      }`}
    >
      <p className="max-w-sm text-base leading-relaxed text-white/90">{panel.hoverText}</p>

      {panel.features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {panel.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-white/85">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        to={panel.ctaHref}
        className={`mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors ${
          panel.ctaMuted
            ? "border-2 border-white/40 text-white/70 hover:border-white/70 hover:text-white"
            : "bg-white text-gray-900 hover:bg-white/90"
        }`}
      >
        {panel.ctaLabel}
      </Link>
    </div>
  );
}
