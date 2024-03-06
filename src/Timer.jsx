import { useState, useEffect } from "react";

export default function Timer({ startTime  }) {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((t) => {
        if (t > 0) {
          return t - 1;
        } else {
          clearInterval(intervalId); 
          return t;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div>
      <p>
        Time Remaining: {minutes} min {seconds} sec
      </p>
    </div>
  );
}
