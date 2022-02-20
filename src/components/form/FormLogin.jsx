import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function FormLogin({ handleClick }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            user: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/home");
      })
      .catch(console.error);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Введите верный email").required("Обязательно"),
    password: yup
      .string()
      .min(4, "В пароле должно быть больше 4 символов")
      .matches(/[A-Z]/, "Пароль должен содержать заглавную букву")
      .typeError(`Должно быть строкой`)
      .required("Обязательно"),
  });

  const isValues = localStorage.getItem("email");

  let initialValues = {
    name: "",
    email: "",
    password: "",
  };

  if (isValues) {
    initialValues.email = isValues;
  }

  let handleChangeTwo = (e) => {
    localStorage.setItem("email", e.target.value);
  };

  return (
    <div className="container-form">
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={(values) => {
          let { email, password } = values;
          handleLogin(email, password);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={`form`}>
            <p>
              <label htmlFor={`email`}>Email</label>
              <input
                className={`input`}
                type={`text`}
                name={`email`}
                onChange={
                  ((e) => setEmail(e.target.value),
                  handleChange,
                  handleChangeTwo)
                }
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && (
              <p className={`error`}>{errors.email}</p>
            )}
            <p>
              <label htmlFor={`password`}>Пароль</label>
              <input
                className={`input`}
                type={`password`}
                name={`password`}
                onChange={((e) => setPassword(e.target.value), handleChange)}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && (
              <p className={`error`}>{errors.password}</p>
            )}
            <button
              className={"button"}
              disabled={!isValid && !dirty}
              onClick={(() => handleClick(email, password), handleSubmit)}
              type={`button`}
            >
              Далее
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormLogin;
