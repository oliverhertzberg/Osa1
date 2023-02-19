import react from 'react'
import reactDOM from 'react-dom'
import styles from './styles.css'

import { useState } from 'react'


const Button = (props) => {
  return (
    <div>
      <button onClick={props.VoteHandler}>vote</button>
      <button onClick={props.AnecdoteHandler}>next anecdote</button>
    </div>
  )
}

const Votecounter = (props) => {
    return (
      <div>
        <p>has {props.anecdotevotes} votes</p>
      </div>
    )
}


const MostVotes = (props) => {
  const maxVotesIndex = props.anecdotevotes.indexOf(Math.max(...props.anecdotevotes));
  return (
    <div>
      {props.anecdotes[maxVotesIndex]}
    </div>
  )
}



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

  const anecdotevotes = [0,0,0,0,0,0,0,0]

    const [selected, setSelected] = useState(0)


    const AnecdoteHandler = () => {
      const nextAnecdote = Math.floor(Math.random() *(anecdotes.length))
      if(nextAnecdote !== selected) {
        setSelected(nextAnecdote)
      }
      
    }
    console.log("value of selected: ", selected)

    const [quotesvotes, setQuotesvotes] = useState(anecdotevotes)

    const voteHandler = () => {
      const newVotes = [...quotesvotes];
      newVotes[selected] += 1;
      setQuotesvotes(newVotes)
    }

    console.log("value of quotesvotes: ", quotesvotes)
 
    console.log("anecdotevotes at selected: ", anecdotevotes[selected])
    console.log("value of selected: ",selected)


    return (
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <br></br>
        <Votecounter anecdotevotes={quotesvotes[selected]} />
        <Button  VoteHandler={voteHandler} AnecdoteHandler={AnecdoteHandler}/>
        <h1>Anecdote with the most votes</h1>
        <MostVotes anecdotes={anecdotes} anecdotevotes={quotesvotes} />
      </div>
    )
}

export default App