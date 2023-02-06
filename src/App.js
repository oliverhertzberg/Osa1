const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.name}: {props.exe}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Exercises in total: {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      <Header title={course}/>
      <Content name={part1.name} exe={part1.exercises} />
      <Content name={part2.name} exe={part2.exercises} />
      <Content name={part3.name} exe={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}


export default App