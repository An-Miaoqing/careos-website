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
      id: "cost",
      question: "Was kostet die Mitgliedschaft?",
      answer:
        "Die Details zur Mitgliedschaft besprechen wir gerne persönlich mit Ihnen — kontaktieren Sie uns für weitere Informationen.",
    },
    {
      id: "salon-guests",
      question: "Muss ich Mitglied sein, um am Salon teilzunehmen?",
      answer: "Nein. Der Salon ist offen für Mitglieder, Gäste und alle Interessierten.",
    },
    {
      id: "newsletter-only",
      question: "Kann ich mich auch nur für den Newsletter anmelden, ohne Mitglied zu werden?",
      answer: "Ja, gerne. Das Newsletter-Anmeldeformular finden Sie in der Fußzeile jeder Seite.",
    },
    {
      id: "volunteer",
      question: "Wie kann ich mich als Freiwillige:r engagieren?",
      answer: "Kontaktieren Sie uns über das Formular unten — wir freuen uns über Ihr Interesse.",
    },
    {
      id: "next-steps",
      question: "Wie geht es nach meiner Anfrage weiter?",
      answer: "Wir melden uns persönlich bei Ihnen, klären offene Fragen und laden Sie ein, uns kennenzulernen.",
    },
    {
      id: "family",
      question: "Kann meine Familie auch teilnehmen?",
      answer: "Sehr gerne. Sprechen Sie uns an, damit wir gemeinsam die passende Lösung für Ihre Familie finden.",
    },
  ] satisfies FaqItem[],
};
