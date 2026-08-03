export const missionContent = {
  welcome: {
    title: "Herzlich willkommen bei Gut Begleitet",
    intro:
      "Gut Begleitet ist Ihr verlässlicher Partner für Alltagshilfe und Begleitung in Wien. Wir sind da, wenn Unterstützung im Alltag gebraucht wird — und wenn jemand fehlt, der einfach da ist. Für Angehörige bedeutet das: eine vertrauensvolle Hilfe, auf die sie sich verlassen können.",
  },
  mission: {
    title: "Unsere Mission",
    text: "Unsere Mission ist es, Menschen im Alltag zu begleiten — mit Herz, Respekt und Zuverlässigkeit. Wir möchten, dass Sie oder Ihre Angehörigen sich sicher, wertgeschätzt und nie allein fühlen. Denn gute Alltagshilfe bedeutet mehr als Unterstützung: Sie schenkt Lebensqualität, Gemeinschaft und Vertrauen.",
  },
  highlights: {
    title: "Was uns auszeichnet",
    items: [
      {
        title: "Persönliche Betreuung",
        text: "Bei uns sind Sie keine Nummer. Wir kennen Ihre Geschichte, Ihre Gewohnheiten und Ihre Wünsche – und richten uns danach.",
      },
      {
        title: "Verlässlichkeit",
        text: "Termine, die eingehalten werden. Zusagen, auf die Sie bauen können. Und ein Team, das für Sie da ist.",
      },
      {
        title: "Flexibilität",
        text: "Ob einmal pro Woche oder täglich – wir passen uns Ihrem Rhythmus und Ihrer Lebenssituation an.",
      },
      {
        title: "Nähe und Vertrauen",
        text: "Wir arbeiten mit Menschen, nicht mit Formularen. Vertrauen entsteht durch ehrliche, warmherzige Betreuung.",
      },
    ],
  },
  forWhom: {
    title: "Für wen wir da sind",
    text: "Wir sind für Senior:innen, alleinlebende Personen, Menschen mit eingeschränkter Mobilität, Familien mit Unterstützungsbedarf sowie Personen nach Krankheit oder Krankenhausaufenthalt. Auch Angehörige, die Entlastung suchen, sind bei uns herzlich willkommen.",
  },
};

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
