type BookingConfirmationProps = {
  onReset: () => void;
};

export default function BookingConfirmation({ onReset }: BookingConfirmationProps) {
  return (
    <div className="rounded-[1.5rem] border border-teal/20 bg-teal-light p-8 text-center shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
        Vielen Dank
      </p>
      <h3 className="mt-3 text-2xl font-extrabold text-teal sm:text-3xl">
        Vielen Dank für Ihre Anfrage.
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
        Wir werden uns zeitnah mit Ihnen in Verbindung setzen.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-full bg-orange px-7 py-3 text-lg font-bold text-white shadow-lg shadow-orange/30 transition-colors hover:bg-orange-dark"
      >
        Neue Anfrage starten
      </button>
    </div>
  );
}
