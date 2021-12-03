import React, { useState } from "react"


const Button = (props) => {
  return(
    <button onClick={props.handleEvent}>{props.text}</button>
  )
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'The best way to get a project done faster is to start sooner',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Even the best planning is not so omniscient as to get it right the first time.',
    'How does a project get to be a year late?... One day at a time.',
    'Plan to throw one (implementation) away; you will, anyhow.',
    'Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Program testing can be used to show the presence of bugs, but never to show their absence!'
  ]

  const [selected, setSelected] = useState(0)

  const giveRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const points = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  const givePoint = () => {
    points[selected] +=1
  }

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <p>has {points[selected]} votes </p>
      <Button handleEvent={givePoint} text="Vote"/>
      <Button handleEvent={giveRandom} text="Next anecdote"/>
    </div>
    
  )
}

export default App
