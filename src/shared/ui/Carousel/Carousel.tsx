import { useCallback, useRef, useState, type ReactNode } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../components/icons";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string;
  ariaLabel: string;
};

export default function Carousel<T>({ items, renderItem, getKey, ariaLabel }: CarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        disabled={atStart}
        aria-label="Vorherige Karten"
        className="absolute left-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 text-teal shadow-lg transition-opacity hover:bg-teal-light disabled:pointer-events-none disabled:opacity-0 sm:flex sm:items-center sm:justify-center"
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
        onScroll={updateEdges}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-4 sm:px-6 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div key={getKey(item)} className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[310px]">
            {renderItem(item)}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        disabled={atEnd}
        aria-label="Nächste Karten"
        className="absolute right-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 text-teal shadow-lg transition-opacity hover:bg-teal-light disabled:pointer-events-none disabled:opacity-0 sm:flex sm:items-center sm:justify-center"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
