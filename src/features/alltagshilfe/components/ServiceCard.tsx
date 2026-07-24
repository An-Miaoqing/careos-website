import type { Service } from "../../../content/alltagshilfe/services";

type ServiceCardProps = {
  service: Pick<Service, "title" | "image">;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-grey-light bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="h-48 w-full object-cover object-[center_20%] sm:h-56"
      />
    </article>
  );
}
