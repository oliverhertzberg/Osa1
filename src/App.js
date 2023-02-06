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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
   {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]
  console.log(parts[0].name)
  return (
    <div>
      <Header title={course}/>
      <Content name={parts[0].name} exe={parts[0].exercises} />
      <Content name={parts[1].name} exe={parts[1].exercises} />
      <Content name={parts[2].name} exe={parts[2].exercises} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
    
  )
}


export default App