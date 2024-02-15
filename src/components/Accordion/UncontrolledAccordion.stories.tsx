import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {UncontrolledAccordion} from "./UncontrolledAccordion";

const meta: Meta<typeof UncontrolledAccordion> = {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};
export default meta;

const onChangeCallback = action('onClick')

export const Opened = () => {
    return <UncontrolledAccordion title={'User'}/>
}
