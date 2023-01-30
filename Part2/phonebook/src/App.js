import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Notification from './components/Notification'
import Persons from './components/Persons'
import personsServices from './services/persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [message, setMessage] = useState({content: null, type: 'Good'})
	const peopleShown = filter === '' ? persons : persons.filter((value) => value.name.includes(filter))

	useEffect(() => {
		personsServices.getAllPerson().then(persons => setPersons(persons))
	}, [])

	useEffect(() => {
		const clearMessage = setTimeout(() => {
			setMessage({content: null, type: 'Good'})
		}, 3000)
		return () => clearTimeout(clearMessage)
	}, [message])

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={message}/>
			<br/>
			<Filter filter={filter} setFilter={setFilter} />
			<Form
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				setMessage={setMessage}
			/>
			<h2>Numbers</h2>
			<Persons persons={peopleShown} setPersons={setPersons} setMessage={setMessage}/>
		</div>
	)
}

export default App