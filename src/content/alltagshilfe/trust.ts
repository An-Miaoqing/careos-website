export type HelperProfile = {
  id: string;
  name: string;
  role: string;
  since: string;
  bio: string;
  skills: string[];
};

export const trust = {
  label: "Vertrauen & Sicherheit",
  title: "Zuverlässige Menschen, denen Sie vertrauen können",
  intro:
    "Alle unsere Helfer:innen werden persönlich ausgewählt, geprüft und begleitet. Sie bringen nicht nur Erfahrung mit – sondern echte Menschlichkeit.",
  association: {
    name: "Companion – Verein für Alltagshilfe für Senioren",
    zvrNumber: "1429148037",
    founded: "Gegründet 2025",
  },
  serviceAreaNote:
    "Wir sind schwerpunktmäßig in Wien tätig. Kontaktieren Sie uns gerne, um zu klären, ob wir auch Ihren Bezirk abdecken.",
};

export const helperProfiles: HelperProfile[] = [
  {
    id: "ingrid",
    name: "Ingrid M.",
    role: "Alltagsbegleiterin · Wien",
    since: "seit 2025",
    bio: "Ingrid ist gelernte Krankenpflegehelferin und bringt über 15 Jahre Erfahrung in der Begleitung älterer Menschen mit. Sie ist bekannt für ihre ruhige Art, ihre Geduld und ihre Freude am gemeinsamen Kochen.",
    skills: ["Haushalt & Kochen", "Arzt- und Behördenwege", "Gesellschaft & Gespräche"],
  },
  {
    id: "maria",
    name: "Maria K.",
    role: "Alltagsbegleiterin · Wien",
    since: "seit 2025",
    bio: "Maria hat Sozialpädagogik studiert und arbeitet seit Jahren mit Senior:innen. Sie liebt Spaziergänge, Kartenspiele und hat ein besonderes Gespür für Einsamkeit und sozialen Rückzug.",
    skills: ["Spaziergänge & Freizeit", "Einkaufsbegleitung", "Soziale Aktivierung"],
  },
  {
    id: "renate",
    name: "Renate S.",
    role: "Alltagsbegleiterin · Wien",
    since: "seit 2026",
    bio: "Renate war jahrelang Bürokauffrau und unterstützt besonders gerne bei Behördengängen, Formularen und der Organisation des Alltags. Ihre strukturierte und verlässliche Art schätzen Kund:innen und Angehörige gleichermaßen.",
    skills: ["Behörden & Formulare", "Haushalt & Organisation", "Entlastung von Angehörigen"],
  },
  {
    id: "svetlana",
    name: "Svetlana P.",
    role: "Alltagsbegleiterin · Wien",
    since: "seit 2026",
    bio: "Svetlana spricht Deutsch, Russisch und Ukrainisch und begleitet besonders gerne Menschen mit osteuropäischen Wurzeln. Sie ist warmherzig, energiegeladen und bringt frische Ideen für gemeinsame Aktivitäten.",
    skills: ["Mehrsprachige Begleitung (DE/RU/UK)", "Einkauf & Kochen", "Ausflüge & Freizeitgestaltung"],
  },
  {
    id: "elisabeth",
    name: "Elisabeth W.",
    role: "Alltagsbegleiterin & Koordination · Wien",
    since: "seit 2025",
    bio: "Elisabeth koordiniert unser Helfer:innen-Team und ist selbst regelmäßig im Einsatz. Mit breitem Erfahrungsschatz und Ruhe in schwierigen Situationen ist sie die erste Anlaufstelle für neue Kund:innen.",
    skills: ["Erstgespräch & Koordination", "Langzeitbegleitung", "Entlastung von Angehörigen"],
  },
];
