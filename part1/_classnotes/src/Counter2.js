import React, { useState } from "react";
import Display from "./Display"
import Button from "./Button"

const App = () => {

    const [counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const resetToZero = () => setCounter(0)

    return(
        <div>
            <Display counter={counter}/>
            <Button 
                handleEvent={increaseByOne} 
                name="+"
            />
            <Button 
                handleEvent={resetToZero} 
                name="reset"
            />

        </div>

    )
}



export default App