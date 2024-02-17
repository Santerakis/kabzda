import {action} from '@storybook/addon-actions'
import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
    // component: input,
};

const onChangeCallback = action('onChange')

export const UncontrolledInput = () => <input />
export const ControlledInputWithFixedValue = () => <input value={'Sergey'}/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <> <input onChange={onChange}/> {value} </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    return <> <input /> <button onClick={() => {
        const el = document.querySelector('input') as HTMLInputElement
        setValue(el.value)}}>save</button> {value} </>
}
export const GetValueOfUncontrolledInputByRef = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    return <> <input ref={inputRef} /> <button onClick={() => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)}}>save</button> {value} </>
}
export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input value={value} onChange={onChange}/> {value}</>
}
export const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return <><input type={'checkbox'} checked={checked} onChange={onChange}/> {checked.toString()}</>
}
export const ControlledSelect = () => {

}


