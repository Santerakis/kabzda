import {useState} from "react";

export default {
    title: 'useMemo',
}

export const Example1 = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    for (let i = 1; i <= a; i++) {
        let fake = 0
        while (fake < 100000000) {
            fake++
            const fakeValue = Math.random()
        }
        resultA = resultA * i
    }

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
        <input value={b} onChange={e => setB(+e.currentTarget.value)} />
        <hr />
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>

    </>
}