import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const useAddTask = (nombre, descripcion, setNombre, setDescripcion) => {
  const { data, setData } = useContext(DataContext);
  const addTask = (e) => {
    e.preventDefault();
    if (nombre !== "" && descripcion !== "") {
      setData([
        ...data,
        { id: nombre, nombre: nombre, descripcion: descripcion },
      ]);
      localStorage.setItem(
        "data",
        JSON.stringify([...data, { nombre: nombre, descripcion: descripcion }])
      );
      setNombre("");
      setDescripcion("");
    }
  };

  return [addTask];
};

export default useAddTask;
