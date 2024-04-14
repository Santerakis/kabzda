import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    // let resultA = 1
    let resultB = 1

    const resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <h1>Factorial</h1>
        <p>(0! = 1)</p>
        <input maxLength={1} size={4} value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input maxLength={4} style={{width: 40}} value={b} onChange={e => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Sergey', 'Dimych', 'Valera', 'Alex'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, []);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}