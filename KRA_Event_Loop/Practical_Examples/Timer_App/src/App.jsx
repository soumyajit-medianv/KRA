import React, { useRef, useState } from 'react'

const App = () => {

  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  }
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  }

  const formatTime = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${secs < 10 ? '0' + secs : secs}`
  }

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    </div>
  )
}

export default App

