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
      id: "membership-required",
      question: "Muss ich Mitglied sein, um teilzunehmen?",
      answer: "Nein. Der Salon ist offen für Mitglieder, Gäste und alle Interessierten.",
    },
    {
      id: "cost",
      question: "Was kostet der Besuch?",
      answer: "Der Eintritt variiert je nach Veranstaltung, meist zwischen € 3 und € 8.",
    },
    {
      id: "registration",
      question: "Muss ich mich vorher anmelden?",
      answer:
        "Für die meisten Veranstaltungen ist eine Anmeldung sinnvoll. Offene Treffen wie „Kaffee & Plaudern” benötigen keine Anmeldung.",
    },
    {
      id: "accessibility",
      question: "Ist der Salon barrierefrei?",
      answer: "Ja, der Veranstaltungsort bietet einen barrierearmen Zugang im Erdgeschoss.",
    },
    {
      id: "location",
      question: "Wo findet der Salon statt?",
      answer: "Im Kepinski Studio, Skodagasse 25, 1080 Wien.",
    },
  ] satisfies FaqItem[],
};
