import react from 'react'
import reactDOM from 'react-dom'
import styles from './styles.css'

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
    'Premature optimization is the root of all evil',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refure to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
    const [selected, setSelected] = useState(0)

    

    const AnecdoteHandler = () => {
      console.log("value of selected: ", selected + 1)
      setSelected((Math.floor(Math.random() *(anecdotes.length))))
    }////(random integervalue between 0 and 1)*items in the array

    return (
      <div>
        {anecdotes[selected]}
        <br></br>
        <button onClick={AnecdoteHandler}>next anecdote</button>
      </div>
    )
}

export default App