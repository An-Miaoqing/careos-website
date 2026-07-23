export type ParticipationOption = {
  id: string;
  icon: string;
  label: string;
  description: string;
  linkLabel: string;
  linkHref: string;
};

export const participation = {
  label: "Wege der Teilnahme",
  title: "So können Sie dabei sein",
  options: [
    {
      id: "club",
      icon: "heart",
      label: "Club-Mitglied",
      description: "Teil unserer wachsenden Gemeinschaft im Gut Begleitet Salon — mit bevorzugtem Zugang zu Veranstaltungen.",
      linkLabel: "Zum Salon & Club",
      linkHref: "/salon",
    },
    {
      id: "family",
      icon: "family",
      label: "Familie",
      description: "Möchten Sie Gut Begleitet gemeinsam mit Ihrer Familie unterstützen oder begleiten? Sprechen Sie uns an.",
      linkLabel: "Kontakt aufnehmen",
      linkHref: "/kontakt",
    },
    {
      id: "friend",
      icon: "robot",
      label: "Gut Begleitet Friend",
      description: "Interesse an unserem digitalen Begleiter? Tragen Sie sich unverbindlich auf die Warteliste ein.",
      linkLabel: "Mehr über Friend",
      linkHref: "/friend",
    },
    {
      id: "newsletter",
      icon: "chat",
      label: "Newsletter",
      description: "Bleiben Sie informiert über Neuigkeiten und Veranstaltungen — das Anmeldeformular finden Sie in der Fußzeile jeder Seite.",
      linkLabel: "Kontakt aufnehmen",
      linkHref: "/kontakt",
    },
    {
      id: "volunteer",
      icon: "help",
      label: "Freiwillige",
      description: "Sie möchten sich mit Zeit und Engagement einbringen? Wir freuen uns über Ihr Interesse.",
      linkLabel: "Interesse melden",
      linkHref: "/kontakt",
    },
    {
      id: "partner",
      icon: "star",
      label: "Partnerorganisation",
      description: "Möchten Sie als Organisation mit Gut Begleitet zusammenarbeiten? Sprechen Sie uns gerne an.",
      linkLabel: "Kontakt aufnehmen",
      linkHref: "/kontakt",
    },
  ] satisfies ParticipationOption[],
};
