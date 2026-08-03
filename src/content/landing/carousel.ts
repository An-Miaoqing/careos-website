export type NewsCarouselCard = {
  type: "news";
  id: string;
  date: string;
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
};

export type EventCarouselCard = {
  type: "event";
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
  price: string;
  ctaLabel: string;
  href: string;
  completed?: boolean;
  categoryId: string;
};

export type ProjectCarouselCard = {
  type: "project";
  id: string;
  status: string;
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
};

export type MoreCarouselCard = {
  type: "more";
  id: string;
  label: string;
  href: string;
};

export type CarouselCardData =
  | NewsCarouselCard
  | EventCarouselCard
  | ProjectCarouselCard
  | MoreCarouselCard;

const SALON_LOCATION = "Salon · Skodagasse 25, 1080 Wien";

export const carouselCards: CarouselCardData[] = [
  {
    type: "news",
    id: "news-1",
    date: "07. Juli 2026",
    title: "Herzlich Willkommen, Elisabeth W. — unsere neue Koordinatorin",
    text: "Mit Elisabeth Wallner stärkt Gut Begleitet das Alltagshilfe-Team. Sie koordiniert Einsätze und ist Ihre erste Ansprechperson.",
    ctaLabel: "Mehr lesen →",
    href: "/news",
  },
  {
    type: "news",
    id: "news-2",
    date: "01. Oktober 2026",
    title: "Gut Begleitet startet Kooperation mit Hochschule Campus Wien",
    text: "Sozialpädagogik-Studierende unterstützen uns als Freiwillige bei Events und Begleitdiensten.",
    ctaLabel: "Mehr lesen →",
    href: "/news",
  },
  {
    type: "event",
    id: "event-1",
    date: "Fr 16. Oktober 2026",
    time: "18:00",
    title: "Tanzabend — Wiener Walzer & geselliger Tanz",
    location: SALON_LOCATION,
    price: "€ 5",
    ctaLabel: "Jetzt anmelden →",
    href: "/kontakt",
    categoryId: "exercise",
  },
  {
    type: "event",
    id: "event-2",
    date: "Do 8. Oktober 2026",
    time: "11:00",
    title: "Gesundheitsvortrag: Sturzprävention im Alltag",
    location: SALON_LOCATION,
    price: "€ 5",
    ctaLabel: "Jetzt anmelden →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-3",
    date: "Sa 25. Oktober 2026",
    time: "15:00",
    title: "Herbstfest — Saisonfest mit Musik & Buffet",
    location: SALON_LOCATION,
    price: "€ 8",
    ctaLabel: "Jetzt anmelden →",
    href: "/kontakt",
    categoryId: "celebrations",
  },
  {
    type: "project",
    id: "project-1",
    status: "IN ENTWICKLUNG",
    title: "Gut Begleitet Friend — Der KI-Begleiter für zu Hause",
    text: "Unser smarter Tischbegleiter befindet sich in der Entwicklungsphase. Tragen Sie sich auf unsere Warteliste ein und erfahren Sie als Erste:r, wann er startet.",
    ctaLabel: "Warteliste eintragen →",
    href: "/friend",
  },
  {
    type: "project",
    id: "project-2",
    status: "PILOTPHASE",
    title: "Gut Begleitet Expertennetzwerk Wien",
    text: "Wir bauen ein Netzwerk aus Ärzten, Beratern und Fachleuten auf, die unsere Mitglieder direkt unterstützen können.",
    ctaLabel: "Mehr erfahren →",
    href: "/kontakt",
  },
  {
    type: "project",
    id: "project-3",
    status: "BALD VERFÜGBAR",
    title: "Neue Ausflugsserie 2027 — Österreich entdecken",
    text: "Gemeinsame Tagesausflüge ab Frühjahr 2027: Wachau, Neusiedler See, Salzburg — immer organisiert, immer sicher.",
    ctaLabel: "Vormerken →",
    href: "/kontakt",
  },
  {
    type: "news",
    id: "news-3",
    date: "Juli 2026",
    title: "Rückblick: Sommerfest Juli 2026",
    text: "Ein sonniger Nachmittag voller Musik, Gespräche und guter Laune — danke an alle, die dabei waren.",
    ctaLabel: "Fotos ansehen →",
    href: "/news",
  },
  {
    type: "event",
    id: "event-4",
    date: "Mo 12. Oktober 2026",
    time: "15:00",
    title: "Bingo-Nachmittag",
    location: SALON_LOCATION,
    price: "€ 3",
    ctaLabel: "Jetzt anmelden →",
    href: "/kontakt",
    categoryId: "games",
  },
  {
    type: "news",
    id: "news-4",
    date: "Oktober 2026",
    title: "Gut Begleitet in den Medien: ORF Wien-Bericht",
    text: "Der ORF hat über unsere Arbeit berichtet — ein schöner Moment für unser gesamtes Team.",
    ctaLabel: "Artikel lesen →",
    href: "/news",
  },
  {
    type: "event",
    id: "event-5",
    date: "Do 29. Oktober 2026",
    time: "14:00",
    title: "Computerkurs: WhatsApp Basics",
    location: SALON_LOCATION,
    price: "€ 5",
    ctaLabel: "Jetzt anmelden →",
    href: "/kontakt",
    categoryId: "workshops",
  },
  {
    type: "project",
    id: "project-4",
    status: "KOOPERATION GESUCHT",
    title: "Gut Begleitet Gesundheitsnetzwerk — Kooperation gesucht",
    text: "Wir suchen Partner:innen aus dem Gesundheitsbereich, um unser Netzwerk für Mitglieder weiter auszubauen.",
    ctaLabel: "Mehr erfahren →",
    href: "/kontakt",
  },
  {
    type: "news",
    id: "news-5",
    date: "Oktober 2026",
    title: "Freiwillige gesucht — Helfen Sie mit!",
    text: "Sie möchten Senior:innen im Alltag unterstützen und dabei etwas Sinnvolles tun? Wir freuen uns auf Ihre Nachricht.",
    ctaLabel: "Jetzt melden →",
    href: "/kontakt",
  },
  {
    type: "event",
    id: "event-6",
    date: "Mi 21. Oktober 2026",
    time: "14:00",
    title: "Koch-Workshop: Hausgemachte Mehlspeisen",
    location: SALON_LOCATION,
    price: "€ 5",
    ctaLabel: "Jetzt anmelden →",
    href: "/kontakt",
    categoryId: "workshops",
  },
  {
    type: "more",
    id: "more-1",
    label: "Alle Neuigkeiten ansehen →",
    href: "/news",
  },
];
