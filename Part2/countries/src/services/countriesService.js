import axios from 'axios'

const getCountries = (input) => {
    const request = axios.get(`https://restcountries.com/v2/name/${input}`)
    return request.then(response => response.data)
}

const getWeather = (city, api) => {
    const request = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`)
    return request.then(response => {
        console.log(response.data)
        return response.data
    })
}

export default { getCountries, getWeather }