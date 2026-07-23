type StatItemProps = {
  value: string;
  label: string;
  light?: boolean;
};

export default function StatItem({ value, label, light = true }: StatItemProps) {
  return (
    <div className="text-center">
      <p className={`text-2xl font-extrabold sm:text-3xl ${light ? "text-white" : "text-teal"}`}>
        {value}
      </p>
      <p className={`mt-1 text-sm font-semibold sm:text-base ${light ? "text-white/80" : "text-gray-600"}`}>
        {label}
      </p>
    </div>
  );
}
