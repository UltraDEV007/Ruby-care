export const compareDateWithCurrentTime = (date) => {
  let currentTime = new Date().getTime();
  let selectedTime = new Date(date).getTime();

  if (currentTime < selectedTime) {
    // if the currentTime is less than the selectedTime return -1
    return -1;
  } else if (currentTime > selectedTime) {
    // if the currentTime is greater than select time we're returning 1
    return 1;
  } else {
    // if the two values are equal return 0
    return 0;
  }
};
