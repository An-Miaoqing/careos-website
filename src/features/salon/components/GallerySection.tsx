import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import { gallery } from "../../../content/salon/gallery";

export default function GallerySection() {
  return (
    <Section background="teal-light">
      <SectionTitle eyebrow={gallery.label} title={gallery.title} />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {gallery.images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-72 w-full rounded-3xl object-cover shadow-sm sm:h-96"
          />
        ))}
      </div>
    </Section>
  );
}
