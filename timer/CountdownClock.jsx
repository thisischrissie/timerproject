import React from "react";


function CountdownClock({timeRemaining}) {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <div>
            <h1 className = "clock">
                {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}
            </h1>
        </div>
    )
}

// countdownClock.ReactPropTypes = {
//     timeRemaining: PropTypes.number

export default CountdownClock;