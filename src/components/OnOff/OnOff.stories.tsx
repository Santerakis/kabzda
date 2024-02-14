import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {useState} from "react";
import {OnOff} from "./OnOff";

const meta: Meta<typeof OnOff> = {
    // title: 'My Accordion',
    component: OnOff,
};
export default meta;

const onChangeCallback = action('onChange')

export const OnOff_true = () => {
    return <OnOff on={true} onChange={onChangeCallback} />
}
export const OnOff_false = () => {
    return <OnOff on={false} onChange={onChangeCallback} />
}
export const Based = () => {
    const [on, setOn] = useState(false)
    return <OnOff onChange={setOn} on={on}/>
}