import React, {useState, useEffect} from "react";
import Clock from "./components/Clock";
import './App.css'

const App = () => {

    const [timerDays, setTimerDays] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerSecs, setTimerSecs] = useState();

    let interval;

    const startTimer = () => {

        const countDownDate = new Date("Jan 16, 2022").getTime();

        interval =  setInterval(() =>{
            const now = new Date().getTime();

            const difference = countDownDate - now;

            const days = Math.floor(difference/(24 * 60 * 60 * 1000));
            const hours = Math.floor((difference % (24 * 60 * 60 * 1000 )) / (60 * 60 * 1000));
            const minutes = Math.floor((difference%(60 * 60 * 1000)) /  (60 * 1000));
            const seconds = Math.floor((difference%(60 * 1000)) / 1000);

            if(difference<0){
                // Stop Timer
                clearInterval(interval.current)
            }else{
                // update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSecs(seconds)
            }
        })
    }

    useEffect(() => {
        startTimer();
    })

    return (
        <div className="App">
            <Clock 
                timerDays = {timerDays}
                timerMinutes={timerMinutes}
                timerHours={timerHours}
                timerSecs={timerSecs}
            />
        </div>
    )
}

export default App;