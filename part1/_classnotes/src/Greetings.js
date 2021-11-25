import React from "react"

const Hello = (props) => {

    const name = props.name
    const age = props.age
   
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - props.age
    }
  
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So you were probably born in {bornYear}</p>
      </div>
    )
  }
  
  const Greetings = () => {
    const name = "Peter"
    const age = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Johanna" age={24+10} />
        <Hello name={name} age={age}/>
      </div>
    )
  }



export default Greetings