import React from 'react'
import personsServices from '../services/persons'

const Form = ({ persons, setPersons, newName, newNumber, setNewName, setNewNumber, setMessage}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
		const index = persons.findIndex((value) => value.name === newName) 
		if (index === -1) {
			personsServices.addPerson({ name: newName, number: newNumber}).then(addedPerson => {
				setPersons(persons.concat([addedPerson]))
				setNewName('')
				setNewNumber('')
				setMessage({content: 'User added!', type: 'Good'})
			}).catch(_error => {
                setMessage({content: 'There was an error', type: 'Bad'})
            })
		}
		else {
			if(window.confirm('This name is actually in the phonebook. Do you want to change it?')){
				personsServices.updatePerson(index+1, {...persons[index], number: newNumber}).then(data => {
					setPersons(persons.map((person) => person.id === index + 1? data : person))
					setNewName('')
					setNewNumber('')
					setMessage({content: 'User updated!', type: 'Good'})
				}).catch(_error => {
					setMessage({content: 'There was an error', type: 'Bad'})
				})
			}
		}
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
				<div>
					Name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
				</div>
				<div>
					Number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
        </div>
    )
}

export default Form