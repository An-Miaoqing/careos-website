import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
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
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    if (el.clientWidth > 0) {
      setPageCount(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
      setActivePage(Math.round(el.scrollLeft / el.clientWidth));
    }
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => updateEdges());
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateEdges, items.length]);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const scrollToPage = (page: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
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

      {pageCount > 1 && (
        <div className="mt-2 flex items-center justify-center gap-2" role="tablist" aria-label={`${ariaLabel} – Seiten`}>
          {Array.from({ length: pageCount }).map((_, page) => (
            <button
              key={page}
              type="button"
              role="tab"
              aria-selected={page === activePage}
              aria-label={`Seite ${page + 1} von ${pageCount}`}
              onClick={() => scrollToPage(page)}
              className={`h-2.5 rounded-full transition-all ${
                page === activePage ? "w-6 bg-teal" : "w-2.5 bg-grey-light hover:bg-teal/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
