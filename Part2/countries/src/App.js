import React, { useState, useEffect } from 'react'
import Countries from './components/Countries';
import countriesService from './services/countriesService';

const App = () => {
	const [query, setQuery] = useState('')
	const [countries, setCountries] = useState(null)

	useEffect(() => {
		if(query !== ''){
			const request = countriesService.getCountries(query)
			request.then(data => {
				setCountries(data)
			}).catch(error => {
				setCountries([])
			})
		}
		else{
			setCountries(null)
		}
	}, [query])

	useEffect(() => {
		console.log(countries)
	}, [countries])

	return (
		<div className="App">
			<p>Find countries: <input value={query} onChange={(event) => setQuery(event.target.value)}/></p>
			<hr />
			<Countries countries={countries} setQuery={setQuery} />
		</div>
	);
}

export default App;
