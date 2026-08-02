import type { ReactNode } from "react";

type BadgeVariant = "eyebrow" | "solid";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export default function Badge({ children, variant = "eyebrow", className = "" }: BadgeProps) {
  if (variant === "solid") {
    return (
      <span
        className={`inline-flex items-center rounded-full bg-orange px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white shadow-sm ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span className={`text-base font-bold uppercase tracking-wider text-orange ${className}`}>
      {children}
    </span>
  );
}
