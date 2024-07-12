import React from "react";
import '../../style/clock.css'

function Clock({timerDays, timerHours,timerMinutes,timerSeconds}) {
  
  console.log(timerDays);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 md-2">{timerDays}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 md-2">{timerHours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 md-2">{timerMinutes}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 md-2">{timerSeconds}</h1>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
}

// Clock.defaultProps = {
//   timerDays : 10,
//   timerHours : 10,
//   timerMinutes : 10,
//   timerSeconds : 10,


// }

export default Clock;
