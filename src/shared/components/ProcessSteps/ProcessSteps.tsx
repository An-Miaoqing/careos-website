export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  activeIndex?: number;
  activeLabel?: string;
};

export default function ProcessSteps({ steps, activeIndex, activeLabel = "Aktuell" }: ProcessStepsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={step.number}
            className={`relative rounded-3xl border p-6 shadow-sm ${
              isActive ? "border-teal bg-teal-light/50" : "border-grey-light bg-white"
            }`}
          >
            {isActive && (
              <span className="absolute right-5 top-5 rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {activeLabel}
              </span>
            )}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-xl font-extrabold text-white">
              {step.number}
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-gray-700">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
