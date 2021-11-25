import React, { useState } from "react"


//Object as state
const App = () => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleClickLeft = () => {
        setAll(allClicks.concat('L'))
        setLeft(left +1)
    }

    const handleClickRight = () => {
        setAll(allClicks.concat('R'))
        setRight(right +1)
    }



    // Complex state //
/*     const [counter, setCounter] = useState(
        { left: 0, right: 0}
    )

    const handleClickLeft = () => {
        const newClick = ({...counter, left: counter.left + 1})
        setCounter(newClick)
    }

    const handleClickRight = () => {
        const newClick =  ({...counter, right: counter.right + 1})
        setCounter(newClick)
    } */

    // This is the longer form //
    /* const handleClickLeft = () => {
        const newClick = {
            left: counter.left + 1,
            right: counter.right
        }
        setCounter(newClick)
    }

    const handleClickRight = () => {
        const newClick = {
            left: counter.left,
            right: counter.right +1 
        }
        setCounter(newClick)
    } */

    return (
        <div>
            {left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
            {right}
        <p>{allClicks.join(' ')}</p>
        </div>
        
    )


}



// Two different states
/* const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    return (
        <div>
            {left}
            <button onClick={() => setLeft(left + 1)}>left
            </button>
            <button onClick={() => setRight(right + 1)}>right
            </button>
            {right}
        </div>

    )
} */

export default App

