import { Link } from "react-router-dom";
import { contact } from "../../../content/site";
import { PhoneIcon } from "../icons";

type CTABannerProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTABanner({
  title = "Kostenlose Erstberatung – unverbindlich",
  description = "Wir nehmen uns Zeit für Ihre Fragen. Rufen Sie uns an oder buchen Sie eine Beratung – ganz ohne Verpflichtung",
  buttonLabel = "Termin buchen",
  buttonHref = "/beratung",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  const hasDualAction = Boolean(secondaryLabel && secondaryHref);
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-teal px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange/20 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-xl leading-relaxed text-white/90">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {hasDualAction ? (
                <>
                  <Link
                    to={buttonHref}
                    className="inline-flex w-full items-center justify-center rounded-full bg-orange px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-orange-dark sm:w-auto"
                  >
                    {buttonLabel}
                  </Link>
                  <Link
                    to={secondaryHref!}
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
                  >
                    {secondaryLabel}
                  </Link>
                </>
              ) : (
                <>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-orange-dark sm:w-auto"
                  >
                    <PhoneIcon />
                    {contact.phoneDisplay}
                  </a>
                  <Link
                    to={buttonHref}
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
                  >
                    {buttonLabel}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
