import { useState, useEffect } from "react";
import "./clock.css";
const Clock = () => {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const second_clock = time.getSeconds() / 60;
      const minute_clock = time.getMinutes() / 60;
      const hour_clock = (minute_clock + time.getHours()) / 12;
      setHour(hour_clock);
      setMinute(minute_clock);
      setSecond(second_clock);
    }, 1000);
  }, []);
  return (
    <>
      <section className="container">
        <div className="container_clock">
          <div className="circle"></div>

          <div
            style={{ transform: `rotate(${hour * 360}deg)` }}
            className="hand hand-hour"
            id="hand-hour"
          ></div>
          <div
            style={{ transform: `rotate(${minute * 360}deg)` }}
            className="hand hand-minute"
            id="hand-minute"
          ></div>
          <div
            style={{ transform: `rotate(${second * 360}deg)` }}
            className="hand hand-second"
            id="hand-second"
          ></div>

          <div className="number number1">|</div>
          <div className="number number2">|</div>
          <div className="number number3"></div>
          <div className="number number4">|</div>
          <div className="number number5">|</div>
          <div className="number number6"></div>
          <div className="number number7">|</div>
          <div className="number number8">|</div>
          <div className="number number9"></div>
          <div className="number number10">|</div>
          <div className="number number11">|</div>
          <div className="number number12"></div>
        </div>
        <div dir="ltr" className="overClock">
          {new Date().toLocaleTimeString()}
        </div>
      </section>
    </>
  );
};

export default Clock;
