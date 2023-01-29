import { useState } from 'react'

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]

	const randomNumber = () => Math.floor(Math.random() * (anecdotes.length - 1))
	const createList = (accumulator, _value, position) => {
		let copy = {...accumulator}
		copy[position] = 0
		return copy
	}

	const [selected, setSelected] = useState(randomNumber())
	const [points, setPoints] = useState(anecdotes.reduce(createList, {}))
	const [max, setMax] = useState(0)

	const getMax = (data) => {
		const maxElement = Math.max(...Object.values(data))
		console.log(maxElement)
		return Object.keys(data).find((key) => data[key] === maxElement)
	}

	const handleVotes = () => {
		let copy = {...points}
		copy[selected] += 1
		console.log(copy)
		setPoints(copy)
		setMax(getMax(copy))
	}

	return (
		<div>
			<h2>Anecdote of the day</h2>
			{anecdotes[selected]}
			<p><b>Votes to this anecdote:</b>{points[selected]}</p>
			<hr/>
			<button onClick={handleVotes}>Vote</button>
			<button onClick={() => setSelected(randomNumber())}>Next Anecdote</button>

			<h2>Most voted anecdote</h2>
			<p>{anecdotes[max]}</p>
			<p><b>Votes to this anecdote:</b>{points[max]}</p>
		</div>
	)
}

export default App