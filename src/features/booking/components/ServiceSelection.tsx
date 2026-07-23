import { ServiceIcon } from "../../../shared/components/icons";
import type { BookingFormData, BookingService } from "../../../types/booking";

export const services: BookingService[] = [
  {
    id: "shopping",
    serviceCode: "SHOPPING",
    title: "Einkaufen und Besorgungen",
    description: "Sicheres Einkaufen und Mitbringen von notwendigen Dingen.",
    icon: "shopping",
  },
  {
    id: "home",
    serviceCode: "HOUSEKEEPING",
    title: "Unterstützung im Haushalt",
    description: "Ordnung, Aufräumen und kleine Hilfe im Alltag.",
    icon: "home",
  },
  {
    id: "laundry",
    serviceCode: "LAUNDRY",
    title: "Wäsche-Service",
    description: "Wäsche sammeln, waschen und ordentlich zusammenlegen.",
    icon: "laundry",
  },
  {
    id: "medical",
    serviceCode: "MEDICAL_ESCORT",
    title: "Begleitung zu Arztterminen",
    description: "Begleitung zu Terminen und wichtigen Kontakten.",
    icon: "medical",
  },
  {
    id: "walk",
    serviceCode: "LEISURE_COMPANIONSHIP",
    title: "Spaziergänge und Freizeitbegleitung",
    description: "Gemeins frische Luft und etwas Bewegung genießen.",
    icon: "walk",
  },
  {
    id: "chat",
    serviceCode: "SOCIAL_COMPANIONSHIP",
    title: "Gesellschaft und Aktivierung",
    description: "Anregende Gespräche, gemeinsame Aktivitäten und Begleitung.",
    icon: "chat",
  },
  {
    id: "small-help",
    serviceCode: "SMALL_DAILY_HELP",
    title: "Kleine Hilfen im Alltag",
    description: "Kleine Unterstützung im täglichen Leben, wie Einkaufen, Besorgungen, Begleitung oder sonstige Alltagshilfen.",
    icon: "help",
  },
  {
    id: "help",
    serviceCode: "CUSTOM_SUPPORT",
    title: "Individuelle Unterstützung",
    description: "Maßgeschneiderte Hilfe für Ihren Alltag.",
    icon: "help",
  },
];

type ServiceSelectionProps = {
  form: BookingFormData;
  updateField: (field: keyof BookingFormData, value: string | boolean | null) => void;
};

export default function ServiceSelection({ form, updateField }: ServiceSelectionProps) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => updateField("serviceCode", service.serviceCode)}
            className={`rounded-[1.5rem] border p-5 text-left transition-all ${
              form.serviceCode === service.serviceCode
                ? "border-teal bg-teal-light shadow-sm"
                : "border-grey-light bg-white hover:border-teal/40"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal shadow-sm">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
