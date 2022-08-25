import { FcEditImage } from "react-icons/fc";
import { useRef } from "react";
const Header = ({ data, setData }) => {
  const randomId = Math.floor(Math.random() * 1000 + 1);
  const input = useRef();
  const fullDate = new Date().toLocaleDateString("fa", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="Header">
        <h2>{fullDate}</h2>
      </div>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          margin: "2rem auto",
          padding: ".2rem",
          borderBottom: ".15rem solid royalblue",
        }}
      >
        <input
          placeholder="وظیفه خود را بنویسید..."
          style={{ width: "100%" }}
          ref={input}
          type="text"
          onKeyPress={(e) => e.key === "Enter" && add(e)}
        />
        <button type="button" onClick={add}>
          <FcEditImage />
        </button>
      </div>
    </>
  );
  function add(e) {
    e.preventDefault();
    const taskInput = {
      task: input.current.value,
      id: randomId,
    };
    if (taskInput.task === "") {
      alert("فیلد نباید خالی باشد");
    } else {
      setData([...data, taskInput]);
      input.current.value = "";
    }
  }
};

export default Header;
