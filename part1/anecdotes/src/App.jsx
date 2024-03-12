import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [bestPoints, setBestPoints] = useState(0)

  const vote = (anecdote) => {
    const points_copy = [...points]
    points_copy[anecdote] += 1
    setPoints(points_copy)

    const new_points = points[anecdote] += 1
    if (new_points > points[bestPoints]) {
      setBestPoints(anecdote)
    }
  }

  const [selected, setSelected] = useState(Math.floor(Math.random()*8))

  const randomize = () => {
    setSelected(Math.floor(Math.random()*8))
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the Press</h1>
        <p>{anecdotes[selected]}</p>
        <p>({points[selected]} points)</p>
        <button onClick={() => vote(selected)}>upvote</button>
        <button onClick={() => randomize()}>Get new anecdote</button>
      </div>
      <div>
      <h1>Top #1 Anecdote</h1>
        <p>{anecdotes[bestPoints]}</p>
        <p>({points[bestPoints]} points)</p>
      </div>
    </div>
  )
}

export default App