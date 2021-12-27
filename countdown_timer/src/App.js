import React, {useState} from "react";
import Clock from "./components/Clock";
import './App.css'

const App = () => {

    const [timerDays, setTimerDays] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerSecs, setTimerSecs] = useState();

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