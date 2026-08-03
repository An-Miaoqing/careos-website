export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const team = {
  label: "Unser Team",
  title: "Menschen mit Erfahrung, Kompetenz und Herz",
  intro:
    "Hinter Gut Begleitet steht ein engagiertes Team, das gemeinsam an einer Sache arbeitet: das Leben älterer Menschen in Wien aktiver, verbundener und lebenswerter zu machen.",
  members: [
    {
      id: "guenter",
      name: "Günter Pytel",
      role: "Gründer & Obmann — Gut Begleitet",
      bio: "Günter gründete Gut Begleitet aus dem Wunsch heraus, älteren Menschen nicht nur Hilfe, sondern echte Begleitung und Gemeinschaft zu geben. Mit jahrzehntelanger internationaler Management-Erfahrung baut er heute ein einzigartiges soziales Ökosystem in Wien auf.",
    },
    {
      id: "jan",
      name: "Jan Kepinski",
      role: "Technology & Innovation Lead — Gut Begleitet",
      bio: "Jan ist Mitgründer des Kepinski Studios und verantwortet bei Gut Begleitet die technologische Entwicklung, das Programm und die digitale Strategie. Er steht für den Brückenschlag zwischen Tradition und Innovation.",
    },
    {
      id: "inna",
      name: "Inna Yuzefovych",
      role: "Stellvertretende Obfrau — Managerin Alltagshilfe",
      bio: "Inna leitet das operative Geschäft der Alltagshilfe. Sie koordiniert das Helfer:innen-Team, begleitet neue Kund:innen beim Erstgespräch und sorgt dafür, dass jede Begleitung persönlich und professionell ist.",
    },
    {
      id: "maria",
      name: "Maria Kepinski",
      role: "Visuelle Identität & Fotografie",
      bio: "Maria ist Fotografin und Unternehmerin und verantwortet die visuelle Sprache von Gut Begleitet. Ihre Bilder zeigen Menschen — nicht Konzepte.",
    },
  ] satisfies TeamMember[],
};
