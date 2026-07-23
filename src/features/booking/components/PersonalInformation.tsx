import type { BookingFormData } from "../../../types/booking";

type PersonalInformationProps = {
  form: BookingFormData;
  updateField: (field: keyof BookingFormData, value: string | boolean | null) => void;
  errors: Record<string, string>;
};

export default function PersonalInformation({ form, updateField, errors }: PersonalInformationProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">Vorname *</span>
        <input
          value={form.firstName}
          onChange={(event) => updateField("firstName", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="Max"
        />
        {errors.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>}
      </label>
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">Nachname *</span>
        <input
          value={form.lastName}
          onChange={(event) => updateField("lastName", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="Mustermann"
        />
        {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>}
      </label>
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">Telefonnummer *</span>
        <input
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="+43 660 123 4567"
        />
        {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
      </label>
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">E-Mail-Adresse</span>
        <input
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="name@email.com"
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
      </label>
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">Straße *</span>
        <input
          value={form.street}
          onChange={(event) => updateField("street", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="Beispielstraße"
        />
        {errors.street && <p className="mt-2 text-sm text-red-600">{errors.street}</p>}
      </label>
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">Hausnummer *</span>
        <input
          value={form.houseNumber}
          onChange={(event) => updateField("houseNumber", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="12"
        />
        {errors.houseNumber && <p className="mt-2 text-sm text-red-600">{errors.houseNumber}</p>}
      </label>
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">Stiege / Tür (optional)</span>
        <input
          value={form.apartment}
          onChange={(event) => updateField("apartment", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="2 / 3"
        />
      </label>
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">PLZ *</span>
        <input
          value={form.postalCode}
          onChange={(event) => updateField("postalCode", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="1010"
        />
        {errors.postalCode && <p className="mt-2 text-sm text-red-600">{errors.postalCode}</p>}
      </label>
      <label className="text-sm font-semibold text-gray-700">
        <span className="mb-2 block">Ort *</span>
        <input
          value={form.city}
          onChange={(event) => updateField("city", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="Wien"
        />
        {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city}</p>}
      </label>
      <label className="text-sm font-semibold text-gray-700 sm:col-span-2">
        <span className="mb-2 block">Nachricht</span>
        <textarea
          rows={4}
          value={form.customerNote}
          onChange={(event) => updateField("customerNote", event.target.value)}
          className="w-full rounded-2xl border border-grey-light bg-white px-4 py-3 text-base text-gray-900 outline-none ring-0 transition focus:border-teal"
          placeholder="Bitte teilen Sie uns weitere Hinweise mit."
        />
      </label>
    </div>
  );
}
