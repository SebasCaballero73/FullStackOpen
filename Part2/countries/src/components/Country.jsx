import React, { useState, useEffect } from 'react'
import countriesService from '../services/countriesService'

const Country = ({ country }) => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        console.log('Api Key', process.env.REACT_APP_API_KEY)
        const request = countriesService.getWeather(country.capital, process.env.REACT_APP_API_KEY)
        request.then(data => setWeather(data.list[0]))
    }, [])

    return(
        <div>
            <h2>{country.name}</h2>
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Area:</b> {country.area}</p>
            <p><b>Main currency:</b> {country.currencies[0].name}</p>
            <h3>Languages</h3>
            <ol>
                {country.languages.map((language) => (
                    <li key={language.name}><b>Name:</b> {language.name} {language.nativeName ? <><b>||  Native name:</b> {language.nativeName}</> : ''}</li>
                ))}
            </ol>
            <h3>Flag of {country.name}</h3>
            <img alt={`${country.name} flag`} src={country.flag} width='200px'style={{border: '5px solid black'}}/>
            <hr/>
            <h3>Weather in {country.capital}</h3>
            {weather === null ? <></> : 
                <>
                    <p><b>Temperature:</b> {weather.main.temp} °C</p>
                    <p><b>Wind speed:</b> {weather.wind.speed} km/h</p>
                    <p><b>Weather:</b> {weather.weather.description} km/h</p>
                    <img alt={`Weather in ${country.capital}`} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} style={{border: '5px solid black'}}/>                
                </>            
            }
        </div>
    )
}

export default Country