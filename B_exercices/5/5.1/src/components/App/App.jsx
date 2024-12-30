import { useContext } from 'react'
import { Context as VoteContext } from 'contexts/VoteContext'
import './App.css'

function App() {
  const {
    goodVotes,
    okVotes,
    badVotes,
    increaseGood,
    increaseOk,
    increaseBad,
    resetAll,
  } = useContext(VoteContext)

  return (
    <div>
      <div>
        Good : {goodVotes} <button onClick={increaseGood}>Good</button>
      </div>
      <div>
        Ok : {okVotes} <button onClick={increaseOk}>Ok</button>
      </div>
      <div>
        Bad : {badVotes} <button onClick={increaseBad}>Bad</button>
      </div>
      <button onClick={resetAll}>Reset</button>
    </div>
  )
}

export default App
