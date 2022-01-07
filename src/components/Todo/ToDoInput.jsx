const ToDoInput = ({ text, handleSetData, handleData }) => {
  return (
    <div className="todo__container-inputs">
      <h1 className="todo__title">{text}</h1>
      <input
        type="text"
        className="todo__input"
        onChange={handleSetData}
        value={handleData}
      />
    </div>
  );
};

export default ToDoInput;
