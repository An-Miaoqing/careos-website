export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq = {
  label: "Häufige Fragen",
  title: "Gut zu wissen",
  items: [
    {
      id: "medical",
      question: "Ersetzt Friend professionelle Pflege?",
      answer:
        "Nein. Gut Begleitet Friend ist ein Begleiter für Gespräche, Erinnerungen und Kontakt zur Familie — keine medizinische Pflege und kein Ersatz dafür. Allgemeine Wohlfühl-Hinweise sind nicht-medizinischer Natur.",
    },
    {
      id: "listening",
      question: "Hört Friend immer zu?",
      answer:
        "Sie sehen jederzeit deutlich, wenn Friend zuhört. Eine eigene Taste schaltet das Mikrofon vollständig ab.",
    },
    {
      id: "mute",
      question: "Kann ich Friend jederzeit stummschalten?",
      answer: "Ja. Eine dedizierte Taste deaktiviert die Mikrofone vollständig.",
    },
    {
      id: "family-connection",
      question: "Wie verbindet sich Friend mit meiner Familie?",
      answer:
        "Über Sprachanrufe und Nachrichten an von Ihnen festgelegte Kontakte — einfach per Stimme, ohne Smartphone.",
    },
    {
      id: "data",
      question: "Was passiert mit meinen Daten?",
      answer:
        "Ihre Daten gehören Ihnen. Sie können sie jederzeit einsehen, exportieren oder löschen lassen, und sie werden nie ohne Ihre Zustimmung weitergegeben.",
    },
    {
      id: "availability",
      question: "Ist Friend schon erhältlich?",
      answer:
        "Noch nicht — Friend befindet sich aktuell in der Entwicklung. Tragen Sie sich unverbindlich ein, um informiert zu werden, sobald es losgeht.",
    },
    {
      id: "technical-knowledge",
      question: "Braucht man technisches Wissen, um Friend zu benutzen?",
      answer: "Nein. Ein Tastendruck oder ein gesprochenes Wort genügt — keine App, kein Vorwissen nötig.",
    },
  ] satisfies FaqItem[],
};
