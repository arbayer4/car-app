import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { signOut } from "../../services/users";

const SignOut = (props) => {
  const { clearUser, user } = props;
  const history = useHistory();

  useEffect(() => {
    signOut(user)
      .then(() => clearUser())
      .finally(() => history.push("/"));
  }, [history, clearUser, user]);

  return "";
};

export default SignOut;
