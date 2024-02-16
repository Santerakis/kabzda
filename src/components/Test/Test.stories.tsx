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

