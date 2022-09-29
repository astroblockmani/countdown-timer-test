import React, { Fragment } from "react";

//use of Fragment for vanity and DOM considerations

// CountdownTimer receives props "days, hours, mins, secs"

const CountdownTimer = ({ days, hours, mins, secs }) => {
  return (
    <Fragment>
      <div className="container">
        <div className="timer">
          <div className="interval-container">
            <div>{days}</div>
            <div>DAYS</div>
          </div>
          <div className="interval-container">
            <div>{hours}</div>
            <div>HOURS</div>
          </div>
          <div className="interval-container">
            <div>{mins}</div>
            <div>MINS</div>
          </div>
          <div className="interval-container">
            <div>{secs}</div>
            <div>SECS</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// default prop values to display if no date. Makes sense to keep them at 0
CountdownTimer.defaultProps = {
  days: 0,
  hours: 0,
  mins: 0,
  secs: 0,
};

export default CountdownTimer;
