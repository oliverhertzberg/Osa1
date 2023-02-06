const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>{props.part}: {props.exercise}</p>
    </div>
  )
}
const Part2 = (props) => {
  return (
    <div>
      <p>{props.part}: {props.exercise}</p>
    </div>
  )
}
const Part3 = (props) => {
  return (
    <div>
      <p>{props.part}: {props.exercise}</p>
    </div>
  )
}
const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part1 part={part1} exercise={exercises1}/>
      <Part2 part={part2} exercise={exercises2}/>
      <Part3 part={part3} exercise={exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total of exercises: {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header title={course} />
      <Content/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}


export default App