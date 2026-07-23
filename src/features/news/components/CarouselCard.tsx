import NewsCard from "./NewsCard";
import EventCard from "./EventCard";
import ProjectCard from "./ProjectCard";
import MoreCard from "./MoreCard";
import type { CarouselCardData } from "../../../content/landing/carousel";

export default function CarouselCard({ card }: { card: CarouselCardData }) {
  switch (card.type) {
    case "news":
      return <NewsCard card={card} />;
    case "event":
      return <EventCard card={card} />;
    case "project":
      return <ProjectCard card={card} />;
    case "more":
      return <MoreCard card={card} />;
  }
}
