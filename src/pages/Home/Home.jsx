import { useContext, useState } from "react";
import Item from "../../components/Item/Item";
import Todo from "../../components/Todo/Todo";
import { DataContext } from "../../contexts/DataContext";
import "./home.css";

const Home = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <section className="home">
        <div className="home__cont-texts">
          <h1 className="home__title">Multi-Task</h1>
        </div>
        <Todo />
        {data.map((n) => (
          <Item
            key={n.id}
            nombre={n.nombre}
            descripcion={n.descripcion}
            id={n.id}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
