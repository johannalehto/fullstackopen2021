import React, { useState } from "react"


const Statistics = (props) => {
  if (props.all >= 1) {
    return (
      <div><table><tbody>
        <StatisticLine text="Good" value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad" value={props.bad}/>
        <StatisticLine text="All" value={props.all}/>
        <StatisticLine text="Average" value={props.average}/>
        <StatisticLine text="Positive" value={props.positive}/>
        </tbody></table>
      </div>
    )
  } else {
    return (
      <div>
        <p>No feedback given</p
      ></div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.handleEvent}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }

  const allClicks = good + neutral + bad
  const average = ((good - bad) / (good + bad + neutral)).toFixed(1)
  const positive = ((good / allClicks) * 100).toFixed(1) + " %"

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleEvent={handleClickGood} text="Good"/>
      <Button handleEvent={handleClickNeutral} text="Neutral"/>
      <Button handleEvent={handleClickBad} text="Bad"/>
    
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={allClicks}
        average={average}
        positive={positive}
      />

    </div>
  )

}

export default App
