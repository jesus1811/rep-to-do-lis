import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const useDeleteTask = (id) => {
  const { data, setData } = useContext(DataContext);
  const deleteTask = () => {
    setData(data.filter((n) => n.id !== id));
    window.sessionStorage.setItem(
      "data",
      JSON.stringify(data.filter((n) => n.id !== id))
    );
  };

  return [deleteTask];
};

export default useDeleteTask;
