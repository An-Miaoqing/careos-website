import { Link } from "react-router-dom";
import CarouselCardShell from "./CarouselCardShell";
import { ServiceIcon } from "../../../shared/components/icons";
import type { EventCarouselCard } from "../../../content/landing/carousel";

const categoryStyles: Record<string, { header: string; label: string }> = {
  exercise: {
    header: "from-[#2f7f80] to-[#1f9fa3]",
    label: "bg-[#2f7f80] text-white",
  },
  culture: {
    header: "from-[#f59a23] to-[#ed7f22]",
    label: "bg-[#ed7f22] text-white",
  },
  workshops: {
    header: "from-[#1f9fa3] to-[#2f7f80]",
    label: "bg-[#1f9fa3] text-white",
  },
  celebrations: {
    header: "from-[#ed7f22] to-[#f59a23]",
    label: "bg-[#ed7f22] text-white",
  },
};

export default function EventCard({ card }: { card: EventCarouselCard }) {
  const style = categoryStyles[card.categoryId] ?? categoryStyles.culture;
  const headerImage = card.image && card.imageAlt
    ? {
        src: card.image,
        alt: card.imageAlt,
        fit: card.imageFit,
        position: card.imagePosition,
      }
    : undefined;

  return (
    <CarouselCardShell
      label="Event"
      labelClassName={style.label}
      gradientClassName={style.header}
      icon={<ServiceIcon name="clock" className="h-10 w-10" />}
      headerImage={headerImage}
    >
      <p className="text-sm text-grey-soft">
        {card.date} · {card.time}
      </p>
      <h3 className="mt-2 line-clamp-2 text-lg font-bold text-gray-900">{card.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-gray-700">{card.description}</p>
      <p className="mt-2 truncate text-xs text-grey-soft">{card.location}</p>
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
