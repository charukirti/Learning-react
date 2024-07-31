import { useState } from "react";

export default function Clik (){
    const [count, setCount]  = useState(10)

    function clickHandler() {
        setCount(count + 1);
        setCount(count + 1)
        setCount((prevCount) => prevCount + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount((prevCount) => prevCount + 1)
        setCount(count + 1)
        setCount(count + 5)
        setCount(count + 1)
        setCount((prevCount) => prevCount + 1)
        setCount(count + 8)
    }

    return (
        <>
        <p>{count}</p>
            <button onClick={() => clickHandler()}>
                Click me!
            </button>
        </>
    )
}

