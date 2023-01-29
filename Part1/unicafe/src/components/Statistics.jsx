import React from 'react'

const StatisticLine = ({ text, value}) => {
    return(
        <tr>
            <td>{text}:</td> 
            <td>{value}</td>
        </tr>
    )
}


const Statistics = ({ data }) => {
    const {good, neutral, bad} = data

    if (good === 0 && neutral === 0 && bad === 0){
        return(
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <table>
            <tbody>
                <StatisticLine text="Good" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Bad" value={bad} />
                <StatisticLine text="All:" value={good + neutral + bad} />
                <StatisticLine text="Average" value={(good - bad) / (good + neutral + bad)} />
                <StatisticLine text="Good" value={((good) / (good + neutral + bad) * 100).toString() + '%'} />
            </tbody>
        </table>
    )
}

export default Statistics