import {EasyClock} from "./EasyClock";
import {Clock} from "./Clock";
import Analog from "./Analog";
import {FC, useState} from "react";
import {MediumClock} from "./MediumClock";


export default {
    title: 'Clock demo'
}

export const EasyClockExamlpe = () => <EasyClock />

export const ClockExample = () => <Clock />

export const AnalogExample = () => <Analog />

export const DoubleWatch = () => {
    const [mode, setMode] = useState<boolean>(true)
    return <>
        <button onClick={() => setMode(!mode)}>switch mode</button>
        {mode ? <Clock/> : <Analog/>}
    </>
}

export const DoubleWatch2:FC<{mode: 'analog' | 'digital'}> = (props) => {
    let view
    switch (props.mode) {
        case 'analog': view = <Analog />
            break
        case 'digital':
        default: view = <Clock />
    }
    console.log('mode: ', props.mode)
    console.log(view)
    return <>
        {view}
    </>
}

export const MediumClockExample = () => <MediumClock />
