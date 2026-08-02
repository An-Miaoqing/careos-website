export type ActivityCategory = {
  id: string;
  label: string;
  icon: string;
  items: string[];
};

export const activities = {
  label: "Aktivitäten",
  title: "Was Sie bei uns erwartet",
  categories: [
    {
      id: "coffee",
      label: "Kaffee & Gespräch",
      icon: "chat",
      items: ["Kaffee, Kuchen und gemeinsame Mittagstische"],
    },
    {
      id: "games",
      label: "Spiele",
      icon: "smile",
      items: ["Spiele- und Themennachmittage"],
    },
    {
      id: "workshops",
      label: "Workshops",
      icon: "star",
      items: ["Kreativ-Workshops"],
    },
    {
      id: "exercise",
      label: "Bewegung",
      icon: "walk",
      items: ["Tanzabende und Yoga"],
    },
    {
      id: "celebrations",
      label: "Feste",
      icon: "heart",
      items: ["Geburtstagsfeiern und saisonale Feste"],
    },
    {
      id: "culture",
      label: "Kultur & Ausflüge",
      icon: "family",
      items: ["Musik- und Kulturveranstaltungen", "Lesungen und Vorträge", "Ausflüge und Reisen"],
    },
  ] satisfies ActivityCategory[],
};
