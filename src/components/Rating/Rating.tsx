import React from "react";
import {starStyle} from "./UncontrolledRating";

export type RatingValue =  0 | 1 | 2 | 3 | 4 | 5

type Rating = {
    value: RatingValue
    onClick: (_: RatingValue) => void
}

export const Rating = React.memo(
    function(props: Rating) {
        return (
            <div>
                <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
                <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
                <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
                <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
                <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
            </div>
        )
    }
)

type Star = {
    selected: boolean
    onClick: (_: RatingValue) => void
    value: RatingValue
}

function Star(props: Star) {
    return <span style={starStyle} onClick={() => props.onClick(props.value)}>{props.selected ? <b>star </b> : 'star '}</span>
}