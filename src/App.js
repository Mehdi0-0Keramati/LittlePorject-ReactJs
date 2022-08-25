import { useState, useReducer } from "react";

import Header from "./Components/todolist/header";
import TodoList from "./Components/todolist/TodoList";
import ReversTimer from "./Components/reverseTimer/ReversTimer";
import StopWatch from "./Components/stopWatch/StopWatch";
import Clock from "./Components/clock/Clock";
import AlarmClock from "./Components/AlarmClock/AlarmClock";
import TikTokToe from "./Components/TikTokToe/TikTokToe";
import Calculator from "./Components/calculator/Calculator";

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      task: "کمی شیر بخرم",
    },
    {
      id: 2,
      task: "مقداری کد بزنم",
    },
    {
      id: 3,
      task: "اموزش ببنیم",
    },
    {
      id: 4,
      task: "تمرین کنم",
    },
  ]);

  return (
    <>

      <div className="taskContainer">
        <Header data={data} setData={setData} />
        <div className="insideTaskContainer">
          <TodoList data={data} setData={setData} />
        </div>
      </div>

      <ReversTimer />
      <StopWatch />
      <Clock />
      <AlarmClock />
      <TikTokToe />
      <Calculator />
    </>
  );
};

export default App;
