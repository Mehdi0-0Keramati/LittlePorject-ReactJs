import { useState, useEffect, useRef } from "react";
import "./stopWatch.css";
const StopWatch = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const timeRef = useRef();
  useEffect(() => {
    if (start) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timeRef.current);
    }
    return () => clearInterval(timeRef.current);
  });

  function handelReset() {
    setStart(false);
    setTime(0);
  }
  return (
    <>
      <section className="stopWatchContainer">
        <h1>زمان سنج</h1>
        <div className="boxTimer">
          <div className="times">
            <span ref={timeRef}>
              {`0${Math.floor(time / 3600)}`.slice(-2)}:
            </span>
            <span ref={timeRef}>
              {`0${Math.floor(time / 60) % 60}`.slice(-2)}:
            </span>
            <span ref={timeRef}>{`0${time % 60}`.slice(-2)}</span>
          </div>

          <div className="buttons">
            {start ? (
              <>
                <button onClick={() => setStart(false)}>توقف</button>
                <button onClick={handelReset}>تازه سازی</button>
              </>
            ) : (
              <button onClick={() => setStart(true)}>شروع</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default StopWatch;
