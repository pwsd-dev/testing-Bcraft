import React from "react";
import Form from "../components/Form";
import * as yup from "yup";

function Authorization() {
  const validationSchema = yup.object().shape({
    name: yup.string().typeError(`Должно быть строкой`).required("Обязательно"),
  });

  return (
    <div className="container">
      <Form></Form>
    </div>
  );
}

export default Authorization;
