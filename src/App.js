import { useState } from "react"
import styles from "/Users/oliverhertzberg/Documents/Fullstack/fullstack_osa1/part1/src/styles.css"






const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log("good:",good)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log("neutral:",neutral)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log("bad:",bad)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button className="buttons" onClick={handleGoodClick}>good</button>
      <button className="buttons" onClick={handleNeutralClick}>neutral</button>
      <button className="buttons" onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p className="statistics">good {good}</p>
      <p className="statistics">neutral {neutral}</p>
      <p className="statistics">bad {bad}</p>
    </div>
  )
}


export default App