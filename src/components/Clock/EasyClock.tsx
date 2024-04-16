import {FC, useEffect, useState} from "react";

export const EasyClock = () => {
    const [time, setTime] = useState<string>(Date().split(' ')[4])
    useEffect(() => {
        const id = setInterval(() => {
            console.log('interval')
            const times = Date().split(' ')[4]
            const times2 = new Date().toLocaleTimeString('en-US', {hour12: false});
            setTime(times)
        }, 1000)
        return () => clearInterval(id)
    }, [])
    return <div>{time}</div>
}