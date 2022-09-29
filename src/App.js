import "./App.css";
import React, { useState, useEffect } from "react";
import CountdownTimer from "./Component/CountdownTimer";

function App() {
  // state declarations
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [secs, setSecs] = useState();

  let interval;

  // function to calculate time to elapse and update on state change
  const start = () => {
    const countdownDate = new Date("Sep 28, 2022 21:02:00").getTime();
    // declare the target countdown date

    interval = setInterval(() => {
      // set interval (1000 milliseconds)

      const timeNow = new Date().getTime();
      // gets the time at exact moment function is run

      const timeRemaining = countdownDate - timeNow;
      // countdown to target time determined by taking eventual date and subtracting time at exact moment

      const day = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
      // day calcualted by dividing remaining time by (24 hours x 60 minutes x 60 seconds x 1000 m/seconds)

      const hour = Math.floor(
        (timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      // use % to return remainder. (60 mins x 60 seconds x 1000 m/seconds)

      const min = Math.floor((timeRemaining % (60 * 60 * 1000)) / (1000 * 60));
      // same logic as above

      const sec = Math.floor((timeRemaining % (60 * 1000)) / 1000);
      // and one more time for seconds, dividing simply by 1000 m/seconds

      /* if statement to compare if time remaining is less than 0, if so, 
         invoke clearInterval to clear timer, else update state with remaining values */

      if (timeRemaining < 0) {
        clearInterval(interval.current);
      } else {
        setDays(day);
        setHours(hour);
        setMins(min);
        setSecs(sec);
      }
    });
  };

  // useEffect for lifecycle
  useEffect(() => {
    start();
  });

  // pass props to component
  return (
    <div className="App">
      <CountdownTimer days={days} hours={hours} mins={mins} secs={secs} />
    </div>
  );
}

export default App;
