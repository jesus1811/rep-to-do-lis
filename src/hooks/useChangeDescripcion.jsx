import { useState } from "react";

const useChangeDescripcion = (initialState) => {
  const [descripcion, setDescripcion] = useState(initialState);
  const changeDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  return [descripcion, setDescripcion, changeDescripcion];
};

export default useChangeDescripcion;
