import React from "react"


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Johanna" age={24+10} />
      <Hello name={name} age={age}/>
      <Hello name="Eveliina" age={26+8}/>
    </div>
  )
}


export default App;
