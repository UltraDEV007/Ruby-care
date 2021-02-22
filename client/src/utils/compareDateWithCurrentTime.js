export const compareDateWithCurrentTime = (date) => {
  let currentTime = new Date().getTime();
  let selectedTime = new Date(date).getTime();

  if (currentTime < selectedTime) {
    // if the currentTime is less than the selectedTime return -1
    return -1;
  } else if (currentTime > selectedTime) {
    // if the currentTime is greater than selected time we're returning 1
    return 1;
  } else {
    // if the two values are equal return 0
    return 0;
  }
};

export const compareTakenWithSelectedTime = (takenDate, selectedDate) => {
  let takenTime = new Date(takenDate).getTime();
  let selectedTime = new Date(selectedDate).getTime();

  if (takenTime < selectedTime) {
    // if the takenTime  is less than the selectedTime return -1
    return -1;
  } else if (takenTime > selectedTime) {
    // if the currentTime is greater than selected time we're returning 1
    return 1;
  } else {
    // if the two values are equal return 0
    return 0;
  }
};
