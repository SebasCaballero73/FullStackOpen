import { useState } from "react"
import Button from "./components/Button"
import Statistics from "./components/Statistics"

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGood = () => setGood(good+1)
	const handleNeutral = () => setNeutral(neutral+1)
	const handleBad = () => setBad(bad+1)

	console.log((good - bad) / (good + neutral + bad))

	return (
		<div>
			<h2>Give feedback</h2>
			<Button handleClick={handleGood} text="Good" />
			<Button handleClick={handleNeutral} text="Neutral" />
			<Button handleClick={handleBad} text="Bad" />		
			<h2>Statistics</h2>
			<Statistics data={{good, neutral, bad}} />
		</div>
	)
}

export default App;
