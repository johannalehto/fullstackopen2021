import React from "react"
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const App = () => {

  const course = "Half Stack application development"
 
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]

  const allParts = parts.map(createCard)

  return (
    <div>

      <Header coursee={course} />
      <p>{allParts}</p>
      <Content parts={parts} />
      {/* <Total parts={parts}/> */}
    </div>
  )
}

export default App