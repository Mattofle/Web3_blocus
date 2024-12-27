import StatLine from "components/StatLine/StatLine";

const Statistics = ({good, neutral, bad}) => {
    return (
        <div>
            <h1>Statistics</h1>
            <StatLine stat="Good" value={good} />
            <StatLine stat="Neutral" value={neutral} />
            <StatLine stat="Bad" value={bad} />
        </div>
    )
}

export default Statistics;