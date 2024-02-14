import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Accordion} from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    // title: 'My Accordion',
    component: Accordion,
};

export default meta;

// type Story = StoryObj<typeof Accordion>;
// export const Primary: Story = {
//     args: {
//         title: 'bla',
//         collapsed: false,
//     },
// };

const onChangeCallback = action('onChange')

export const Collapsed = () => {
    return <Accordion collapsed={true} onClick={onChangeCallback} title={'USER'}/>
}
export const Opened = () => {
    return <Accordion collapsed={false} onClick={() => {
    }} title={'USER'}/>
}
export const Based = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion collapsed={collapsed} onClick={setCollapsed} title={'USER'}/>
}