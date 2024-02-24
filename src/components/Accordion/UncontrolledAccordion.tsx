import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./UncontrolledAccordionReducer";

type Accordion = {
    title: string
}

export const titleStyle = {
    cursor: 'pointer',
}

export function UncontrolledAccordion(props: Accordion) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    console.log('Accordion')
    return <div>
        <AccordionTitle title={'USER'} onClick={() => dispatch({type: TOGGLE_CONSTANT})}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitle = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitle) {
    console.log('Title')
    return <h3 style={titleStyle} onClick={props.onClick}>{props.title}</h3>
}
function AccordionBody() {
    console.log('Body')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}