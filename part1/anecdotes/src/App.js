import React, { useState } from "react"


const DailyAnecdote = ({ anecdote, points }) => {
    return (
        <>
            <h1>Anecdote of the day</h1>
            <h4>{anecdote}</h4>
            <p>has {points} votes</p>
        </>
    )
}


const Button = ({ handleEvent, text }) => {
    return (
        <>
            <button onClick={handleEvent}>{text}</button>
        </>
    )
}

const MostPopularAnecdote = ({ anecdote, points }) => {

    if (points > 0) {
        return (
            <>
                <h1>Most popular anecdote</h1>
                <h5>{anecdote}</h5>
                <p>has {points} votes</p>
            </>
        )
    } else {
        return (
            <>
                <h1>Most popular anecdote</h1>
                <p>No votes yet</p>
            </>
        )
    }
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
    const [points, setPoints] = useState(new Uint8Array(9))
    const [mostVoted, setMostVoted] = useState(0)

    const handleNext = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const setMostPopular = () => {
        const mostPoints = Math.max(...points)
        const mostPointsIndex = points.indexOf(mostPoints)
        setMostVoted(mostPointsIndex)
    }

    const handleVote = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
        setMostPopular()
    }

    return (
        <>
            <DailyAnecdote
                anecdote={anecdotes[selected]}
                points={points[selected]} />
            <Button
                handleEvent={handleVote}
                text={"Vote"} />
            <Button
                handleEvent={handleNext}
                text={"Next"} />
            <MostPopularAnecdote
                anecdote={anecdotes[mostVoted]}
                points={points[mostVoted]} />
        </>
    )
}

export default App