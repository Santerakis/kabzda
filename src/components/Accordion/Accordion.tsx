import React from "react";
import {titleStyle} from "./UncontrolledAccordion";

export type Item = {
    title: string
    id: string
}

type Accordion = {
    title: string
    collapsed: boolean
    onClick: (_: boolean) => void
    items: Item[]
    onItemClick: (_: string) => void
}

export const Accordion = React.memo(
    function(props: Accordion) {
        return <div>
            <AccordionTitle {...props}/>
            {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
        </div>
    }
)

type AccordionTitle = {
    title: string
    onClick: (_: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitle) {
    return <h3 style={titleStyle} onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
}

type AccordionBody = {
    items: Item[]
    onItemClick: (_: string) => void
}

function AccordionBody(props: AccordionBody) {
    return <ul>
        {props.items.map(i => <li style={{cursor: 'pointer'}} onClick={() => props.onItemClick(i.title)} key={i.id}>{i.title}</li>)}
    </ul>
}