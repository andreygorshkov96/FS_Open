const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(element => {
        return(
          <p> {element.name} {element.exercises} </p>
        )
      })}
      <p>
        Nubmer of exercises: {course.parts.reduce((accamulator, object) => {
        return accamulator + object.exercises;} , 0)}
      </p>
    </div>
  )
}

export default App
