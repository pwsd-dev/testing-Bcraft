import React from "react";
import FormAuthorizaton from "../components/form/FormAuthorization";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

function Authorization() {
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            user: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
  };

  return (
    <div className="container">
      <FormAuthorizaton handleClick={handleRegister}></FormAuthorizaton>
    </div>
  );
}

export default Authorization;
