import { forwardRef } from 'react';
import { IconSearch } from '../../icons';

import './SearchForm.css';

const SearchForm = forwardRef(function SearchForm(props, ref) {
	const { handleSubmit, hasValidationError } = props;

	return (
		<form
			className={`SearchForm${hasValidationError ? ' SearchForm--error' : ''}`}
			onSubmit={handleSubmit}
		>
			<div
				className='SearchForm__field-wrapper'
				onClick={() => {
					ref.current.focus();
				}}
			>
				<input
					className='SearchForm__input'
					type='text'
					placeholder='Search for any word…'
					ref={ref}
				/>
				<div className='SearchForm__button'>
					<IconSearch />
				</div>
			</div>
			{hasValidationError && <p className='SearchForm__error'>Whoops, can't be empty…</p>}
		</form>
	);
});

export { SearchForm };
