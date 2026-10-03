import type { ReactNode } from "react";

type CarouselCardShellProps = {
  label: string;
  labelClassName: string;
  gradientClassName: string;
  icon: ReactNode;
  headerImage?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
    position?: string;
  };
  cornerBadge?: ReactNode;
  children: ReactNode;
};

export default function CarouselCardShell({
  label,
  labelClassName,
  gradientClassName,
  icon,
  headerImage,
  cornerBadge,
  children,
}: CarouselCardShellProps) {
  return (
    <article className="flex h-[380px] flex-col overflow-hidden rounded-3xl border border-grey-light bg-white shadow-sm">
      <div className={`relative flex h-32 shrink-0 items-center justify-center bg-gradient-to-br ${gradientClassName}`}>
        {headerImage && (
          <img
            src={headerImage.src}
            alt={headerImage.alt}
            className={`absolute inset-0 h-full w-full ${headerImage.fit === "contain" ? "object-contain p-3" : "object-cover"}`}
            style={{ objectPosition: headerImage.position }}
          />
        )}
        <span
          className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm ${labelClassName}`}
        >
          {label}
        </span>
        {cornerBadge && <span className="absolute right-4 top-4 z-10">{cornerBadge}</span>}
        {!headerImage && <span className="text-white/90">{icon}</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">{children}</div>
    </article>
  );
}
