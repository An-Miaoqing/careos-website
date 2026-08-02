export type ComparisonItem = {
  id: string;
  label: string;
  friendText: string;
  otherText: string;
};

export const comparison = {
  label: "Vergleich",
  title: "Was Friend anders macht",
  description: "Gut Begleitet Friend ist bewusst kein weiteres Gadget — sondern von Grund auf für ältere Menschen und ihre Familien gedacht.",
  items: [
    {
      id: "speakers",
      label: "Gewöhnliche smarte Lautsprecher",
      otherText: "Für alle gedacht, mit vielen Funktionen, die selten gebraucht werden.",
      friendText: "Von Grund auf für ältere Menschen entwickelt — und direkt mit Familie und Gemeinschaft verbunden.",
    },
    {
      id: "chatbots",
      label: "Gewöhnliche KI-Chat-Apps",
      otherText: "Ein Programm auf dem Smartphone, das nur auf Fragen antwortet.",
      friendText: "Ein vertrauenswürdiger Begleiter mit echter Anbindung an Familie, Notfallkontakte und Gemeinschaft.",
    },
    {
      id: "robots",
      label: "Klassische Begleitroboter",
      otherText: "Bewegliche Mechanik, Kamera und Bildschirm im Mittelpunkt.",
      friendText: "Kein Roboter. Kein Bildschirm, keine Kamera, keine beweglichen Teile — im Mittelpunkt steht das Gespräch.",
    },
  ] satisfies ComparisonItem[],
};
