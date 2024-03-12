import { StrictMode, useState } from 'react'

const Button = (props) => {
  const {onClick, text} = props;
  return (
    <div>
      <button onClick={onClick}> {text} </button>
    </div>
  )
}

const Feedback = (props) => {
  const {setGood, setNeutral, setBad} = props.setters;
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setGood} text="good" />
      <Button onClick={setNeutral} text="neutral" />
      <Button onClick={setBad} text="bad" />
    </div>
  )
}

const StatisticsLine = (props) => {
  const {text, value} = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props.stats;
  if (good + bad + neutral === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="average" value={(good-bad)/(good+bad+neutral)} />
          <StatisticsLine text="positive" value={String((good)/(good+bad+neutral)*100)+"%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setters = {
    setGood: () => setGood(good + 1),
    setNeutral: () => setNeutral(neutral + 1),
    setBad: () => setBad(bad + 1),
  }

  const stats = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <div>
      <Feedback setters={setters} />
      <Statistics stats={stats} />
    </div>
  )
}

export default App