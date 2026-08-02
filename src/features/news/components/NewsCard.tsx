import { Link } from "react-router-dom";
import CarouselCardShell from "./CarouselCardShell";
import { ServiceIcon } from "../../../shared/components/icons";
import type { NewsCarouselCard } from "../../../content/landing/carousel";

export default function NewsCard({ card }: { card: NewsCarouselCard }) {
  return (
    <CarouselCardShell
      label="Neuigkeit"
      labelClassName="bg-teal text-white"
      gradientClassName="from-teal to-teal-dark"
      icon={<ServiceIcon name="chat" className="h-10 w-10" />}
    >
      <p className="text-sm text-grey-soft">{card.date}</p>
      <h3 className="mt-2 line-clamp-3 text-lg font-bold text-gray-900">{card.title}</h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-700">{card.text}</p>
      <Link
        to={card.href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal hover:text-teal-dark"
      >
        {card.ctaLabel}
      </Link>
    </CarouselCardShell>
  );
}
