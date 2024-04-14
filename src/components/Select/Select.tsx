import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css'
import {action} from "@storybook/addon-actions";
// import arrow from './arrow-down.svg'
import circle from './circle.svg'
import {ReactComponent as Arrow} from './arrow-down.svg';
import {ReactComponent as Circle} from './circle.svg';

type SelectItem = {
    value: string
    title: string
}

type Select = {
    value?: any
    onChange: (_: any) => void
    items: SelectItem[]
}

export const Select = React.memo(
    (props: Select) => {
        const [value, setValue] = useState('1') // for option without value props
        const [open, setOpen] = useState(false)
        const [hoveredElValue, setHoveredElValue] = useState(props.value || '1')

        const selectedItemTitle = props.items.find(i => i.value === (props.value || value))?.title

        const onItemClick = (i: SelectItem) => {
            props.onChange(i.value)
            setOpen(false)
            action('value changed on: ')(i.value)
            if (!props.value) setValue(i.value)
        }

        const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.code === 'ArrowDown') {
                const nextHoveredElValue = +hoveredElValue + 1
                if ((hoveredElValue) < props.items.length) {
                    setHoveredElValue(String(nextHoveredElValue));
                    props.onChange(String(nextHoveredElValue))
                    setValue(String(nextHoveredElValue))
                }
            }
            if (e.code === 'ArrowUp') {
                const nextHoveredElValue = +hoveredElValue - 1
                if ((hoveredElValue) > 1) {
                    setHoveredElValue(String(+hoveredElValue - 1));
                    props.onChange(String(+hoveredElValue - 1))
                    setValue(String(nextHoveredElValue))
                }
            }
            if (e.code === 'Escape') {
                setOpen(false)
            }
            if (e.code === 'Enter') {
                setOpen(false)
                setValue(hoveredElValue)
                props.onChange(hoveredElValue)
            }
        }
        console.log('hoveredElValue_out: ', hoveredElValue)
        return (
            <div className={s.select} onKeyDown={onKeyUp} onBlur={() => setOpen(false)} tabIndex={0}>
                {/*<Circle fill={'red'}/>*/}
                {/*<Circle className={s.arrowBlue}/>*/}

                <div onClick={() => setOpen(!open)} className={s.titltewrap}>
                    <h3 className={s.title}>{selectedItemTitle}</h3>
                    <Arrow className={s.arrowSize + ' ' + (open ? s.arrowBlue : '')}/>
                    {/*<img src={arrow} alt="arrow" width="10" height="10"/>*/}
                </div>
                <div className={s.items + ' ' + (open ? s.open : '')}>
                    {props.items.map((i, index) => <div
                        onMouseEnter={() => setHoveredElValue(i.value)}
                        className={s.item +' '+(i.value === hoveredElValue ? s.hover : '')}
                        key={index} style={{cursor: 'pointer'}}
                        onClick={() => {
                            onItemClick(i)}}
                    >{i.title}</div>)}
                </div>

            </div>
        );
    }
)

