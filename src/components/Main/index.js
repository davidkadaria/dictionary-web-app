import { useState, useRef, useEffect, useCallback } from 'react';
import { fetchWordInformation, getQueryParam, setQueryParams, scrollToTop } from '../../utils';

import { SearchForm, Results } from '../';

import './Main.css';

function Main() {
	const [results, setResults] = useState();
	const [validationError, setValidationError] = useState(false);

	const searchFieldRef = useRef();

	const fetchData = useCallback(
		(word) => {
			let searchFieldValue;

			if (word) {
				searchFieldValue = word;
				searchFieldRef.current.value = searchFieldValue;
			} else {
				searchFieldValue = searchFieldRef.current.value;
			}

			// Validate search field
			if (!searchFieldValue || searchFieldValue.trim() === '') {
				setValidationError(true);
				return;
			} else if (validationError) {
				setValidationError(false);
			}

			// Set query param if needed
			const currentQuery = getQueryParam('word');
			if (currentQuery !== searchFieldValue) {
				setQueryParams('word', searchFieldValue);
			}

			// Fetch word information
			fetchWordInformation(searchFieldValue).then((data) => {
				if (!data.error) {
					setResults(data[0]);
				} else {
					setResults(data);
				}
				// Scroll to top of the page
				scrollToTop();
			});
		},
		[validationError]
	);

	const handleHistoryChange = useCallback(() => {
		const query = getQueryParam('word');
		if (query) {
			fetchData(query);
		}
	}, [fetchData]);

	function handleSubmit(event) {
		event.preventDefault();
		fetchData();
	}

	useEffect(() => {
		const query = getQueryParam('word');
		if (query) {
			fetchData(query);
		}
		window.addEventListener('popstate', handleHistoryChange);

		return () => {
			window.removeEventListener('popstate', handleHistoryChange);
		};
	}, [fetchData, handleHistoryChange]);

	return (
		<main className='Main'>
			<SearchForm
				handleSubmit={handleSubmit}
				hasValidationError={validationError}
				ref={searchFieldRef}
			/>
			{results && !results.error && <Results data={results} fetchData={fetchData} />}
		</main>
	);
}

export { Main };
