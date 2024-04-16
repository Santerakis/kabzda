import {useEffect, useState} from "react";


//utils
function get2Digits(num: number) {
    return num < 10 ? '0' + num : num
}

export const Clock = () => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            console.log('interval')
            setDate(new Date())
        }, 1000)
        return () => clearInterval(id)
    }, [])

    // const secondsString  = date.getSeconds() < 10
    //     ? '0' + date.getSeconds() : date.getSeconds()
    //
    // const minutesString  = date.getMinutes() < 10
    //     ? '0' + date.getMinutes() : date.getMinutes()
    //
    // const hoursString  = date.getHours() < 10
    //     ? '0' + date.getHours() : date.getHours()

    return <div>
        <span>{get2Digits(date.getHours())}</span>
        :
        <span>{get2Digits(date.getMinutes())}</span>
        :
        <span>{get2Digits(date.getSeconds())}</span>
    </div>
}