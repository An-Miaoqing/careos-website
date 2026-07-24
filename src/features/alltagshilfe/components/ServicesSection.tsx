import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";
import { serviceCategories } from "../../../content/alltagshilfe/services";

// Categories with fewer images sort first; multi-image categories fall to the end of the grid.
const orderedCategories = [...serviceCategories].sort((a, b) => a.services.length - b.services.length);

export default function ServicesSection() {
  return (
    <Section id="leistungen" background="white">
      <SectionTitle
        eyebrow="Leistungen"
        title="Was wir für Sie tun"
        description="Ein Überblick über alle Bereiche, in denen wir Sie unterstützen."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {orderedCategories.map((category) => (
          <div
            key={category.id}
            className={`rounded-3xl border border-grey-light bg-white p-6 shadow-sm sm:p-8 ${
              category.services.length > 1 ? "sm:col-span-2" : ""
            }`}
          >
            <h3 className="text-lg font-bold text-gray-900">{category.label}</h3>
            <p className="mt-1 text-sm text-gray-600">{category.description}</p>

            <div className={`mt-6 grid gap-6 ${category.services.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {category.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
