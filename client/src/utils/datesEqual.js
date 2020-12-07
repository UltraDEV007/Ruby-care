export const datesEqual = (date1, date2) => {
  let a = new Date(date1);
  let b = new Date(date2);
  if (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate() &&
    a.getHours() === b.getHours() &&
    a.getMinutes() === b.getMinutes()
  ) {
    return true;
  } else {
    return false;
  }
};
