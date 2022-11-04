const CourseName = (course) => {
    return(
      <h2>{course.name}</h2>
    )
  }
  
  const CoursePart = (part) => {
    return (
      <li key = {part.id}>
        {part.name} {part.exercises}
      </li>
    )
  }
  
  const CourseTotal = (course) => {
    return(
      <b>
        Total of {
        course.parts.reduce((sum, part) =>
          {return sum + part.exercises},0) 
        }
      </b>
    )
  }
  
  
  const CourseParts = (course) => {
    return(
      <ul>
      {course.parts.map(
        CoursePart
        )}
      </ul>
    )
  }
  
  const CourseItem = (course) => {
    return (
      <div key ={course.id}>
      {CourseName(course)}
      {CourseParts(course)}
      {CourseTotal(course)}
      </div>
    )
    
  }

export default CourseItem