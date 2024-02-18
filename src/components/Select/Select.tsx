import React from 'react';
import {Item} from "../Accordion/Accordion";

type SelectItem = {
    value: string
    title: string
}

type Select = {
    value: any
    onChange: (_: any) => void
    items: SelectItem[]
}

export const Select = (props: Select) => {
    return (
        <div>
            <div></div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    );
};

