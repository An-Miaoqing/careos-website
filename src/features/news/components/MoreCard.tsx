import { Link } from "react-router-dom";
import type { MoreCarouselCard } from "../../../content/landing/carousel";

export default function MoreCard({ card }: { card: MoreCarouselCard }) {
  return (
    <Link
      to={card.href}
      className="flex h-[380px] flex-col items-center justify-center rounded-3xl bg-teal p-6 text-center text-lg font-bold text-white shadow-sm transition-colors hover:bg-teal-dark"
    >
      {card.label}
    </Link>
  );
}
