import React, { useEffect, useState } from "react";
import { date } from "zod";
import "@/Style/Clock.css";
const Clock = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval;
  useEffect(() => {
    const countDown = () => {
      const destination = new Date("Dec 31,2024").getTime();

      interval = setInterval(() => {
        const now = new Date().getTime();
        const during = destination - now;
        const day = Math.floor(during / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (during % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((during % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((during % (1000 * 60)) / 1000);

        if (destination < 0) {
          clearInterval(interval.current);
        } else {
          setDays(day.toString().padStart(2, "0"));
          setHours(hour.toString().padStart(2, "0"));
          setMinutes(minutes.toString().padStart(2, "0"));
          setSeconds(seconds.toString().padStart(2, "0"));
        }
      }, 1000);
    };

    countDown();
  }, []);

  return (
    <div className="clock_wrapper flex align-items-center text-center gap-3 m-2 flex-1 max-[560px]:gap-1">
      <div className="clock_data flex align-items-center gap-3 max-[560px]:gap-1">
        <div>
          <h1 className="text-white mb-2">{days}</h1>
          <h5 className="text-white">Days</h5>
        </div>
        <span className="text-white ">:</span>
      </div>
      <div className="clock_data flex align-items-center gap-3 max-[560px]:gap-1">
        <div>
          <h1 className="text-white mb-2">{hours}</h1>
          <h5 className="text-white">Hours</h5>
        </div>
        <span className="text-white ">:</span>
      </div>
      <div className="clock_data flex align-items-center gap-3 max-[560px]:gap-1">
        <div>
          <h1 className="text-white mb-2">{minutes}</h1>
          <h5 className="text-white">Minutes</h5>
        </div>
        <span className="text-white ">:</span>
      </div>
      <div className="clock_data flex align-items-center gap-3 max-[560px]:gap-1">
        <div>
          <h1 className="text-white mb-2">{seconds}</h1>
          <h5 className="text-white">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
