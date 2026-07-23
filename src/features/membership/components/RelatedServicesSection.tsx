import { Link } from "react-router-dom";
import Section from "../../../shared/components/Section/Section";
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
import Card from "../../../shared/components/Card/Card";
import { ServiceIcon, ArrowRightIcon } from "../../../shared/components/icons";

const relatedServices = [
  {
    id: "alltagshilfe",
    icon: "home",
    title: "Alltagshilfe",
    description: "Persönliche Unterstützung für mehr Lebensqualität und Selbstständigkeit.",
    href: "/alltagshilfe",
  },
  {
    id: "salon",
    icon: "family",
    title: "Salon & Club",
    description: "Gemeinschaft, Kultur und Aktivitäten mitten in Wien.",
    href: "/salon",
  },
  {
    id: "friend",
    icon: "robot",
    title: "Gut Begleitet Friend",
    description: "Ihr digitaler Begleiter für zu Hause — bald verfügbar.",
    href: "/friend",
  },
];

export default function RelatedServicesSection() {
  return (
    <Section background="white">
      <SectionTitle eyebrow="Weitere Angebote" title="Entdecken Sie auch" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {relatedServices.map((service) => (
          <Card key={service.id} className="flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{service.title}</h3>
            <p className="mt-2 flex-1 text-base text-gray-700">{service.description}</p>
            <Link
              to={service.href}
              className="mt-4 inline-flex items-center gap-2 text-base font-bold text-teal hover:text-teal-dark"
            >
              Mehr erfahren
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
