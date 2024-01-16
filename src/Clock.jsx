import React, { useState, useEffect } from "react";

const Clock = ({ city, timeZone }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("sv", { timeZone: "Europe/Stockholm" }),
  );

  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("sv", { timeZone: "Europe/Stockholm" }),
      );
    }, 1000);
  }, []);

  return (
    <div>
      <h2>{city}</h2>
      <p>Time Zone: {timeZone}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default Clock;
