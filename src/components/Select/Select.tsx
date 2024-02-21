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
    const [open, setOpen] = useState(false)
    const [hoveredElValue, setHoveredElValue] = useState(props.value)
    const selectedItemTitle = props.items.find(i => i.value === (props.value || value))?.title

    const onItemClick = (i: SelectItem) => {
        props.onChange(i.value)
        setOpen(false)
        action('value changed on: ')(i.value)
        if (!props.value) setValue(i.value)
    }

    const onKeyUp = () => {
        console.log('up')
    }

    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <div onClick={() => setOpen(!open)} className={s.titltewrap}>
                <h3 className={s.title}>{selectedItemTitle}</h3>
                <img src={arrow} alt="arrow" width="10" height="10"/>
            </div>
            <div className={s.items + ' ' + (open ? s.open : '')}>
                {props.items.map((i, index) => <div onMouseEnter={() => setHoveredElValue(i.value)} className={s.item +' '+(hoveredElValue === i.value ? s.hover : '')} key={index} style={{cursor: 'pointer'}} onClick={() => {
                    onItemClick(i)
                }}>{i.title}</div>)}
            </div>

        </div>
    );
};

