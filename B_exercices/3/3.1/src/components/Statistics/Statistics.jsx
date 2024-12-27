import StatLine from "components/StatLine/StatLine";

const Statistics = ({good, neutral, bad}) => {
    if (good + neutral + bad === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Statistics</h1>
            <StatLine stat="Good" value={good} />
            <StatLine stat="Neutral" value={neutral} />
            <StatLine stat="Bad" value={bad} />
            <StatLine stat="All" value={good + neutral + bad} />
            {/* 
                je laisse mais opérateurs ternaires ici pcq j'en étais content :'(
                good !== 0 || neutral !== 0 || bad !== 0 ? (good - bad) / (good + neutral + bad) : 0
                good !==0 || neutral !== 0 || bad !==0 ? (good / (good + neutral + bad)) * 100 + "%" : 0
             */}
            
            <StatLine stat="Average" value={(good - bad) / (good + neutral + bad)} />
            <StatLine stat="Positive" value={(good / (good + neutral + bad)) * 100 + "%"} />
        </div>
    )
}

export default Statistics;