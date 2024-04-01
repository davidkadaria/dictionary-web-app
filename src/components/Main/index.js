import { useState, useRef } from 'react';
import { fetchWordInformation } from '../../utils';

import { SearchForm, Results } from '../';

import './Main.css';

function Main() {
	const [results, setResults] = useState();
	const [validationError, setValidationError] = useState(false);

	const searchFieldRef = useRef();

	async function handleSubmit(event) {
		event.preventDefault();
		const searchFieldValue = searchFieldRef.current.value;

		// Validate search field
		if (!searchFieldValue || searchFieldValue.trim() === '') {
			setValidationError(true);
			return;
		} else if (validationError) {
			setValidationError(false);
		}

		// Fetch word information
		fetchWordInformation(searchFieldValue).then((data) => {
			if (!data.error) {
				setResults(data[0]);
			} else {
				setResults(data);
			}
		});
	}

	return (
		<main className='Main'>
			<SearchForm
				handleSubmit={handleSubmit}
				hasValidationError={validationError}
				ref={searchFieldRef}
			/>
			{results && !results.error && <Results data={results} />}
		</main>
	);
}

export { Main };
