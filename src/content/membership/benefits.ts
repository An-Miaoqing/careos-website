export type Benefit = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const benefits = {
  label: "Mitgliedschaft",
  title: "Was Mitgliedschaft bedeutet",
  items: [
    {
      id: "priority-access",
      icon: "clock",
      title: "Bevorzugter Zugang zu Veranstaltungen",
      description: "Als Mitglied erfahren Sie frühzeitig von Veranstaltungen im Salon und haben bevorzugten Zugang.",
    },
    {
      id: "member-offers",
      icon: "star",
      title: "Exklusive Mitgliederangebote",
      description: "Profitieren Sie von Angeboten, die ausschließlich unseren Mitgliedern vorbehalten sind.",
    },
    {
      id: "shape-community",
      icon: "heart",
      title: "Das Leben aktiv mitgestalten",
      description: "Bringen Sie Ihre Ideen ein und helfen Sie mit, unsere Gemeinschaft weiterzuentwickeln.",
    },
  ] satisfies Benefit[],
};
