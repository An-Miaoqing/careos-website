export type LandingPanel = {
  id: "alltagshilfe" | "salon" | "friend";
  number: string;
  label: string;
  headline: string;
  hoverText: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: "home" | "family" | "robot";
  gradientClassName: string;
  backgroundImage: string;
  backgroundAlt: string;
  backgroundPositionClassName?: string;
  badge?: string;
  ctaMuted?: boolean;
  hoverEnabled?: boolean;
};

export const panels: LandingPanel[] = [
  {
    id: "alltagshilfe",
    number: "01",
    label: "ALLTAGSHILFE",
    headline: "Zuverlässige Hilfe im Alltag — damit Sie zu Hause bleiben können",
    hoverText:
      "Praktische Unterstützung für ältere Menschen und alle, die Hilfe im Alltag brauchen. Persönlich, verlässlich, auf Ihre Bedürfnisse abgestimmt.",
    features: ["Haushalt & Kochen", "Einkauf & Wege", "Gesellschaft & Gespräche", "Kurzfristig buchbar"],
    ctaLabel: "Mehr erfahren →",
    ctaHref: "/alltagshilfe",
    icon: "home",
    gradientClassName: "from-panel-teal-start to-panel-teal-end",
    backgroundImage: "/spaziergaenge-und-freizeitbegleitung.jpeg",
    backgroundAlt: "Betreuerin begleitet eine Seniorin bei einem Spaziergang im Park",
    backgroundPositionClassName: "object-[center_20%]",
  },
  {
    id: "salon",
    number: "02",
    label: "GUT BEGLEITET SALON",
    headline: "Gemeinschaft erleben — Einsamkeit überwinden",
    hoverText:
      "Unser Wiener Salon ist Ihr Wohnzimmer in der Stadt. Kaffee, Kultur, Gespräche und Ausflüge — hier entstehen echte Freundschaften.",
    features: ["Wöchentliche Events & Workshops", "Ausflüge & Reisen", "Salon Wien 1080", "Mitgliedschaft & Vorteile"],
    ctaLabel: "Zum Salon →",
    ctaHref: "/salon",
    icon: "family",
    gradientClassName: "from-panel-orange-start to-panel-orange-end",
    backgroundImage: "/salon-activity-2.png",
    backgroundAlt: "Generationenübergreifender Zeichen-Workshop im Gut Begleitet Salon",
  },
  {
    id: "friend",
    number: "03",
    label: "GUT BEGLEITET FRIEND",
    headline: "Ihr KI-Begleiter — Immer da",
    hoverText:
      "Ein smarter Tischbegleiter, der zuhört, erinnert und verbindet — einfach per Tastendruck, ohne komplizierte Technik.",
    features: [],
    ctaLabel: "Bald verfügbar — Warteliste eintragen",
    ctaHref: "/friend",
    icon: "robot",
    gradientClassName: "from-navy to-navy-dark",
    backgroundImage: "/gut-friend-1.png",
    backgroundAlt: "Gut Begleitet Friend auf einem Wohnzimmertisch",
    backgroundPositionClassName: "object-[40%_center]",
    badge: "Demnächst",
    ctaMuted: true,
    hoverEnabled: false,
  },
];
