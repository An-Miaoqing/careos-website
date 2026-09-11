import { Link } from "react-router-dom";
import { CheckIcon, ServiceIcon } from "../../../../shared/components/icons";
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
        <ul className={panel.featureIcons ? "mt-5 grid grid-cols-2 gap-x-5 gap-y-6" : "mt-4 space-y-2"}>
          {panel.features.map((feature, index) => (
            <li
              key={feature}
              className={
                panel.featureIcons
                  ? "flex items-center gap-3 text-xl font-extrabold leading-snug text-white sm:text-2xl"
                  : "flex items-center gap-2 text-sm text-white/85 sm:text-base"
              }
            >
              {panel.featureIcons?.[index] ? (
                <ServiceIcon
                  name={panel.featureIcons[index]}
                  className="h-8 w-8 shrink-0 text-white/90 sm:h-10 sm:w-10"
                />
              ) : (
                <CheckIcon className="h-5 w-5 shrink-0 text-white/80" />
              )}
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
