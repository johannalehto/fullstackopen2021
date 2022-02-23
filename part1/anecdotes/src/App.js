import React, { useState } from "react"


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
      const [points, setPoints] = useState(new Uint8Array(9))
      const [mostVoted, setMostVoted] = useState(0)

     

      const handleNext = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
      }

      const setMostPopular = () => {
        const maxVotes = Math.max( ...points)
        setMostVoted(points.indexOf(maxVotes))
      }

      const handleVote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
        setMostPopular()
      }

  

    return( 
        <>
        <h1>Anecdote of the day</h1>
        <h2>{anecdotes[selected]}</h2>
        <p>has {points[selected]} votes</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleNext}>Next</button>
        <h1>Most popular anecdote</h1>
        <h2>{anecdotes[mostVoted]}</h2>
        <p>has {points[mostVoted]} votes</p>


        </>
    )
}

export default App