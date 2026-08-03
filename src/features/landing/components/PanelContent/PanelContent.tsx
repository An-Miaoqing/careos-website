import { Link } from "react-router-dom";
import { CheckIcon } from "../../../../shared/components/icons";
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
      {panel.features.length === 0 && (
        <p className="max-w-sm text-base leading-relaxed text-white/90">{panel.hoverText}</p>
      )}

      {panel.features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {panel.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-base text-white/85">
              <CheckIcon className="h-5 w-5 shrink-0 text-white/80" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        to={panel.ctaHref}
        className={`mt-5 inline-flex items-center gap-2 rounded-full font-bold transition-colors ${
          panel.features.length > 0 ? "px-7 py-4 text-lg" : "px-5 py-3 text-sm"
        } ${
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
