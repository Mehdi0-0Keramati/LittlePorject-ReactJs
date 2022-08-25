import { useState, useEffect } from "react";
import "./revers.css";
const ReversTimer = () => {
  const [days, setDays] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  function startTime() {
    let futureTime = new Date("2023-01-01 23:59:59").getTime();
    const interval = setInterval(() => {
      let nowTime = new Date().getTime();
      let newTime = futureTime - nowTime;
      let days = Math.floor(newTime / (1000 * 60 * 60 * 24));
      let hour = Math.floor(
        (newTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minute = Math.floor((newTime % (1000 * 60 * 60)) / (1000 * 60));
      let second = Math.floor((newTime % (1000 * 60)) / 1000);

      if (newTime < 0) {
        alert("finish");
        clearInterval(interval);
      } else {
        setDays(days);
        setHour(hour.toString().padStart(2, "0"));
        setMin(minute.toString().padStart(2, "0"));
        setSec(second.toString().padStart(2, "0"));
      }
    }, 1000);
  }
  useEffect(() => {
    startTime();
  });

  return (
    <>
      <section className="reversTimer">
        <h3>تایمر معکوس</h3>
        <div className="containerTime">
          <div className="boxTime">
            <h4>{sec}</h4>
            <h6>ثانیه</h6>
          </div>

          <span>:</span>

          <div className="boxTime">
            <h4>{min} </h4>
            <h6>دقیقه</h6>
          </div>

          <span>:</span>

          <div className="boxTime">
            <h4>{hour}</h4>
            <h6>ساعت</h6>
          </div>

          <span>:</span>

          <div className="boxTime">
            <h4>{days}</h4>
            <h6>روز</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReversTimer;
