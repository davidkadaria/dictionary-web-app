const mainEndpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const defaultErrorResults = {
	error: true,
	title: 'Oops! Something went wrong.',
	message: "Sorry pal, we couldn't fetch the definitions for the word you were looking for.",
	resolution: 'You can try the search again at later time or head to the web instead.',
};

export { mainEndpoint, defaultErrorResults };
