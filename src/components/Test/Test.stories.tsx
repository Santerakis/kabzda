import {action} from '@storybook/addon-actions'

export default {
    title: 'input',
    // component: input,
};

const onChangeCallback = action('onChange')

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => <input />
export const ControlledInputWithFixedValue = () => <input value={'Sergey'}/>

