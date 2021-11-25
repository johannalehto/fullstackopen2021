import React, { useState } from "react"
import Button from "./Button"

const History = (props) => {
    if(props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    } else {
        return (
            <div> 
                button press history: {props.allClicks.join(" ")}
            </div>
        )
    }


}

const App = () => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])

    const handleClickLeft = () => {
        setLeft(left + 1)
        setAllClicks(allClicks.concat(" L "))
       
       
    }

    const handleClickRight = () => {
        setRight(right + 1)
        setAllClicks(allClicks.concat(" R "))
    }

    return (
        <div>
            {left}
            <Button handleEvent={handleClickLeft} name="left"/>
            <Button handleEvent={handleClickRight} name="right"/>
            {right}
            <History allClicks={allClicks} />
        </div>
    )

}


export default App