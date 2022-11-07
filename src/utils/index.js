const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const temp = date.getDay();
export const day = days[temp];
export const year = date.getFullYear();