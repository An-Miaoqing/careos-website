import { Link } from "react-router-dom";
import CarouselCardShell from "./CarouselCardShell";
import { ServiceIcon } from "../../../shared/components/icons";
import type { EventCarouselCard } from "../../../content/landing/carousel";

export default function EventCard({ card }: { card: EventCarouselCard }) {
  return (
    <CarouselCardShell
      label="Event"
      labelClassName="bg-orange text-white"
      gradientClassName="from-panel-orange-start to-panel-orange-end"
      icon={<ServiceIcon name="clock" className="h-10 w-10" />}
    >
      <p className="text-sm text-grey-soft">
        {card.date} · {card.time}
      </p>
      <h3 className="mt-2 line-clamp-2 text-lg font-bold text-gray-900">{card.title}</h3>
      <p className="mt-2 text-sm text-gray-700">{card.location}</p>
      <div className="mt-2 flex flex-1 items-end justify-between gap-2">
        {card.completed ? (
          <span className="text-sm font-bold text-grey-soft">Abgeschlossen</span>
        ) : (
          <>
            <span className="text-sm font-bold text-orange-dark">{card.price}</span>
            <Link to={card.href} className="text-sm font-bold text-orange hover:text-orange-dark">
              {card.ctaLabel}
            </Link>
          </>
        )}
      </div>
    </CarouselCardShell>
  );
}
