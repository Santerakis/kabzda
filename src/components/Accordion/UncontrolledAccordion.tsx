import React, {useState} from "react";

type Accordion = {
    title: string
}

const titleStyle = {
    cursor: 'pointer',
}

export function UncontrolledAccordion(props: Accordion) {
    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={'USER'} onClick={() => setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitle = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitle) {
    return <h3 style={titleStyle} onClick={props.onClick}>{props.title}</h3>
}
function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}