import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  showDot?: boolean;
  className?: string;
};

export default function Pill({ children, showDot = true, className = "" }: PillProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal-light px-4 py-2 text-base font-bold text-teal ${className}`}
    >
      {showDot && <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />}
      {children}
    </div>
  );
}
