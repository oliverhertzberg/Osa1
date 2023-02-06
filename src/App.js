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
  const course = {
    name: 'Half Stack application development',
   parts: [
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
}
  console.log(course.parts[0].name)
  return (
    <div>
      <Header title={course.name}/>
      <Content name={course.parts[0].name} exe={course.parts[0].exercises}/>
      <Content name={course.parts[1].name} exe={course.parts[1].exercises}/>
      <Content name={course.parts[2].name} exe={course.parts[2].exercises}/>
      <Total total={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}/>
    </div>
  )
}


export default App