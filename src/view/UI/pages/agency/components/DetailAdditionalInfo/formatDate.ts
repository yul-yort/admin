export const formatDate = (date: Date) =>
  date.toLocaleDateString("default", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
