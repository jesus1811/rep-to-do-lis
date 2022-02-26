import { useState } from "react";
import useAddTask from "../../hooks/useAddTask";
import "./todo.css";
import TodoInput from "./ToDoInput";

const ToDo = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  const [addTask] = useAddTask(nombre, descripcion, setNombre, setDescripcion);

  return (
    <form className="todo">
      <div className="todo__informacion">
        <TodoInput
          text="nombre"
          handleSetData={handleNombre}
          handleData={nombre}
        />
        <TodoInput
          text="descripcion"
          handleSetData={handleDescripcion}
          handleData={descripcion}
        />
      </div>
      <div className="todo__container-buttons">
        <button type="submit" className="todo__button" onClick={addTask}>
          Agregar Tarea
        </button>
      </div>
    </form>
  );
};

export default ToDo;
