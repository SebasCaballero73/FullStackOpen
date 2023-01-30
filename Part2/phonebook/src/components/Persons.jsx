import React from 'react'
import personsServices from '../services/persons'

const Person = ({ name, number }) => {
    return (
        <p>
            <b>Name:</b> {name} <b>|| Number:</b> {number} <b>||</b> 
        </p>
    )
}

const Persons = ({ persons, setPersons, setMessage }) => {
    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this entry?')){
            const deleted = personsServices.deletePerson(id)
            deleted.then(_response => {
                setPersons(persons.filter((person) => person.id !== id))
                setMessage({content: 'User deleted!', type: 'Good'})
            }).catch(_error => {
                setMessage({content: 'There was an error', type: 'Bad'})
            })
        }

    }
    return (
        <div>
            {persons.map((person) => 
                <div key={person.id}>
                    <Person name={person.name} number={person.number} />
                    <button onClick={() => handleDelete(person.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Persons