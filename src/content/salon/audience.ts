export type AudienceSegment = {
  id: string;
  label: string;
  icon: string;
  description: string;
};

export const audience = {
  label: "Für wen ist der Salon?",
  title: "Ein Ort für alle, die Gemeinschaft schätzen",
  quote: "Ein Ort für alle: Gemeinsam statt einsam",
  segments: [
    {
      id: "seniors",
      label: "Ältere Menschen",
      icon: "seniors",
      description: "Für alle, die aktiv bleiben möchten.",
    },
    {
      id: "relatives",
      label: "Angehörige",
      icon: "family",
      description: "Für Angehörige, die einen sicheren, lebendigen Ort für ihre Familie suchen.",
    },
    {
      id: "everyone",
      label: "Alle, die Gemeinschaft schätzen",
      icon: "heart",
      description: "Unabhängig von Alter oder Lebenssituation.",
    },
  ] satisfies AudienceSegment[],
};
