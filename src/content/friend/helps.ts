export type HelpItem = {
  id: string;
  icon: string;
  title: string;
  text: string;
};

export const helps = {
  label: "So hilft Friend",
  title: "Kleine Momente, die den Alltag leichter machen",
  items: [
    {
      id: "companionship",
      icon: "heart",
      title: "Gesellschaft und ein offenes Ohr",
      text: "Ein Gespräch, eine Geschichte oder einfach jemand, der zuhört — wann immer Sie möchten.",
    },
    {
      id: "reminders",
      icon: "clock",
      title: "Erinnerungen, auf die Verlass ist",
      text: "An Medikamente, Termine oder Geburtstage — freundlich und ohne Drängen.",
    },
    {
      id: "family",
      icon: "family",
      title: "Näher an der Familie",
      text: "Ein Anruf oder eine Nachricht an Ihre Liebsten, ganz ohne Smartphone.",
    },
    {
      id: "help",
      icon: "shield",
      title: "Hilfe auf Knopfdruck",
      text: "Im Notfall genügt ein Tastendruck, um Ihre festgelegten Kontakte zu erreichen.",
    },
  ] satisfies HelpItem[],
};
