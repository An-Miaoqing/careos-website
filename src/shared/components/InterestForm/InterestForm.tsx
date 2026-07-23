import { useState } from "react";
import type { FormEvent } from "react";

export type InterestFormData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type InterestFormProps = {
  interestOptions: string[];
  submitLabel?: string;
  formId?: string;
  onSubmit?: (data: InterestFormData) => void | Promise<void>;
};

function buildInitialState(interestOptions: string[]): InterestFormData {
  return { name: "", email: "", phone: "", interest: interestOptions[0] ?? "", message: "" };
}

export default function InterestForm({
  interestOptions,
  submitLabel = "Interesse registrieren",
  formId = "interest-form",
  onSubmit,
}: InterestFormProps) {
  const [form, setForm] = useState<InterestFormData>(() => buildInitialState(interestOptions));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (onSubmit) {
      await onSubmit(form);
    }

    setSubmitted(true);
    setForm(buildInitialState(interestOptions));
  };

  const update = (field: keyof InterestFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-teal-light p-8 text-center" role="status">
        <p className="text-2xl font-bold text-teal">Vielen Dank für Ihr Interesse!</p>
        <p className="mt-3 text-lg text-gray-700">Wir melden uns so bald wie möglich bei Ihnen.</p>
        <button
          type="button"
          className="mt-6 text-lg font-bold text-teal underline"
          onClick={() => setSubmitted(false)}
        >
          Neue Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form id={formId} className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-base font-bold text-gray-800">
            Name <span className="text-orange">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-grey-light bg-white px-4 py-4 text-lg text-gray-900 placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            placeholder="Vor- und Nachname"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="block text-base font-bold text-gray-800">
            E-Mail <span className="text-orange">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-grey-light bg-white px-4 py-4 text-lg text-gray-900 placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            placeholder="ihre@email.at"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className="block text-base font-bold text-gray-800">
            Telefon (optional)
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="mt-2 w-full rounded-xl border border-grey-light bg-white px-4 py-4 text-lg text-gray-900 placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            placeholder="z. B. 0676 123 4567"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-interest`} className="block text-base font-bold text-gray-800">
            Interessenbereich
          </label>
          <select
            id={`${formId}-interest`}
            name="interest"
            value={form.interest}
            onChange={(event) => update("interest", event.target.value)}
            className="mt-2 w-full rounded-xl border border-grey-light bg-white px-4 py-4 text-lg text-gray-900 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="block text-base font-bold text-gray-800">
          Nachricht
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="mt-2 w-full resize-none rounded-xl border border-grey-light bg-white px-4 py-4 text-lg text-gray-900 placeholder:text-gray-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          placeholder="Erzählen Sie uns kurz von Ihrem Interesse."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-orange px-8 py-4 text-lg font-bold text-white shadow-md transition-colors hover:bg-orange-dark"
      >
        {submitLabel}
      </button>

      <p className="text-center text-sm text-grey-soft">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung zu.
      </p>
    </form>
  );
}
