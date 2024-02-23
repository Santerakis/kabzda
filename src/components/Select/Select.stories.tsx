import type {Meta} from '@storybook/react';

import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
};
export default meta;

export const BaseExample = () => {
    const [value, setValue] = useState('1')
    return <Select onChange={setValue} value={value} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]} />
}
export const WithoutValue = () => {
    return <Select onChange={action('Value changed')} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]} />
}

