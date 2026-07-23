import { Link } from "react-router-dom";
import CarouselCardShell from "./CarouselCardShell";
import { ServiceIcon } from "../../../shared/components/icons";
import type { ProjectCarouselCard } from "../../../content/landing/carousel";

export default function ProjectCard({ card }: { card: ProjectCarouselCard }) {
  return (
    <CarouselCardShell
      label="Projekt"
      labelClassName="bg-navy text-white"
      gradientClassName="from-navy to-navy-dark"
      icon={<ServiceIcon name="robot" className="h-10 w-10" />}
      cornerBadge={
        <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-navy">
          {card.status}
        </span>
      }
    >
      <h3 className="mt-1 line-clamp-2 text-lg font-bold text-gray-900">{card.title}</h3>
      <p className="mt-2 line-clamp-4 flex-1 text-sm text-gray-700">{card.text}</p>
      <Link to={card.href} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy hover:opacity-80">
        {card.ctaLabel}
      </Link>
    </CarouselCardShell>
  );
}
