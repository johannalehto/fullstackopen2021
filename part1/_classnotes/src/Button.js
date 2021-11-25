import React from "react"


// Debugging 
/* const Button = (props) => {
    console.log("props value is", props)
    const { handleEvent, name } = props
    return (
        <button onClick={handleEvent}>{name}</button>
    )
} */

const Button = ({ handleEvent, name }) => (
<button onClick={handleEvent}>{name}</button>
)


//The usual way 
/* const Button = (props) => {
    return (    
    <button onClick={props.handleEvent}>{props.name}</button>  

    )
} */

export default Button