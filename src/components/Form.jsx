import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

function Form() {
  const validationSchema = yup.object().shape({
    name: yup.string().typeError(`Должно быть строкой`).required("Обязательно"),
  });

  return (
    <div className="container">
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
              <label htmlFor={`name`}>Имя</label>
              <input
                className={`input`}
                type={`text`}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {touched.name && errors.name && (
              <p className={`error`}>{errors.name}</p>
            )}
            <button
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
