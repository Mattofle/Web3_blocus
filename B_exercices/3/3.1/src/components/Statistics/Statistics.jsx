import StatLine from "components/StatLine/StatLine";

const Statistics = ({good, neutral, bad}) => {
    return (
        <div>
            <h1>Statistics</h1>
            <StatLine stat="Good" value={good} />
            <StatLine stat="Neutral" value={neutral} />
            <StatLine stat="Bad" value={bad} />
            <StatLine stat="All" value={good + neutral + bad} />
            <StatLine stat="Average" value={good !== 0 || neutral !== 0 || bad !== 0 ? (good - bad) / (good + neutral + bad) : 0} />
            <StatLine stat="Positive" value={good !==0 || neutral !== 0 || bad !==0 ? (good / (good + neutral + bad)) * 100 + "%" : 0} />
        </div>
    )
}

export default Statistics;