import React from "react";
import FormLogin from "../components/form/FormLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(console.log);
  };

  return (
    <div className="container">
      <FormLogin handleClick={handleLogin}></FormLogin>
    </div>
  );
}

export default Login;
