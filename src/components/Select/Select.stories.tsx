import type {Meta} from '@storybook/react';

import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
};
export default meta;

export const BaseExample = () => {
    return <Select onChange={action('Value changed')} value={'1'} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]} />
}

