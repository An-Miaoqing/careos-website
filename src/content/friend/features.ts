export type FriendFeature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const features = {
  label: "Funktionen",
  title: "Was Companion Friend kann",
  items: [
    {
      id: "conversation",
      icon: "chat",
      title: "Gespräch & Gesellschaft",
      description: "Natürliche Gespräche, Geschichten und ein offenes Ohr für den Alltag.",
    },
    {
      id: "family",
      icon: "family",
      title: "Familie verbunden",
      description: "Sprachanrufe und Nachrichten an ausgewählte Kontakte — ganz ohne Smartphone.",
    },
    {
      id: "reminders",
      icon: "clock",
      title: "Erinnerungen",
      description: "An Medikamente, Termine, den Kalender und Geburtstage.",
    },
    {
      id: "emergency",
      icon: "shield",
      title: "Notruf-Taste",
      description: "Eine gut sichtbare Taste, um im Notfall festgelegte Kontakte zu erreichen.",
    },
    {
      id: "memory",
      icon: "star",
      title: "Gedächtnisübungen",
      description: "Kleine Übungen sowie Erinnerung an Datum, Uhrzeit und Tagesablauf.",
    },
    {
      id: "daily-info",
      icon: "home",
      title: "Alltagsinfos",
      description: "Wetter, Nachrichten und Informationen zu öffentlichen Verkehrsmitteln.",
    },
  ] satisfies FriendFeature[],
};
