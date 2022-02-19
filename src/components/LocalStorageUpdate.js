import React from "react";
import { useFormikContext } from "formik";

const LocalStorageUpdate = () => {
  const { values } = useFormikContext();
  React.useEffect(() => {
    // console.log("changed");
    const saved = localStorage.getItem("values");
    if (values) {
      //получил данные
      localStorage.getItem("values");
      //запушить в форму эти значения
      //когда они есть запушить в состояние
    }
    localStorage.setItem("values", JSON.stringify(values));

    const initialValue = JSON.parse(saved);

    // let keys = Object.values(localStorage);
    // console.log(keys);
    return initialValue || "";
  }, [values]);

  return null;
};

export default LocalStorageUpdate;
