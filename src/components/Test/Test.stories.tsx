import {action} from '@storybook/addon-actions'
import {useState} from "react";

export default {
    title: 'input',
    // component: input,
};

const onChangeCallback = action('onChange')

export const UncontrolledInput = () => <input />
export const ControlledInputWithFixedValue = () => <input value={'Sergey'}/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <> <input onChange={(e) => setValue(e.currentTarget.value)}/> {value} </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    return <> <input id={'inputId'} /> <button onClick={() => {
        const el = document.getElementById('inputId') as HTMLInputElement
        setValue(el.value)}}>save</button> {value} </>
}


