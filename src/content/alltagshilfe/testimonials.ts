export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  relation: string;
};

export const testimonials = {
  label: "Erfahrungsberichte",
  title: "Was unsere Kund:innen sagen",
  items: [
    {
      id: "thomas",
      quote:
        "Ingrid kommt zweimal pro Woche zu meiner Mutter. Seitdem ist sie viel ausgeglichener — und wir als Familie können endlich wieder durchatmen. Gut Begleitet ist genau das, was wir gesucht haben.",
      name: "Thomas R.",
      relation: "Sohn einer Kundin · Wien",
    },
    {
      id: "hermine",
      quote:
        "Ich bin 78 und lebe allein. Mit Maria gehe ich einkaufen, wir kochen zusammen und reden über alles. Es ist keine Pflegerin — es ist eine Freundin, die mir im Alltag hilft. Das ist etwas ganz anderes.",
      name: "Hermine L.",
      relation: "Kundin seit 2025 · Wien 1080",
    },
    {
      id: "andrea",
      quote:
        "Die Koordination mit Elisabeth war vom ersten Anruf an unkompliziert und herzlich. Wir haben innerhalb von zwei Tagen eine passende Begleitung für meinen Vater gefunden.",
      name: "Andrea M.",
      relation: "Tochter eines Kunden · Wien",
    },
    {
      id: "karl",
      quote:
        "Renate hilft mir mit den Behördenformularen, die mich früher überfordert haben. Jetzt ist alles geregelt und ich fühle mich sicher. Ich wüsste nicht, was ich ohne sie täte.",
      name: "Karl B.",
      relation: "Kunde seit 2026 · Wien 1070",
    },
  ] satisfies Testimonial[],
};
