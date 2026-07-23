import { ServiceIcon } from "../../../shared/components/icons";
import { location } from "../../../content/salon/events";
import type { SalonEvent } from "../../../content/salon/events";

export default function SalonEventCard({ event }: { event: SalonEvent }) {
  return (
    <article className="flex h-[360px] flex-col overflow-hidden rounded-3xl border border-grey-light bg-white shadow-sm">
      <div className="relative flex h-28 shrink-0 items-center justify-center bg-gradient-to-br from-panel-orange-start to-panel-orange-end">
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-dark">
          Event
        </span>
        <ServiceIcon name="clock" className="h-10 w-10 text-white/90" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-grey-soft">
          {event.date} · {event.time}
        </p>
        <h3 className="mt-2 line-clamp-2 text-lg font-bold text-gray-900">{event.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-700">{event.description}</p>
        <p className="mt-2 text-sm text-grey-soft">{location}</p>
        <p className="mt-3 text-sm font-bold text-orange-dark">{event.price}</p>
      </div>
    </article>
  );
}
