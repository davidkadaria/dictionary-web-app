import { mainEndpoint } from '../constants';

async function fetchWordInformation(word) {
	const response = await fetch(`${mainEndpoint}${word}`);

	if (!response.ok) {
		const results = await response.json();
		return { error: true, ...results };
	}

	const wordInformation = await response.json();

	return wordInformation;
}

export { fetchWordInformation };
