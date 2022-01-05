import useDeleteTask from "../../hooks/useDeleteTask";
import "./item.css";

const Item = ({ nombre, descripcion, id }) => {
  const [deleteTask] = useDeleteTask(id);
  return (
    <article className="item">
      <div className="item__cont-informations">
        <h2 className="item__title">{nombre}</h2>
        <p className="item__p">{descripcion}</p>
      </div>
      <div className="item__cont-buttons">
        <button className="item__button">Completado</button>
        <button
          className="item__button item__button--outline"
          onClick={deleteTask}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
};

export default Item;
