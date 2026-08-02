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

      <label className={`mt-6 flex cursor-pointer items-start gap-4 rounded-2xl border-2 p-5 leading-relaxed transition-colors ${
        form.privacyAccepted
          ? "border-teal bg-teal-light/80 text-teal-dark"
          : "border-orange/35 bg-white text-gray-800 hover:border-teal/50"
      }`}>
        <input
          type="checkbox"
          checked={form.privacyAccepted}
          onChange={(event) => {
            const isAccepted = event.target.checked;
            updateField("privacyAccepted", isAccepted);
            updateField("privacyAcceptedAt", isAccepted ? new Date().toISOString() : null);
          }}
          className="mt-0.5 h-6 w-6 shrink-0 rounded border-2 border-gray-300 accent-teal focus:ring-2 focus:ring-teal focus:ring-offset-2"
        />
        <span className="text-base font-extrabold sm:text-lg">
          Ich stimme der <a href="/datenschutz" target="_blank" rel="noreferrer" className="text-teal-dark underline decoration-2 underline-offset-4">Datenschutzerklärung</a> zu.
          <small className="mt-1 block text-sm font-semibold text-gray-600">Erforderlich, um die Anfrage absenden zu können.</small>
        </span>
      </label>
      {errors.privacyAccepted && <p className="mt-2 text-sm text-red-600">{errors.privacyAccepted}</p>}
    </div>
  );
}
