import { forwardRef } from 'react';

import './SearchForm.css';

const SearchForm = forwardRef(function SearchForm(props, ref) {
	const { handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' ref={ref} />
			<button>Search</button>
		</form>
	);
});

export { SearchForm };
