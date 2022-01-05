import { useState } from "react";

const useChangeNombre = (initialState) => {
  const [nombre, setNombre] = useState(initialState);
  const changeNombre = (e) => {
    setNombre(e.target.value);
    console(e.target.value);
  };
  return [nombre, setNombre, changeNombre];
};

export default useChangeNombre;
