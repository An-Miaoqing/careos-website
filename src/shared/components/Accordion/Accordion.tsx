import type { ReactNode } from "react";

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export default function Accordion({ title, children, defaultOpen = false, className = "" }: AccordionProps) {
  return (
    <details
      open={defaultOpen}
      className={`group rounded-2xl border border-grey-light bg-white ${className}`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
        {title}
        <svg
          className="h-5 w-5 shrink-0 text-teal transition-transform duration-300 group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      <div className="px-5 pb-5 text-base leading-relaxed text-gray-700">{children}</div>
    </details>
  );
}
