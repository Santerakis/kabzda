import React, {useCallback, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    // difficult counting
    console.log('generateData')
    return 78742834
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        </>
}