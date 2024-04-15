import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useCallback',
}

const BooksSecret = (props: { addBook: ()=>void }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)

export const UseCallbackExample = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const addBook = () => {
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }

    const memorizedAddBook = useCallback(() => {
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books  addBook={memorizedAddBook}  />
        {books.map((u, i) => <div key={i}>{u}</div>)}
    </>
}