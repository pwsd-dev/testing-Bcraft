import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import LocalStorageUpdate from "../LocalStorageUpdate";

function FormAuthorizaton({ onCb }) {
  const validationSchema = yup.object().shape({
    email: yup.string().email("Введите верный email").required("Обязательно"),
    password: yup
      .string()
      .min(4, "В пароле должно быть больше 4 символов")
      .matches(/[A-Z]/, "Пароль должен содержать заглавную букву")
      .typeError(`Должно быть строкой`)
      .required("Обязательно"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Обязательно"),
  });

  const isValues = localStorage.getItem("email");

  let initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
          setTimeout(console.log(JSON.stringify(values)), 300);
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
          <>
            <div className={`form`}>
              <p>
                <label htmlFor={`email`}>Email</label>
                <input
                  className={`input`}
                  type={`text`}
                  name={`email`}
                  onChange={(handleChange, handleChangeTwo)}
                  onBlur={handleBlur}
                  defaultValue={values.email}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </p>
              {touched.password && errors.password && (
                <p className={`error`}>{errors.password}</p>
              )}
              <p>
                <label htmlFor={`confirmPassword`}>Подтвердите пароль</label>
                <input
                  className={`input`}
                  type={`password`}
                  name={`confirmPassword`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
              </p>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className={`error`}>{errors.confirmPassword}</p>
              )}

              <button
                className={"button"}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type={`submit`}
              >
                Далее
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

export default FormAuthorizaton;
