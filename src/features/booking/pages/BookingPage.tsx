import { useMemo, useState, type FormEvent } from "react";
import { BookingApiError, createBooking, type CreateBookingRequest } from "../../../api/booking";
import Hero from "../../../shared/components/Hero/Hero";
import type { BookingFormData, BookingStep } from "../../../types/booking";
import BookingStepper from "../components/BookingStepper";
import CalendarSelection, { availability } from "../components/CalendarSelection";
import ServiceSelection, { services } from "../components/ServiceSelection";
import DurationSelection, { durations } from "../components/DurationSelection";
import PersonalInformation from "../components/PersonalInformation";
import ReviewBooking from "../components/ReviewBooking";
import BookingConfirmation from "../components/BookingConfirmation";

const initialForm: BookingFormData = {
  date: "",
  time: "",
  serviceCode: "",
  durationId: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  street: "",
  houseNumber: "",
  apartment: "",
  postalCode: "",
  city: "",
  customerNote: "",
  privacyAccepted: false,
  privacyAcceptedAt: null,
};

const COMPANY_ZVR_NUMBER = "1429148037";

const buildAppointmentDateTime = (date: string, time: string) => {
  if (!date || !time) {
    return "";
  }

  const [hours, minutes] = time.split(":").map(Number);
  const [year, month, day] = date.split("-").map(Number);
  const appointmentDate = new Date(year, month - 1, day, hours, minutes, 0, 0);

  return appointmentDate.toISOString();
};

const isValidEmail = (email: string) => {
  if (!email) {
    return true;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default function BookingPage() {
  const [step, setStep] = useState<BookingStep>(1);
  const [form, setForm] = useState<BookingFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedDate = useMemo(
    () => availability.find((slot) => slot.date === form.date),
    [form.date],
  );
  const selectedService = useMemo(
    () => services.find((service) => service.serviceCode === form.serviceCode),
    [form.serviceCode],
  );
  const selectedDuration = useMemo(
    () => durations.find((duration) => duration.id === form.durationId),
    [form.durationId],
  );
  const appointmentDateTime = useMemo(
    () => buildAppointmentDateTime(form.date, form.time),
    [form.date, form.time],
  );

  const updateField = (field: keyof BookingFormData, value: string | boolean | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return Boolean(form.date && form.time);
      case 2:
        return Boolean(form.serviceCode);
      case 3:
        return Boolean(form.durationId);
      case 4:
        return Boolean(form.firstName && form.lastName && form.phone && form.street && form.houseNumber && form.postalCode && form.city && form.serviceCode && form.durationId && form.date && form.time && form.privacyAccepted);
      default:
        return false;
    }
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = "Bitte geben Sie Ihren Vornamen ein.";
    }
    if (!form.lastName.trim()) {
      nextErrors.lastName = "Bitte geben Sie Ihren Nachnamen ein.";
    }
    if (!form.phone.trim()) {
      nextErrors.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    }
    if (!form.street.trim()) {
      nextErrors.street = "Bitte geben Sie Ihre Straße ein.";
    }
    if (!form.houseNumber.trim()) {
      nextErrors.houseNumber = "Bitte geben Sie Ihre Hausnummer ein.";
    }
    if (!form.postalCode.trim()) {
      nextErrors.postalCode = "Bitte geben Sie Ihre Postleitzahl ein.";
    }
    if (!form.city.trim()) {
      nextErrors.city = "Bitte geben Sie Ihren Ort ein.";
    }
    if (!form.serviceCode) {
      nextErrors.serviceCode = "Bitte wählen Sie eine Leistung aus.";
    }
    if (!form.durationId) {
      nextErrors.durationId = "Bitte wählen Sie eine Dauer aus.";
    }
    if (!form.date || !form.time) {
      nextErrors.appointment = "Bitte wählen Sie einen Termin aus.";
    }
    if (!form.privacyAccepted) {
      nextErrors.privacyAccepted = "Bitte akzeptieren Sie die Datenschutzerklärung.";
    }
    if (!isValidEmail(form.email)) {
      nextErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (!selectedDuration?.hours) {
      setErrors({
        durationId: "Bitte wählen Sie eine konkrete Dauer aus.",
      });
      return;
    }

    const customerNote = [
      form.customerNote.trim(),
      appointmentDateTime ? `Gewünschter Termin: ${appointmentDateTime}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const bookingPayload: CreateBookingRequest = {
      companyZvrNumber: COMPANY_ZVR_NUMBER,
      serviceCode: form.serviceCode,
      hours: selectedDuration.hours,
      ...(customerNote ? { customerNote } : {}),
      household: {
        name: `Haushalt ${form.lastName.trim()}`,
        street: form.street.trim(),
        houseNumber: form.houseNumber.trim(),
        apartment: form.apartment.trim() || undefined,
        postalCode: form.postalCode.trim(),
        city: form.city.trim(),
      },
      client: {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
      },
    };

    try {
      setIsSubmitting(true);
      await createBooking(bookingPayload);
      setForm(initialForm);
      setSubmitted(true);
    } catch (error) {
      setErrors({
        form:
          error instanceof BookingApiError
            ? error.message
            : "Derzeit kann keine Anfrage gesendet werden. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        eyebrow="Termin buchen"
        title="Termin Buchen"
        description="Planen Sie Ihren Termin bequem online – persönlich, verständlich und ohne Stress."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-grey-light bg-white p-5 shadow-xl shadow-teal/10 sm:p-8 lg:p-10">
            <div className="mb-6 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 01-1.063.852l-.041-.02a.75.75 0 01-.852-1.063l.708-2.836a.75.75 0 01.852-1.063zM12 2.25a.75.75 0 01.75.75v.75h-1.5V3A.75.75 0 0112 2.25zm0 3.75a.75.75 0 00-.75.75v.75h1.5V6.75A.75.75 0 0012 6zm0 3.75a.75.75 0 00-.75.75v.75h1.5v-.75A.75.75 0 0012 9.75zm0 3.75a.75.75 0 00-.75.75v.75h1.5v-.75A.75.75 0 0012 13.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">Wichtiger Hinweis</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-700">
                    Unsere Online-Terminbuchung befindet sich derzeit noch im Aufbau.
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-gray-700">
                    Bitte vereinbaren Sie Ihren Termin telefonisch unter:
                  </p>
                  <a href="tel:+4368110194236" className="mt-3 inline-flex items-center rounded-full bg-white px-4 py-2 text-base font-bold text-orange shadow-sm transition-colors hover:bg-orange-light">
                    +43 681 1019 4236
                  </a>
                  <p className="mt-3 text-base leading-relaxed text-gray-700">
                    Vielen Dank für Ihr Verständnis.
                  </p>
                </div>
              </div>
            </div>

            <BookingStepper step={step} />

            <div className="mt-8" data-integration="zoho-bookings-ready">
              {submitted ? (
                <BookingConfirmation
                  onReset={() => {
                    setSubmitted(false);
                    setStep(1);
                    setForm(initialForm);
                  }}
                />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {errors.form && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
                      {errors.form}
                    </div>
                  )}

                  {step === 1 && (
                    <CalendarSelection form={form} updateField={updateField} selectedDate={selectedDate} />
                  )}

                  {step === 2 && <ServiceSelection form={form} updateField={updateField} />}

                  {step === 3 && <DurationSelection form={form} updateField={updateField} />}

                  {step === 4 && (
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                      <PersonalInformation form={form} updateField={updateField} errors={errors} />
                      <ReviewBooking
                        form={form}
                        updateField={updateField}
                        errors={errors}
                        selectedDate={selectedDate}
                        selectedService={selectedService}
                        selectedDuration={selectedDuration}
                      />
                    </div>
                  )}

                  <div className="flex flex-col-reverse gap-3 border-t border-grey-light pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={() => setStep((current) => (current > 1 ? (current - 1) as BookingStep : current))}
                          className="rounded-full border border-grey-light px-6 py-3 text-lg font-semibold text-gray-700 transition-colors hover:bg-grey-light"
                        >
                          Zurück
                        </button>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {step < 4 ? (
                        <button
                          type="button"
                          onClick={() => setStep((current) => (current < 4 ? (current + 1) as BookingStep : current))}
                          disabled={!isStepValid()}
                          className="rounded-full bg-teal px-7 py-3 text-lg font-bold text-white shadow-lg shadow-teal/20 transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:bg-gray-300"
                        >
                          Weiter
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={!form.privacyAccepted || isSubmitting}
                          className="rounded-full bg-orange px-7 py-3 text-lg font-bold text-white shadow-lg shadow-orange/30 transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:bg-gray-300"
                        >
                          {isSubmitting ? "Anfrage wird gesendet..." : "Termin anfragen"}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
