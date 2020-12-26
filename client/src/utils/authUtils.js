// for email validation referenced this: https://www.itsolutionstuff.com/post/react-email-validation-exampleexample.html

export const checkEmailValidity = (email, setEmailAlert) => {
  if (typeof email !== undefined) {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      setEmailAlert(true);
    }
    if (pattern.test(email)) {
      setEmailAlert(false);
    }
  }
};

export const checkPasswordLength = (password, setPasswordAlert) => {
  if (typeof password !== undefined) {
    if (password?.length < 8) {
      setPasswordAlert(true);
    }
  }
  if (password?.length >= 8) {
    setPasswordAlert(false);
  }
};

export const checkEmailUniqueuess = (
  allUsers,
  email,
  setEmailUniquenessAlert,
  currentUser
) => {
  if (
    allUsers?.find(
      (user) => user?.email === email && user?.email !== currentUser?.email
    )
  ) {
    setEmailUniquenessAlert(true);
  } else {
    setEmailUniquenessAlert(false);
  }
};
