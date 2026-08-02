export type AudienceSegment = {
  id: string;
  label: string;
  icon: string;
  description: string;
};

export const audience = {
  label: "Für wen ist Friend?",
  title: "Entwickelt für ältere Menschen und ihre Familien",
  segments: [
    {
      id: "seniors",
      label: "Ältere Menschen",
      icon: "seniors",
      description: "Für alle, die selbstständig zu Hause leben und sich ab und zu Gesellschaft wünschen.",
    },
    {
      id: "families",
      label: "Familien",
      icon: "family",
      description: "Für Angehörige, die sich Sicherheit und einen einfachen Draht zu ihren Liebsten wünschen.",
    },
    {
      id: "caregivers",
      label: "Betreuungspersonen",
      icon: "help",
      description: "Für Pflege- und Betreuungspersonen, die eine verlässliche Verbindung zu ihren Klient:innen schätzen.",
    },
  ] satisfies AudienceSegment[],
};
