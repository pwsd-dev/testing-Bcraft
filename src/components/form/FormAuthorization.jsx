import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

function FormAuthorizaton() {
  const validationSchema = yup.object().shape({
    // name: yup.string().typeError(`Должно быть строкой`).required("Обязательно"),
    email: yup.string().email("Введите верный email").required("Обязательно"),
    password: yup
      .string()
      .typeError(`Должно быть строкой`)
      .required("Обязательно"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Обязательно"),
  });

  return (
    <div className="container-form">
      <Formik
        initialValues={{
          name: "",
          secondName: "",
          password: "",
          confirmPassword: "",
          email: "",
          confirmEmail: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
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
                onChange={handleChange}
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
        )}
      </Formik>
    </div>
  );
}

export default FormAuthorizaton;
