import React, { useState, useEffect } from 'react';

import CountdownClock from './CountdownClock';
import MainButtons from './Button';

let timerId = null;
function BaseTimer({ timesUp, onFinish, onStart, onStop, autoplay }) {


    const [totalTime, setTotalTime] = useState(timesUp);
    const [isPaused, setIsPaused] = useState(false);
    const [isStarted, setIsStarted] = useState(false);


    useEffect(() => {
        if (autoplay) {
            startTimer();
        }
    }, );

    function pauseTimer() {
        setIsPaused(true);
        clearInterval(timerId);
    }

    function resumeTimer() {
        setIsPaused(false);
        startTimer();
    }

    function stopTimer() {
        setTotalTime(timesUp);
        setIsStarted(false);
        setIsPaused(false);
        onStop();
        clearInterval(timerId);

    }


    function startTimer() {
        setIsStarted(true);
        onStart();

        timerId = setInterval(() => {

            setTotalTime((totalTime) => {
                const timeRemaining = totalTime - 1;

                if (timeRemaining <= 0) {
                    clearInterval(timerId);
                    onFinish();
                    return 0;
                }
                return timeRemaining;
            })
        }, 1000);
    }

    // function getTimeRemaining() {
    //     return Math.round((totalTime/timesUp) *100);
    // }

    function renderButtons() {

        //start button only
        if (!isStarted) {
            return (
            <div className="button-container">
                <MainButtons className="start" onClick={startTimer}>Start</MainButtons>
            </div>
            )
        }
    
        //start button disappears and reveals pause and stop
        else if (isPaused) {
            return (
                <div className="button-container">
                    <MainButtons className="resume-pause" onClick={resumeTimer}>Play</MainButtons>
                    <div className="button-space"></div>
                    <MainButtons className="resume-stop" onClick={stopTimer}>Stop</MainButtons>
                </div>
            )
    
        }

    
        return (
            <div className="button-container">
                <MainButtons className="play-pause" onClick={pauseTimer}>Pause</MainButtons>
                <div className="button-space"></div>
                <MainButtons className="stop" onClick={stopTimer}>Stop</MainButtons>
            </div>
        )
    }


    return (
        <div>
            {renderButtons()}
        
        <CountdownClock timeRemaining={totalTime}></CountdownClock>
     

        </div>
    )
}


export default BaseTimer;