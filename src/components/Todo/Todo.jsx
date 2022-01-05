import useAddTask from "../../hooks/useAddTask";
import useChangeDescripcion from "../../hooks/useChangeDescripcion";
import useChangeNombre from "../../hooks/useChangeNombre";
import "./todo.css";

const Todo = () => {
  const [nombre, setNombre, changeNombre] = useChangeNombre("");
  const [descripcion, setDescripcion, changeDescripcion] =
    useChangeDescripcion("");
  const [addTask] = useAddTask(nombre, descripcion, setNombre, setDescripcion);

  return (
    <article className="todo">
      <div className="todo__informacion">
        <div className="todo__container-inputs">
          <h1 className="todo__title">Nombre</h1>
          <input
            type="text"
            className="todo__input todo__input--orange"
            onChange={changeNombre}
            value={nombre}
          />
        </div>
        <div className="todo__container-inputs">
          <h1 className="todo__title">Descripcion</h1>
          <input
            type="text"
            className="todo__input"
            onChange={changeDescripcion}
            value={descripcion}
          />
        </div>
      </div>
      <div className="todo__container-buttons">
        <button type="submit" className="todo__button" onClick={addTask}>
          Agregar Tarea
        </button>
      </div>
    </article>
  );
};

export default Todo;
