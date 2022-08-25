import { FcEmptyTrash } from "react-icons/fc";
import { useState } from "react";
import "./style.css";

const Todo = ({ task, id, Delete }) => {
  const [check, setCheck] = useState(false);
  const toggle = () => {
    setCheck(!check);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <input onChange={toggle} type={"checkbox"} />
          <span
            style={{ color: "lightsteelblue" }}
            className={check ? "check" : ""}
          >
            &nbsp; {task}
          </span>
        </div>
        <button onClick={HandelDelete} style={{ cursor: "pointer" }}>
          <FcEmptyTrash />
        </button>
      </div>
      <hr />
    </>
  );
  function HandelDelete() {
    Delete(id);
  }
};

export default Todo;
