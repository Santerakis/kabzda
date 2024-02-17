import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Accordion, Item} from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
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

const items = [
    {title: 'Sergey', id: '1'},
    {title: 'Dima', id: '2'},
    {title: 'Andrey', id: '3'},
]
const itemId = undefined

const onChangeCallback = action('onChange')
const onItemClickCallback = action('Some item was clicked')

export const Collapsed = () => {
    return <Accordion onItemClick={()=>{}} items={items} collapsed={true} onClick={onChangeCallback} title={'USER'}/>
}
export const Opened = () => {
    return <Accordion onItemClick={onItemClickCallback} items={items} collapsed={false} onClick={onChangeCallback} title={'USER'}/>
}
export const Based = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion onItemClick={(title) => alert(`Hello ${title}`)} items={items} collapsed={collapsed} onClick={setCollapsed} title={'USER'}/>
}