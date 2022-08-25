import { useEffect, useRef, useState } from "react";
import { FcAlarmClock } from "react-icons/fc";
import "./alarm.css";
const AlarmClock = () => {
  const [activeAlarm, setActiveAlarm] = useState(false);
  const [currentTime, setCurrentTime] = useState();
  const [alarmTime, setAlarmTime] = useState();
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [AmPm, setAmPm] = useState("");
  const [ringtone] = useState(
    new Audio(require("../../assets/music/ringtone.mp3"))
  );

  const select1 = useRef();
  const select2 = useRef();
  const select3 = useRef();

  const minutesNumber = fixNumber(Array.from(Array(60).keys()));
  const hourNumber = fixNumber(Array.from(Array(13).keys()));

  function fixNumber(value) {
    value = value.map((i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    });
    return value;
  }

  useEffect(() => {
    setInterval(() => {
      let t = new Date();
      let h = t.getHours();
      let m = t.getMinutes();
      let s = t.getSeconds();
      let amPm;
      if (h >= 12) {
        h -= 12;
        amPm = "Pm";
      } else {
        amPm = "Am";
      }
      if (h === 0) h = 12;

      let date = `${h.toString().padStart(2, "0")}:${m
        .toString()
        .padStart(2, "0")}:${s.toString().padStart(2, "0")} ${amPm}`;

      setAmPm(amPm);
      setHour(h);
      setMinute(m);
      setCurrentTime(date);
    }, 1000);
  }, []);

  if (
    alarmTime ==
    `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")} ${AmPm}`
  ) {
    ringtone.loop = true;
    activeAlarm ? ringtone.play() : ringtone.pause();
  }

  function alarmButton() {
    const time = `${select1.current.value}:${select2.current.value} ${select3.current.value}`;
    if (
      time.includes("ساعت") ||
      time.includes("دقیقه") ||
      time.includes("Am/Pm")
    ) {
      return alert("زمان هشدار را تعیین کنید!!");
    }
    if (activeAlarm) {
      window.location.reload(1);
      return setActiveAlarm(false);
    }

    setActiveAlarm(true);
    setAlarmTime(time);
  }

  return (
    <>
      <section className="AlarmClock_container">
        <h1 className="alarm_title">ساعت هشدار</h1>
        <i className="ClockIcon">
          <FcAlarmClock />
        </i>
        <div dir="ltr" className="currentTime">
          {currentTime}
        </div>

        <div className="select_container">
          <select ref={select1}>
            <option value="ساعت" hidden>
              ساعت
            </option>
            {hourNumber.map((h) => {
              return (
                <option key={h} value={h}>
                  {h}
                </option>
              );
            })}
          </select>

          <select ref={select2}>
            <option value="دقیقه" hidden>
              دقیقه
            </option>
            {minutesNumber.map((m) => {
              return (
                <option key={m} value={m}>
                  {m}
                </option>
              );
            })}
          </select>

          <select ref={select3}>
            <option value="Am/Pm" hidden>
              Am/Pm
            </option>
            <option value="Am">Am</option>
            <option value="Pm">Pm</option>
          </select>
        </div>

        <button className="alarmButton" onClick={alarmButton}>
          {activeAlarm ? "پاک کردن" : "تنظیم کردن"}
        </button>
      </section>
    </>
  );
};

export default AlarmClock;
