import { mainEndpoint, errorMessages } from '../constants';

async function fetchWordInformation(word) {
	const response = await fetch(`${mainEndpoint}${word}`);

	if (!response.ok) {
		if (response.status === 404) {
			return errorMessages.notFound;
		}
		return errorMessages.error;
	}

	const wordInformation = await response.json();

	return wordInformation;
}

export { fetchWordInformation };
