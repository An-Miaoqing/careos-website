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
      id: "districts",
      question: "Welche Bezirke betreuen Sie?",
      answer:
        "Wir sind schwerpunktmäßig in Wien tätig. Kontaktieren Sie uns gerne, damit wir klären können, ob wir auch Ihren Bezirk abdecken.",
    },
    {
      id: "cancel",
      question: "Kann ich einen Termin stornieren?",
      answer:
        "Ja, eine Stornierung ist grundsätzlich möglich. Sprechen Sie uns direkt an, damit wir gemeinsam eine passende Lösung finden.",
    },
    {
      id: "payment",
      question: "Wie kann ich bezahlen?",
      answer:
        "Wir besprechen die für Sie passende Zahlungsart gerne persönlich – kontaktieren Sie uns für Details.",
    },
    {
      id: "relatives",
      question: "Können Angehörige eine Betreuung buchen?",
      answer:
        "Ja, sehr gerne. Viele unserer Anfragen kommen von Angehörigen, die für ihre Eltern oder Familienmitglieder eine verlässliche Begleitung suchen.",
    },
    {
      id: "recurring",
      question: "Sind die Leistungen wiederkehrend buchbar?",
      answer:
        "Ja. Wir bieten sowohl kurzfristige, einmalige Einsätze als auch regelmäßige, wiederkehrende Betreuung an – ganz nach Ihrem Bedarf.",
    },
    {
      id: "languages",
      question: "Welche Sprachen werden unterstützt?",
      answer:
        "Unsere Alltagsbegleitung erfolgt hauptsächlich auf Deutsch. Über unsere Mitarbeiterin Svetlana bieten wir außerdem Begleitung auf Russisch und Ukrainisch an.",
    },
  ] satisfies FaqItem[],
};
