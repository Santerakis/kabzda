import React, {useState} from 'react';

const onOffStyle = {
    margin: '2px',
}

type UncontrolledOnOff = {
    onChange: (_: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOff) => {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    let onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid',
        padding: '2px',
        cursor: 'pointer',
        background: on ? 'green' : 'none',
    }
    let offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid',
        marginLeft: '2px',
        padding: '2px',
        cursor: 'pointer',
        background: on ? 'none' : 'red',
    }
    let ledStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red',

    }

    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={()=>{props.onChange(true); setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.onChange(false); setOn(false)}}>Off</div>
            <div style={ledStyle}></div>
        </div>
    );
};
