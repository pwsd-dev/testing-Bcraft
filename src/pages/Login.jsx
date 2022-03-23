import React from "react";
import FormLogin from "../components/form/FormLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  return (
    <div className="container">
      <FormLogin></FormLogin>
    </div>
  );
}

export default Login;
