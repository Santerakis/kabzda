import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {useState} from "react";
import {OnOff} from "./OnOff";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

const meta: Meta<typeof OnOff> = {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};
export default meta;

const onChangeCallback = action('onChange')

export const OnOff_true = () => {
    return <UncontrolledOnOff  onChange={onChangeCallback} />
}
export const OnOff_false = () => {
    return <UncontrolledOnOff  onChange={onChangeCallback} />
}
export const OnOff_defaultValue = () => {
    return <UncontrolledOnOff defaultOn={true} onChange={onChangeCallback} />
}
export const Based = () => {
    const [on, setOn] = useState(false)
    return <UncontrolledOnOff onChange={setOn} />
}