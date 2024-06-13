const Course = (props) => {
  const course = props.course;
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  const course = props.course
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <ul>
      {parts.map(part => 
        <Part key={part.id} part={part.name} exercises={part.exercises} />  
      )}
    </ul>
  )
}

const Part = (props) => {
  const {part, exercises} = props
  return (
    <li>
      {part} {exercises}
    </li>
  )
}

const Total = (props) => {
  const parts = props.parts
  const sum = parts.reduce((pSum, part) => pSum + part.exercises, 0)
  return (
    <div>
      <p style="font-weight: bold">
        Number of exercises {sum}
      </p>
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
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Something cool',
        exercises: 8,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App