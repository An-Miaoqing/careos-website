import Container from "../../../../shared/components/Container/Container";
import Badge from "../../../../shared/components/Badge/Badge";
import Carousel from "../../../../shared/ui/Carousel/Carousel";
import CarouselCard from "../../../news/components/CarouselCard";
import { carouselCards } from "../../../../content/landing/carousel";

export default function NewsCarouselSection() {
  return (
    <section className="bg-beige py-16 sm:py-20">
      <Container className="text-center">
        <Badge variant="eyebrow">Aktuelles & Gemeinschaft</Badge>
        <h2 className="mt-2 text-3xl font-extrabold text-teal sm:text-4xl">
          Was ist los bei Gut Begleitet?
        </h2>
        <p className="mt-3 text-lg text-gray-700">
          Neuigkeiten, Events und Projekte — immer aktuell
        </p>
      </Container>

      <div className="mt-10">
        <Carousel
          items={carouselCards}
          getKey={(card) => card.id}
          ariaLabel="Neuigkeiten, Events und Projekte"
          renderItem={(card) => <CarouselCard card={card} />}
        />
      </div>
    </section>
  );
}
