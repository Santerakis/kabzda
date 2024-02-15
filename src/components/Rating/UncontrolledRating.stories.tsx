import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {UncontrolledRating} from "./UncontrolledRating";

const meta: Meta<typeof UncontrolledRating> = {
    title: 'UncontrolledRating',
    // component: UncontrolledRating,
};
export default meta;

const onChangeCallback = action('onChange')

export const Base = () => {
    return <UncontrolledRating onChange={onChangeCallback}/>
}

export const DefaultValue = () => {
    return <UncontrolledRating defaultValue={4} onChange={onChangeCallback}/>
}
// export const Rating_Empty_Stars = () => {
//     return <Rating onClick={onChangeCallback} value={0} />
// }
// export const Based = () => {
//     const [value, setValue] = useState<RatingValue>(0)
//     return <Rating onClick={setValue} value={value}/>
// }