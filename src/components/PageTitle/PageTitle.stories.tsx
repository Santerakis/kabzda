import type {Meta} from '@storybook/react';

import {PageTitle} from "./PageTitle";

const meta: Meta<typeof PageTitle> = {
    title: 'PageTitle',
    component: PageTitle,
};
export default meta;

export const Title_My_Title = () => {
    return <PageTitle title={'My Title'} />
}
export const Title = () => {
    return <PageTitle title={'TITLE'} />
}
