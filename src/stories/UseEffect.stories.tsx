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
        {' '}{counter}
        </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [render, setRender] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {

        setTimeout(()=>{
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

    }, [counter])

    return <>
        <button onClick={() => setRender(render + 1)}>render</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        {' '}{counter}
    </>
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')
    const [render, setRender] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {

        const idInterval = setInterval(()=>{
            console.log('tik:' + counter)
            setCounter(prev => prev + 1)
        }, 1000)

        return () => clearInterval(idInterval)

    }, [])

    return <>
        {counter}
    </>
}


// очистка когда компанента демонтируется либо перед очередным вызовом эффекта
export const ResetEffectExample = () => {
    const [render, setRender] = useState(1)
    console.log('ResetEffectExample rendered with ' + render)

    useEffect(() => {
        console.log('Effect accurred: ' + render)
        return () => {
            console.log('Clean Effect ' + render)
        }
    // }, []);
    }, [render]);

    return <>
        render: {render}
        <button onClick={() => setRender(render + 1)}>render</button>
    </>
}

