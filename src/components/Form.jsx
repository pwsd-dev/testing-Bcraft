import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

function Form() {
  const validationSchema = yup.object().shape({
    name: yup.string().typeError(`Должно быть строкой`).required("Обязательно"),
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
            {touched.name && errors.name && (
              <p className={`error`}>{errors.name}</p>
            )}
            <p>
              <label htmlFor={`password`}>Пароль</label>
              <input
                className={`input`}
                type={`text`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.name && errors.name && (
              <p className={`error`}>{errors.name}</p>
            )}
            <p>
              <label htmlFor={`confirmPassword`}>Подтвердите пароль</label>
              <input
                className={`input`}
                type={`text`}
                name={`confirmPassword`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </p>
            {touched.name && errors.name && (
              <p className={`error`}>{errors.name}</p>
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

export default Form;
