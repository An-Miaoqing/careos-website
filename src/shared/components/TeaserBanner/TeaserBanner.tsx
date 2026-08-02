import { Link } from "react-router-dom";
import { ServiceIcon } from "../icons";

type TeaserBannerProps = {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function TeaserBanner({ label, title, description, ctaLabel, ctaHref }: TeaserBannerProps) {
  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-friend-blue px-6 py-6 shadow-lg sm:px-8 sm:py-7">
          <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <ServiceIcon name="robot" className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {label}
                </span>
                <h2 className="mt-2 text-lg font-extrabold text-white sm:text-xl">{title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-white/80">{description}</p>
              </div>
            </div>

            <Link
              to={ctaHref}
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
