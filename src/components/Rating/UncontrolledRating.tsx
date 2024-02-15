import React, {useState} from "react";
import {RatingValue} from "./Rating";

export const starStyle = {
    cursor: 'pointer'
}

type UncontrolledRating = {
    defaultValue?: RatingValue
    onChange: (_:RatingValue) => void
}
export function UncontrolledRating(props: UncontrolledRating) {
    const [value, setValue] = useState<RatingValue>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star onClick={() => {setValue(1); props.onChange(1)}} selected={value > 0} />
            <Star onClick={() => {setValue(2); props.onChange(2)}} selected={value > 1} />
            <Star onClick={() => {setValue(3); props.onChange(3)}} selected={value > 2} />
            <Star onClick={() => {setValue(4); props.onChange(4)}} selected={value > 3} />
            <Star onClick={() => {setValue(5); props.onChange(5)}} selected={value > 4} />
        </div>
    )
}

type Star = {
    selected: boolean
    onClick: () => void
}

function Star(props: Star) {
    return <span style={starStyle} onClick={props.onClick}>{props.selected ? <b>star </b> : 'star '}</span>
}