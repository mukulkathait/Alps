export const getModifiedDate = (stringDate: string) => {
  let tempDate = new Date(stringDate);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "long",
  }).format(tempDate);

  return formattedDate;
};
