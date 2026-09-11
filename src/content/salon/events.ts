export type SalonEvent = {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  price: string;
  categoryId: string;
};

export const location = "Salon · Skodagasse 25, 1080 Wien";

export const events = {
  label: "Kommende Veranstaltungen",
  title: "Unser Veranstaltungskalender",
  description:
    "Schauen Sie einfach vorbei oder melden Sie sich vorab an — hier finden Sie unsere kommenden Veranstaltungen.",
  items: [
    {
      id: "1",
      date: "Mo 5. Oktober 2026",
      time: "10:00",
      title: "Kaffee & Plaudern",
      description: "Offenes Café-Treffen, keine Anmeldung nötig.",
      price: "€ 3",
      categoryId: "coffee",
    },
    {
      id: "2",
      date: "Mi 7. Oktober 2026",
      time: "15:00",
      title: "Bingo-Nachmittag",
      description: "Kleine Preise, Kaffee inklusive.",
      price: "€ 3",
      categoryId: "games",
    },
    {
      id: "3",
      date: "Do 8. Oktober 2026",
      time: "11:00",
      title: "Gesundheitsvortrag",
      description: "Sturzprävention im Alltag.",
      price: "€ 5",
      categoryId: "culture",
    },
    {
      id: "4",
      date: "Fr 9. Oktober 2026",
      time: "14:00",
      title: "Kreativ-Workshop",
      description: "Aquarell für Anfänger:innen.",
      price: "€ 5",
      categoryId: "workshops",
    },
    {
      id: "5",
      date: "Mo 12. Oktober 2026",
      time: "10:00",
      title: "Kaffee & Plaudern",
      description: "Offenes Café-Treffen.",
      price: "€ 3",
      categoryId: "coffee",
    },
    {
      id: "6",
      date: "Di 13. Oktober 2026",
      time: "17:00",
      title: "Musikabend",
      description: "Wiener Lieder & Klaviermusik.",
      price: "€ 5",
      categoryId: "culture",
    },
    {
      id: "7",
      date: "Mi 14. Oktober 2026",
      time: "15:00",
      title: "Bingo-Nachmittag",
      description: "Wöchentlicher Spielenachmittag.",
      price: "€ 3",
      categoryId: "games",
    },
    {
      id: "8",
      date: "Do 15. Oktober 2026",
      time: "14:00",
      title: "Yoga für Senior:innen",
      description: "Sanfte Bewegung & Entspannung.",
      price: "€ 5",
      categoryId: "exercise",
    },
    {
      id: "9",
      date: "Fr 16. Oktober 2026",
      time: "18:00",
      title: "Tanzabend",
      description: "Wiener Walzer & geselliger Tanz.",
      price: "€ 5",
      categoryId: "exercise",
    },
    {
      id: "10",
      date: "Mo 19. Oktober 2026",
      time: "10:00",
      title: "Kaffee & Plaudern",
      description: "Offenes Café-Treffen.",
      price: "€ 3",
      categoryId: "coffee",
    },
    {
      id: "11",
      date: "Mi 21. Oktober 2026",
      time: "14:00",
      title: "Koch-Workshop",
      description: "Hausgemachte Mehlspeisen.",
      price: "€ 5",
      categoryId: "workshops",
    },
    {
      id: "12",
      date: "Do 22. Oktober 2026",
      time: "11:00",
      title: "Lesung & Gespräch",
      description: "Literatur aus Wien — mit Diskussion.",
      price: "€ 5",
      categoryId: "culture",
    },
    {
      id: "13",
      date: "Sa 25. Oktober 2026",
      time: "15:00",
      title: "Herbstfest",
      description: "Saisonfest mit Musik & Buffet.",
      price: "€ 8",
      categoryId: "celebrations",
    },
    {
      id: "14",
      date: "Mi 28. Oktober 2026",
      time: "15:00",
      title: "Bingo-Nachmittag",
      description: "Wöchentlicher Spielenachmittag.",
      price: "€ 3",
      categoryId: "games",
    },
    {
      id: "15",
      date: "Do 29. Oktober 2026",
      time: "14:00",
      title: "Computerkurs",
      description: "Smartphone & WhatsApp Basics.",
      price: "€ 5",
      categoryId: "workshops",
    },
  ] satisfies SalonEvent[],
};
