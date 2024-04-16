import React, {useCallback, useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const Example1 = () => {
    console.log('Example1')
    const [render, setRender] = useState(1)
    const [counter, setCounter] = useState(1)

    //api.getUsers().then('')
    //setInterval
    //indexedDB
    //document.getElementId
    //document.title = 'User'

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter changing')
        document.title = counter.toString()
    }, [counter])

    return <>
        <button onClick={() => setRender(render + 1)}>render</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        {counter}
        </>
}