import Button from "components/Button/Button";
import Loading from "components/Loading/Loading";
import Statistics from "components/Statistics/Statistics";
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [load, setLoad] = useState(false);

  setTimeout(() => setLoad(true) ,3000)

  if (!load) {
    return(
        <div>
        <Loading />
        
        </div>
    )
  }

  return (
    <div>
      <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />

        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
