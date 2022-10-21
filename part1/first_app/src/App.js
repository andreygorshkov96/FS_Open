const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      {parts.map(element => {
        return(
          <p> {element.name} {element.exercises} </p>
        )
      })}
      <p>Nubmer of exercises: {parts.reduce((accamulator, object) => {
        return accamulator + object.exercises;
        }, 0)}
      </p>
    </div>
  )
}

export default App
