import React, { useState, useEffect } from "react";
import { verifyUser } from "../../services/auth";
import { useHistory } from "react-router-dom";

const CurrentUserContext = React.createContext([{}, () => {}]);

function CurrentUserProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      // if (!userData) {
      //   history.push("/login");
      // } else if (userData) {
      //   history.push("/");
      // }
    };
    handleVerify();
  }, [history]);

  return (
    <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </CurrentUserContext.Provider>
  );
}

export { CurrentUserContext, CurrentUserProvider };
