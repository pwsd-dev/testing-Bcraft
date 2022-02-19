import React from "react";
import { useFormikContext } from "formik";

const LocalStorageUpdate = () => {
  const { values } = useFormikContext();
  React.useEffect(() => {
    console.log("changed");
  }, [values]);

  return null;
};

export default LocalStorageUpdate;
