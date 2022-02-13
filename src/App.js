import './style.css';
import React, { useState, useEffect } from 'react';
export default function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSecond((prev) => prev + 1), 1000);
    if (minute >= 59 && second >= 59) {
      setHour((prev) => prev + 1);
      setMinute(0);
      setSecond(0);
    }
    if (second >= 59) {
      setMinute((prev) => prev + 1);
      setSecond(0);
    }
    return () => clearInterval(id);
  }, [second]);

  return (
    <div>
      <h1>
        {`${hour < 9 ? '0' : ''}${hour}:${minute < 9 ? '0' : ''}${minute}:${
          second < 9 ? '0' : ''
        }${second}`}
      </h1>
    </div>
  );
}
