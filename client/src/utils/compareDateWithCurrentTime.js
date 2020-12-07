export const compareDateWithCurrentTime = (date) => {
  let currentTime = new Date().getTime();
  let selectedTime = new Date(date).getTime();
  console.log(currentTime, selectedTime);
  if (currentTime < selectedTime) {
    // console.log("datesEqual", true);
    return -1;
  } else if (currentTime > selectedTime) {
    // console.log("datesEqual", false);
    return 1;
  } else {
    return 0;
  }
};
