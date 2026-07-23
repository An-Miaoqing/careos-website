import type {
  AvailabilitySlot,
  BookingDuration,
  BookingFormData,
  BookingService,
} from "../../../types/booking";

type ReviewBookingProps = {
  form: BookingFormData;
  updateField: (field: keyof BookingFormData, value: string | boolean | null) => void;
  errors: Record<string, string>;
  selectedDate: AvailabilitySlot | undefined;
  selectedService: BookingService | undefined;
  selectedDuration: BookingDuration | undefined;
};

export default function ReviewBooking({
  form,
  updateField,
  errors,
  selectedDate,
  selectedService,
  selectedDuration,
}: ReviewBookingProps) {
  return (
    <div className="rounded-[1.5rem] bg-beige p-6 shadow-sm">
      <h3 className="text-xl font-extrabold text-gray-900">Ihre Anfrage im Überblick</h3>
      <div className="mt-5 space-y-4 text-sm text-gray-700">
        <div className="rounded-2xl bg-white p-4">
          <p className="font-semibold text-gray-900">Termin</p>
          <p className="mt-1">{selectedDate?.label ?? "Noch offen"} · {form.time ? `${form.time} Uhr` : "Noch offen"}</p>
        </div>
        <div className="rounded-2xl bg-white p-4">
          <p className="font-semibold text-gray-900">Leistung</p>
          <p className="mt-1">{selectedService?.title ?? "Noch offen"}</p>
        </div>
        <div className="rounded-2xl bg-white p-4">
          <p className="font-semibold text-gray-900">Dauer</p>
          <p className="mt-1">{selectedDuration?.label ?? "Noch offen"}</p>
        </div>
        <div className="rounded-2xl bg-white p-4">
          <p className="font-semibold text-gray-900">Adresse</p>
          <p className="mt-1">
            {form.street || form.houseNumber
              ? `${[form.street, form.houseNumber].filter(Boolean).join(" ")}`
              : "Noch offen"}
          </p>
          <p className="mt-1">
            {form.postalCode || form.city
              ? `${[form.postalCode, form.city].filter(Boolean).join(" ")}`
              : ""}
          </p>
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-gray-700">
        <input
          type="checkbox"
          checked={form.privacyAccepted}
          onChange={(event) => {
            const isAccepted = event.target.checked;
            updateField("privacyAccepted", isAccepted);
            updateField("privacyAcceptedAt", isAccepted ? new Date().toISOString() : null);
          }}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-teal focus:ring-teal"
        />
        <span>Ich stimme der Datenschutzerklärung zu.</span>
      </label>
      {errors.privacyAccepted && <p className="mt-2 text-sm text-red-600">{errors.privacyAccepted}</p>}
    </div>
  );
}
