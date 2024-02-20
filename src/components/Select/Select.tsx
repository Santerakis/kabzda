import React, {useState} from 'react';
import s from './Select.module.css'
import {action} from "@storybook/addon-actions";
import arrow from './arrow-down.svg'

type SelectItem = {
    value: string
    title: string
}

type Select = {
    value?: any
    onChange: (_: any) => void
    items: SelectItem[]
}

export const Select = (props: Select) => {
    const [value, setValue] = useState('1')
    const selectedItemTitle = props.items.find(i => i.value === (props.value || value))?.title
    const [open, setOpen] = useState(false)

    return (
        <div className={s.select}>
            <div onClick={() => setOpen(!open)} className={s.titltewrap}>
                <h3 className={s.title}>{selectedItemTitle}</h3>
                <img src={arrow} alt="logo" width="10" height="10"/>
            </div>
            <div className={s.items + ' ' + (open ? s.open : '')}>
                {props.items.map((i, index) => <div key={index} style={{cursor: 'pointer'}} onClick={() => {
                    props.onChange(i.value)
                    setOpen(false)
                    action('value changed on: ')(i.value)
                    if (!props.value) setValue(i.value)
                }}>{i.title}</div>)}
            </div>

        </div>
    );
};

