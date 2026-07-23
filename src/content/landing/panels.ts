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
  badge?: string;
  ctaMuted?: boolean;
};

export const panels: LandingPanel[] = [
  {
    id: "alltagshilfe",
    number: "01",
    label: "ALLTAGSHILFE",
    headline: "Zuverlässige Hilfe im Alltag — damit Sie zu Hause bleiben können.",
    hoverText:
      "Praktische Unterstützung für ältere Menschen und alle, die Hilfe im Alltag brauchen. Persönlich, verlässlich, auf Ihre Bedürfnisse abgestimmt.",
    features: ["Haushalt & Kochen", "Einkauf & Wege", "Gesellschaft & Gespräche", "Kurzfristig buchbar"],
    ctaLabel: "Mehr erfahren →",
    ctaHref: "/alltagshilfe",
    icon: "home",
    gradientClassName: "from-panel-teal-start to-panel-teal-end",
  },
  {
    id: "salon",
    number: "02",
    label: "GUT BEGLEITET SALON",
    headline: "Gemeinschaft erleben — Einsamkeit überwinden.",
    hoverText:
      "Unser Wiener Salon ist Ihr Wohnzimmer in der Stadt. Kaffee, Kultur, Gespräche und Ausflüge — hier entstehen echte Freundschaften.",
    features: ["Wöchentliche Events", "Ausflüge & Reisen", "Salon Wien 1080", "Mitgliedschaft & Vorteile"],
    ctaLabel: "Zum Salon →",
    ctaHref: "/salon",
    icon: "family",
    gradientClassName: "from-panel-orange-start to-panel-orange-end",
  },
  {
    id: "friend",
    number: "03",
    label: "GUT BEGLEITET FRIEND",
    headline: "Ihr KI-Begleiter. Immer da.",
    hoverText:
      "Ein smarter Tischbegleiter, der zuhört, erinnert und verbindet — einfach per Tastendruck, ohne komplizierte Technik.",
    features: [],
    ctaLabel: "Bald verfügbar — Warteliste eintragen",
    ctaHref: "/friend",
    icon: "robot",
    gradientClassName: "from-navy to-navy-dark",
    badge: "Demnächst",
    ctaMuted: true,
  },
];
