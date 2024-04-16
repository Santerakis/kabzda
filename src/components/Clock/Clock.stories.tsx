import {EasyClock} from "./EasyClock";
import {Clock} from "./Clock";
import Analog from "./Analog";
import {useState} from "react";
import {b} from "@storybook/addon-links/dist/index.d-3adcfc00";


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
