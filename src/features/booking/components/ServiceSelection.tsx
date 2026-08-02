import { ServiceIcon } from "../../../shared/components/icons";
import { serviceCategories } from "../../../content/alltagshilfe/services";
import type { BookingFormData, BookingService } from "../../../types/booking";

const serviceCodes: Record<string, string> = {
  "kleine-hilfen": "SMALL_DAILY_HELP",
  gesellschaft: "SOCIAL_COMPANIONSHIP",
  haushalt: "HOUSEKEEPING",
  waesche: "LAUNDRY",
  arzt: "MEDICAL_ESCORT",
  einkaufen: "SHOPPING",
  spaziergaenge: "LEISURE_COMPANIONSHIP",
  individuell: "CUSTOM_SUPPORT",
};

export const services: BookingService[] = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    id: service.id,
    serviceCode: serviceCodes[service.id],
    category: category.label,
    title: service.title,
    description: service.shortDescription,
    icon: category.icon,
  })),
);

type ServiceSelectionProps = {
  form: BookingFormData;
  updateField: (field: keyof BookingFormData, value: string | boolean | null) => void;
};

export default function ServiceSelection({ form, updateField }: ServiceSelectionProps) {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-orange-dark">Leistungsbereich</p>
        <h3 className="mt-2 text-2xl font-extrabold text-gray-900">Wobei dürfen wir Sie unterstützen?</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => updateField("serviceCode", service.serviceCode)}
            aria-pressed={form.serviceCode === service.serviceCode}
            className={`group relative rounded-[1.5rem] border p-5 text-left transition-all ${
              form.serviceCode === service.serviceCode
                ? "border-teal bg-teal-light shadow-md shadow-teal/10 ring-1 ring-teal/20"
                : "border-grey-light bg-white hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-md"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-light text-teal shadow-sm ring-1 ring-teal/10 group-aria-pressed:bg-teal group-aria-pressed:text-white">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-dark">{service.category}</p>
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
