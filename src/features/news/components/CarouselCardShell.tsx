import type { ReactNode } from "react";

type CarouselCardShellProps = {
  label: string;
  labelClassName: string;
  gradientClassName: string;
  icon: ReactNode;
  cornerBadge?: ReactNode;
  children: ReactNode;
};

export default function CarouselCardShell({
  label,
  labelClassName,
  gradientClassName,
  icon,
  cornerBadge,
  children,
}: CarouselCardShellProps) {
  return (
    <article className="flex h-[380px] flex-col overflow-hidden rounded-3xl border border-grey-light bg-white shadow-sm">
      <div className={`relative flex h-32 shrink-0 items-center justify-center bg-gradient-to-br ${gradientClassName}`}>
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${labelClassName}`}
        >
          {label}
        </span>
        {cornerBadge && <span className="absolute right-4 top-4">{cornerBadge}</span>}
        <span className="text-white/90">{icon}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">{children}</div>
    </article>
  );
}
