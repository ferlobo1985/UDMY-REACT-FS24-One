import { useState } from 'react'

const StatePlayground = () => {
    let initialCount = 0;
    let [count,setCount] = useState(initialCount);

    const addOne = () => {
        setCount(count + 1)
    }

    const restOne = () => {
        setCount(prevCount => {
            let result = prevCount - 1
            return result;
        })
    }

    const restCount = () =>{
        setCount(initialCount)
    }

    return(
        <>
            <h3>Count:{count}</h3>
            <button onClick={addOne}>Add one +1</button>
            <button onClick={restOne}>Rest one -1</button>
            <button onClick={restCount}>RESET</button>
        </>
    )
}


export default StatePlayground;