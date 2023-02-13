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
      <table>
        <tbody>
          <tr>
            <th>good</th>
            <td>{props.good}</td>
          </tr>
          <tr>
            <th>neutral</th>
            <td>{props.neutral}</td>          
          </tr>
          <tr>
            <th>bad</th>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <th>all</th>
            <td>{props.all}</td>          
          </tr>
          <tr>
            <th>average</th>
            <td>{props.Average}</td>          
          </tr>
          <tr>
            <th>positive</th>
            <td>{props.Positive} %</td>          
          </tr>
        </tbody>
      </table>
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
    console.log("good:",good + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log("neutral:",neutral + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log("bad:",bad + 1)
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