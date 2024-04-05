import { useState, useRef, useEffect, useCallback } from 'react';
import { fetchWordInformation, getQueryParam, setQueryParams, scrollToTop } from '../../utils';
import { defaultErrorResults } from '../../constants';

import { SearchForm, Results, LoadingPlaceholder, ResultsError } from '../';

import './Main.css';

// Cache for already fetched words
const catchedWords = {};

function Main() {
	const [results, setResults] = useState();
	const [loading, setLoading] = useState(false);
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
			} else {
				setValidationError(false);
			}

			// Set query param if needed
			const currentQuery = getQueryParam('word');
			if (currentQuery !== searchFieldValue) {
				setQueryParams('word', searchFieldValue);
			}

			// Fetch word information
			if (catchedWords[searchFieldValue]) {
				setResults(catchedWords[searchFieldValue]);
			} else {
				setLoading(true);
				fetchWordInformation(searchFieldValue)
					.then((data) => {
						if (!data.error) {
							setResults(data[0]);
							catchedWords[searchFieldValue] = data[0];
						} else {
							setResults(data);
							catchedWords[searchFieldValue] = data;
						}

						// Scroll to top of the page
						scrollToTop();
					})
					.catch(() => {
						setResults(defaultErrorResults);
					})
					.finally(() => {
						setLoading(false);
					});
			}
		},
		[]
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
		} else {
			fetchData('welcome');
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
			{loading ? (
				<LoadingPlaceholder />
			) : results && !results.error ? (
				<Results data={results} fetchData={fetchData} />
			) : results && results.error ? (
				<ResultsError data={results} />
			) : null}
		</main>
	);
}

export { Main };
