import { todayDate } from "../utils/todayDate";

export const footer = {
  noNotes: "NO NOTES",
  withNotes: "COMPLETED",
};

export const header = {
  title: "Notes",
  // must suppress hydration update with next.js to avoid errors - https://nextjs.org/docs/messages/react-hydration-error
  todayDate: todayDate(),
};

export const notes = {
  noNotes: {
    subject: "No Notes",
    note: "Add a note by clicking on the + icon below.",
    icon: {
      image: "exclamation",
      label: "No Notes",
    },
  },
  apiError: {
    subject: "API error",
    icon: {
      image: "exclamation",
      label: "API error",
    },
  },
  loading: {
    subject: "Loading...",
    note: 'Notes are loading...'
  },
};
