import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Accordion from "../../../shared/components/Accordion/Accordion";
import ServiceCard from "./ServiceCard";
import { serviceCategories } from "../../../content/alltagshilfe/services";

export default function ServicesSection() {
  return (
    <Section id="leistungen" background="white">
      <SectionTitle
        eyebrow="Leistungen"
        title="Was wir für Sie tun"
        description="Wählen Sie einen Bereich, um die passenden Leistungen zu sehen."
      />

      <div className="mt-10 space-y-4">
        {serviceCategories.map((category) => (
          <Accordion
            key={category.id}
            title={
              <div>
                <h3 className="text-lg font-bold text-gray-900">{category.label}</h3>
                <p className="mt-1 text-sm font-normal text-gray-600">{category.description}</p>
              </div>
            }
          >
            <div className="grid gap-6 pt-2 sm:grid-cols-2">
              {category.services.map((service) => (
                <div key={service.id}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-40 w-full rounded-2xl object-cover"
                  />
                  <div className="mt-4">
                    <ServiceCard service={service} compact />
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        ))}
      </div>
    </Section>
  );
}
