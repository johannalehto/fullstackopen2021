import React, { useState } from "react"

const Counter= () => {
    const [ counter, setCounter ] = useState(0)


    const increaseByOne = () => setCounter(counter + 1)
    const resetToZero = () => setCounter(0)
    //Event handling
/*     const handleClick = () => {
      console.log("Click!")
    } */


    // Stateful component
/*     setTimeout(
      () => setCounter(counter + 1),
      1000
    ) */

    return (
      <div>
        <div>{counter}</div>
        <button onClick={increaseByOne}>+</button>
        <button onClick={resetToZero}>Reset</button>


     {/*    <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => setCounter(0)}>Reset</button> */}
        {/* <button onClick={handleClick}>+</button> */}
      </div> 
    )
}


export default Counter;
