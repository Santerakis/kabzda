import React from "react";
import {titleStyle} from "./UncontrolledAccordion";

type Accordion = {
    title: string
    collapsed: boolean
    onClick: (_: boolean) => void
}

export function Accordion(props: Accordion) {
    return <div>
        <AccordionTitle {...props}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitle = {
    title: string
    onClick: (_: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitle) {
    return <h3 style={titleStyle} onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}