export type ActivityCategory = {
  id: string;
  label: string;
  icon: string;
  items: string[];
  colorClassName: string;
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
      colorClassName: "bg-orange",
    },
    {
      id: "games",
      label: "Spiele",
      icon: "smile",
      items: ["Spiele- und Themennachmittage"],
      colorClassName: "bg-teal",
    },
    {
      id: "workshops",
      label: "Workshops",
      icon: "star",
      items: ["Kreativ-Workshops"],
      colorClassName: "bg-friend-blue",
    },
    {
      id: "exercise",
      label: "Bewegung",
      icon: "walk",
      items: ["Tanzabende und Yoga"],
      colorClassName: "bg-teal-dark",
    },
    {
      id: "celebrations",
      label: "Feste",
      icon: "heart",
      items: ["Geburtstagsfeiern und saisonale Feste"],
      colorClassName: "bg-orange-dark",
    },
    {
      id: "culture",
      label: "Kultur & Ausflüge",
      icon: "family",
      items: ["Musik- und Kulturveranstaltungen", "Lesungen und Vorträge", "Ausflüge und Reisen"],
      colorClassName: "bg-navy",
    },
  ] satisfies ActivityCategory[],
};
