export const PLACEHOLDER = {
  ACCOUNT: "Placeholder",
  PASSWORD: "&#9679;&#9679;&#9679;&#9679;&#9679;",
};

export const DAY_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getDayOfWeek = (day = 0): string => {
  return DAY_OF_WEEK[day];
};
