import { useState } from "react"
import styles from "./styles.css"


const Button = ({goodClick, neutralClick, badClick}) => {
  return (
    <div className="buttons">
      <button  onClick={goodClick}>good</button>
      <button  onClick={neutralClick}>neutral</button>
      <button  onClick={badClick}>bad</button>
    </div>
  )
} 

const StatisticLine = (props) => {
      return (
      <div>
        <p className="statistics">good {props.good}</p>
        <p className="statistics">neutral {props.neutral}</p>
        <p className="statistics">bad {props.bad}</p>
        <p className="statistics">all {props.all}</p>
        <p className="statistics">average {props.Average}</p>
        <p className="statistics">positive {props.Positive} %</p>
      </div>
      )
}


const Statistics = ({ good, neutral, bad, all, Average, Positive }) => {
  const feedback = (good+neutral+bad)
  if(feedback) {
    return (
      <div>
      <StatisticLine good={good} bad={bad} neutral={neutral} all={all} Average={Average} Positive={Positive}/>
      </div>
    )
  }
  return (
    <div>
      <p className="statistics">No feedback given</p>
    </div>
  )

}


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

  const Average = (good - bad)/(good+bad+neutral);
  //calculating the average

  const Positive = (good/(good+bad+neutral))*100
  //calculating percentage of positive reviews
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button goodClick={handleGoodClick} neutralClick={handleNeutralClick} badClick={handleBadClick}/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} all={good+bad+neutral} Average={Average} Positive={Positive}/>
    </div>
  )
}


export default App