import axios from 'axios'

const getAllPerson = () => {
    const request = axios.get('http://localhost:3001/persons')
    return request.then(response => response.data)
}

const addPerson = (data) => {
    const request = axios.post('http://localhost:3001/persons', data)
    return request.then(response => response.data)
}

const updatePerson = (id, data) => {
    const request = axios.put(`http://localhost:3001/persons/${id}`, data)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`)
    return request.then(response => response.data)
}

export default { getAllPerson, addPerson, updatePerson, deletePerson }