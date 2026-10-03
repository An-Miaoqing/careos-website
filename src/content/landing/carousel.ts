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
  description: string;
  location: string;
  price: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
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

export const carouselCards: CarouselCardData[] = [
  {
    type: "event",
    id: "event-september-puja",
    date: "Di. 4. September",
    time: "19:00–20:30",
    title: "Puja-Tanz & indische Teekultur",
    description: "Tanz, indische Esskultur sowie Tee- und Samosa-Verkostung mit Judith Jayanti.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "Gratis · Anmeldung erforderlich",
    ctaLabel: "Anmelden →",
    href: "/kontakt",
    categoryId: "exercise",
  },
  {
    type: "event",
    id: "event-september-drink-draw",
    date: "Di. 15. September",
    time: "18:30–21:30",
    title: "Drink & Draw",
    description: "Live-Figurenmodell, Material, Getränke und Snacks für Anfänger:innen und Neugierige.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 35 · Reservierung erforderlich",
    ctaLabel: "Reservieren →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-september-snap-pose",
    date: "Do. 17. September",
    time: "13:00–16:30",
    title: "Snap & Pose",
    description: "Fotokabine mit Fernauslöser: so viele Fotos machen, wie Sie möchten – ganz ohne Fotograf:in.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "Gratis",
    image: "/Snap_Pose.jpeg",
    imageAlt: "Illustrierte Familie vor einer Fotokulisse",
    imagePosition: "center 32%",
    ctaLabel: "Mehr erfahren →",
    href: "/kontakt",
    categoryId: "celebrations",
  },
  {
    type: "event",
    id: "event-september-tai-chi-1",
    date: "Sa. 19. September",
    time: "10:00–11:00",
    title: "Tai Chi",
    description: "Tai Chi mit der zertifizierten Lehrerin Yana Murray – mit langjähriger Erfahrung und Training in China.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "Gratis",
    image: "/Tai_Chi.jpeg",
    imageAlt: "Frau beim Tai Chi vor dem Kunsthistorischen Museum in Wien",
    imagePosition: "center 67%",
    ctaLabel: "Anmelden →",
    href: "/kontakt",
    categoryId: "exercise",
  },
  {
    type: "event",
    id: "event-september-vino",
    date: "Sa. 19. September",
    time: "19:00–21:00",
    title: "In Vino Veritas",
    description: "Wein, Musik und Geschichten lassen die Seele Wiens mit Performance und Live-Musik lebendig werden.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 69",
    ctaLabel: "Reservieren →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-september-tai-chi-2",
    date: "Sa. 26. September",
    time: "10:00–11:00",
    title: "Tai Chi",
    description: "Tai Chi mit der zertifizierten Lehrerin Yana Murray – mit langjähriger Erfahrung und Training in China.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 20",
    ctaLabel: "Anmelden →",
    href: "/kontakt",
    categoryId: "exercise",
  },
  {
    type: "event",
    id: "event-september-wine-tasting",
    date: "Mi. 30. September",
    time: "19:00–20:30",
    title: "Weinproben",
    description: "Griechische Weine mit Stelios, griechischem Sommelier und Inhaber von Wine Tasting Vienna.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 20 für alle",
    ctaLabel: "Reservieren →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-october-vino-1",
    date: "Sa. 3. Oktober",
    time: "19:00–21:30",
    title: "In Vino Veritas",
    description: "Wein, Musik und Geschichten lassen die Seele Wiens mit Performance und Live-Musik lebendig werden.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 69",
    ctaLabel: "Reservieren →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-october-exhibition",
    date: "10. Oktober–26. November",
    time: "Vernissage 19:00–22:00",
    title: "Art Exhibition: Renata’s Garten",
    description: "Ausstellung von Hans Frauendorfer mit kostenloser Vernissage am 10. Oktober.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "Gratis",
    ctaLabel: "Mehr erfahren →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-october-pumpkin-carving",
    date: "Mi. 14. Oktober",
    time: "13:00–18:00",
    title: "Kürbisschnitzen",
    description: "Bringen Sie Ihren eigenen Kürbis mit – das Werkzeug stellen wir bereit. Spaß für Groß und Klein.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 5",
    image: "/event-art-pumpkin.png",
    imageAlt: "Orangefarbene Halloween-Kürbisillustration",
    imageFit: "contain",
    ctaLabel: "Anmelden →",
    href: "/kontakt",
    categoryId: "workshops",
  },
  {
    type: "event",
    id: "event-october-vino-2",
    date: "Sa. 17. Oktober",
    time: "19:00–21:30",
    title: "In Vino Veritas",
    description: "Wein, Musik und Geschichten lassen die Seele Wiens mit Performance und Live-Musik lebendig werden.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 69",
    ctaLabel: "Reservieren →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-october-drink-draw",
    date: "Fr. 23. Oktober",
    time: "18:30–21:30",
    title: "Drink & Draw",
    description: "Live-Figurenmodell, Material, Getränke und Snacks für Anfänger:innen und Neugierige.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 35 · Reservierung erforderlich",
    ctaLabel: "Reservieren →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-october-vino-3",
    date: "Sa. 24. Oktober",
    time: "19:00–21:30",
    title: "In Vino Veritas",
    description: "Wein, Musik und Geschichten lassen die Seele Wiens mit Performance und Live-Musik lebendig werden.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 69",
    ctaLabel: "Reservieren →",
    href: "/kontakt",
    categoryId: "culture",
  },
  {
    type: "event",
    id: "event-october-trick-or-treat",
    date: "Sa. 31. Oktober",
    time: "16:00–18:00",
    title: "Trick or Treat",
    description: "Für Kinder: im Kostüm vorbeikommen und ein kostenloses Fotoshooting sowie Süßigkeiten erhalten.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "Gratis",
    ctaLabel: "Mehr erfahren →",
    href: "/kontakt",
    categoryId: "celebrations",
  },
  {
    type: "event",
    id: "event-october-halloween",
    date: "Sa. 31. Oktober",
    time: "19:00–23:30",
    title: "Halloween Party",
    description: "Kostümwettbewerb, Fotobox und gute Stimmung. Getränke bitte selbst mitbringen.",
    location: "Kepinski Studio · Skodagasse 25, 1080 Wien",
    price: "€ 5",
    image: "/event-art-bat.png",
    imageAlt: "Kleine schwarze Fledermaus mit orangefarbenen Augen",
    imageFit: "contain",
    ctaLabel: "Anmelden →",
    href: "/kontakt",
    categoryId: "celebrations",
  },
  {
    type: "project",
    id: "project-1",
    status: "IN ENTWICKLUNG",
    title: "Companion Friend — Der KI-Begleiter für zu Hause",
    text: "Unser smarter Tischbegleiter befindet sich in der Entwicklungsphase. Tragen Sie sich auf unsere Warteliste ein und erfahren Sie als Erste:r, wann er startet.",
    ctaLabel: "Warteliste eintragen →",
    href: "/friend",
  },
  {
    type: "project",
    id: "project-4",
    status: "KOOPERATION GESUCHT",
    title: "Companion Gesundheitsnetzwerk — Kooperation gesucht",
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
    type: "more",
    id: "more-1",
    label: "Alle Neuigkeiten ansehen →",
    href: "/news",
  },
];
