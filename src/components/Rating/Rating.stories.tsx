import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Rating, RatingValue} from "./Rating";
import {useState} from "react";

const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating,
};
export default meta;

const onChangeCallback = action('onChange')

export const Rating_3_Stars = () => {
    return <Rating onClick={onChangeCallback} value={3} />
}
export const Rating_Empty_Stars = () => {
    return <Rating onClick={onChangeCallback} value={0} />
}
export const Based = () => {
    const [value, setValue] = useState<RatingValue>(0)
    return <Rating onClick={setValue} value={value}/>
}