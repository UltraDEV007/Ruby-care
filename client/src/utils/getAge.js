// sources: https://stackoverflow.com/questions/60408958/how-to-calculate-age-of-users-when-they-are-entered-their-date-of-birth-in-react
export const getAge = (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  // if the value of today's month is less than less the month you were born in
  // that means your birthday hasn't come this year
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    // so we are substracting 1 from the age that was calculated by the difference in current year and birthyear.
    age--;
  }
  return age;
};
