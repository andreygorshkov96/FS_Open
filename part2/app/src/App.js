import CourseItem from "./components/courses"

const App = ({courses}) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <div>
        {courses.map(CourseItem)}
      </div>
    </div>
  )
}

export default App