import React from "react";

type Accordion = {
    title: string
    collapsed: boolean
}

export function Accordion(props: Accordion) {
    return <div>
        <AccordionTitle {...props}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

function AccordionTitle(props: {title: string}) {
    return <h3>{props.title}</h3>
}
function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}