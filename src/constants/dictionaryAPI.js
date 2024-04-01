const mainEndpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const errorMessages = {
	notFound: {
		id: 404,
		error: true,
		shortDescription: 'No definitions found',
		longDescription:
			"Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.",
	},
	error: {
		id: 500,
		error: true,
		shortDescription: 'Server error',
		longDescription:
			"Sorry pal, we couldn't fetch the definitions for the word you were looking for. You can try the search again at later time or head to the web instead.",
	},
};

export { mainEndpoint, errorMessages };
