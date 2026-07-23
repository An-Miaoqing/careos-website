export type ProgrammeDay = {
  day: string;
  activity: string | null;
  time?: string;
  note?: string;
};

const SEE_EVENTS = "Siehe aktuelle Veranstaltungen";

export const programme = {
  label: "Wochenprogramm",
  title: "Was ist los im Salon?",
  description:
    "Unser Programm wächst jede Woche. Zwei feste Programmpunkte finden regelmäßig statt — alle weiteren aktuellen Termine finden Sie bei den kommenden Veranstaltungen.",
  days: [
    { day: "Montag", activity: "Kaffee & Plaudern", time: "10:00" },
    { day: "Dienstag", activity: null, note: SEE_EVENTS },
    { day: "Mittwoch", activity: "Bingo-Nachmittag", time: "15:00" },
    { day: "Donnerstag", activity: null, note: SEE_EVENTS },
    { day: "Freitag", activity: null, note: SEE_EVENTS },
    { day: "Samstag", activity: null, note: SEE_EVENTS },
    { day: "Sonntag", activity: null, note: SEE_EVENTS },
  ] satisfies ProgrammeDay[],
};
