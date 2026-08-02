export type PrivacyPoint = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const privacy = {
  label: "Privatsphäre & Sicherheit",
  title: "Ihre Daten gehören Ihnen",
  description: "Vertrauen ist die Grundlage von Gut Begleitet Friend. Deshalb ist Datenschutz von Anfang an Teil des Designs — nicht nachträglich hinzugefügt.",
  points: [
    {
      id: "gdpr",
      icon: "shield",
      title: "DSGVO-konform",
      description: "Ihre persönlichen Daten bleiben unter Ihrer Kontrolle. Sie können sie jederzeit einsehen, exportieren oder löschen lassen.",
    },
    {
      id: "consent",
      icon: "heart",
      title: "Niemals ohne Zustimmung",
      description: "Ihre Daten werden nie ohne Ihre ausdrückliche Zustimmung weitergegeben oder verkauft.",
    },
    {
      id: "encryption",
      icon: "shield",
      title: "Verschlüsselte Verbindung",
      description: "Die Kommunikation zwischen Gerät und Cloud ist durchgehend verschlüsselt.",
    },
    {
      id: "mute",
      icon: "smile",
      title: "Jederzeit stummschaltbar",
      description: "Eine eigene Taste schaltet das Mikrofon vollständig ab — mit deutlicher Anzeige, wann Friend zuhört.",
    },
  ] satisfies PrivacyPoint[],
};
