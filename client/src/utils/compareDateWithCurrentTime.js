export const compareDateWithCurrentTime = (date) => {
  let currentTime = new Date().getTime();
  let selectedTime = new Date(date).getTime();
  if (currentTime < selectedTime) {
    return -1;
  } else if (currentTime > selectedTime) {
    return 1;
  } else {
    return 0;
  }
};
