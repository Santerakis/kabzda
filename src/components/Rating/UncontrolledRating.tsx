import React from "react";

type RatingValue =  0 | 1 | 2 | 3 | 4 | 5

export function Rating(props: {value?: RatingValue}) {
    return (
        <div>
            <Star selected={props.value! > 0}/>
            <Star selected={props.value! > 1}/>
            <Star selected={props.value! > 2}/>
            <Star selected={props.value! > 3}/>
            <Star selected={props.value! > 4}/>
        </div>
    )
}

function Star(props: {selected: boolean}) {
    return <span>{props.selected ? <b>star </b> : 'star '}</span>
}