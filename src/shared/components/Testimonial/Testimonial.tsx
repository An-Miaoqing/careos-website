type TestimonialProps = {
  quote: string;
  name: string;
  relation: string;
};

export default function Testimonial({ quote, name, relation }: TestimonialProps) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-grey-light bg-white p-6 shadow-sm">
      <div className="flex gap-0.5 text-orange" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg key={index} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-gray-700">
        „{quote}“
      </blockquote>
      <figcaption className="mt-5 text-sm font-bold text-gray-900">
        {name}
        <span className="block text-sm font-normal text-grey-soft">{relation}</span>
      </figcaption>
    </figure>
  );
}
