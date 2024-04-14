import React from 'react';

const onOffStyle = {
    margin: '2px',
}

type OnOff = {
    on: boolean
    onChange: (_: boolean) => void
}

export const OnOff = React.memo(
    (props: OnOff) => {

        let onStyle = {
            display: 'inline-block',
            width: '30px',
            height: '20px',
            border: '1px solid',
            padding: '2px',
            cursor: 'pointer',
            background: props.on ? 'green' : 'none',
        }
        let offStyle = {
            display: 'inline-block',
            width: '30px',
            height: '20px',
            border: '1px solid',
            marginLeft: '2px',
            padding: '2px',
            cursor: 'pointer',
            background: props.on ? 'none' : 'red',
        }
        let ledStyle = {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: '1px solid',
            display: 'inline-block',
            marginLeft: '5px',
            background: props.on ? 'green' : 'red',

        }

        return (
            <div style={onOffStyle}>
                <div style={onStyle} onClick={()=>props.onChange(true)}>On</div>
                <div style={offStyle} onClick={()=>props.onChange(false)}>Off</div>
                <div style={ledStyle}></div>
            </div>
        );
    }
)
