import Todo from "./Todo";

const TodoList = ({ data, setData }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <Todo Delete={Delete} key={item.id} task={item.task} id={item.id} />
        );
      })}
    </>
  );
  
  function Delete(id) {
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  }
};

export default TodoList;
