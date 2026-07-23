import type { BookingStep } from "../../../types/booking";

const stepLabels = ["Termin", "Leistung", "Dauer", "Ihre Angaben"];

type BookingStepperProps = {
  step: BookingStep;
};

export default function BookingStepper({ step }: BookingStepperProps) {
  return (
    <div className="rounded-[1.5rem] border border-grey-light bg-teal-light/70 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
            Schritt {step} von 4
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-teal sm:text-3xl">
            {step === 1 && "1. Termin auswählen"}
            {step === 2 && "2. Leistung auswählen"}
            {step === 3 && "3. Dauer auswählen"}
            {step === 4 && "4. Ihre Angaben"}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-700">
            Ein einfacher Ablauf für eine ruhige Planung – passend für Sie, Ihre Angehörigen
            und alle, die Unterstützung zu Hause wünschen.
          </p>
        </div>
        <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal shadow-sm">
          {stepLabels[step - 1]}
        </div>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-teal to-orange transition-all duration-300"
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        />
      </div>
    </div>
  );
}
