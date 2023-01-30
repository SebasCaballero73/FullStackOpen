import React from 'react'
import Country from './Country'


const Countries = ({ countries, setQuery }) => {
    if(countries === null){
        return(
            <div>
                You can search for countries
            </div>
        )
    }
    else if(countries.length === 0){
        return(
            <div>
                There are not results
            </div>
        )
    }
    else if(countries.length >= 10){
        return(
            <div>
                There are too much results. Specify more, please
            </div>
        )
    }
    else if(countries.length !== 1){
        return(
            <div>
                <ol>
                    {countries.map((country) => (
                        <>
                            <li key={country.numericCode}> || {country.name} <button onClick={() => setQuery(country.name)}>Show</button></li>     
                        </>
                    ))}
                </ol>
            </div>
        )
    }
    else{
        return(
            <div>
                <Country country={countries[0]} />
            </div>
        )
    }
}

export default Countries