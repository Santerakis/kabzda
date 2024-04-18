import s from './MediumClock.module.css'
import {useEffect, useState} from "react";

export const MediumClock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <div className={s.clock}>
        <div className={s["analog-clock"]}>
            <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
            <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
            <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
        </div>
    </div>
}
//https://medium.com/@guyrashko/how-to-create-an-analog-clock-using-react-2e2e382367c3