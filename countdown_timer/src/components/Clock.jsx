import React, {Fragment} from 'react'

const Clock = ({timerDays,timerMinutes,timerHours,timerSecs}) => {
    return (
        <Fragment>
            <section className="timer-container">
                <section className="timer">
                    <div className="clock">
                        <section>
                            <p>{timerDays}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                            <small>Hours</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                            <small>Minutes</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerSecs}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

Clock.defaultProps = {
    timerDays: 10,
    timerMinutes: 10,
    timerHours: 10,
    timerSecs: 10
}

export default Clock

