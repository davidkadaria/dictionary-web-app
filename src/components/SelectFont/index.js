import { useState, useEffect, useCallback } from 'react';
import { getFont, checkFontValidity, setFont } from '../../utils';
import { fontFamilyOptions } from '../../constants';
import { IconArrowDown } from '../../icons';

import './SelectFont.css';

function SelectFont() {
	const [state, setState] = useState({
		isCollapsed: false,
		currentFont: 'sans-serif',
	});

	const handleFontChange = useCallback((event) => {
		const font = event.target.value;
		setState({
			currentFont: font,
			isCollapsed: false,
		});
		setFont(font);
	}, []);

	const handleClickOutside = useCallback((event) => {
		if (!event.target.closest('.SelectFont')) {
			setState((prevState) => ({
				...prevState,
				isCollapsed: false,
			}));
		}
	}, []);

	useEffect(() => {
		const font = getFont();

		if (checkFontValidity(font)) {
			setState((prevState) => ({
				...prevState,
				currentFont: font,
			}));
			setFont(font);
		} else {
			setState((prevState) => ({
				...prevState,
				currentFont: 'sans-serif',
			}));
			setFont('sans-serif');
		}

		// If user clicks outside of the dropdown, close it
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<div className='SelectFont'>
			<button
				className='SelectFont__button'
				onClick={() =>
					setState((prevState) => ({
						...prevState,
						isCollapsed: !prevState.isCollapsed,
					}))
				}
			>
				{fontFamilyOptions.find((e) => e.value === state.currentFont).label} <IconArrowDown />
			</button>
			{state.isCollapsed && (
				<div className='SelectFont__dropdown'>
					{fontFamilyOptions.map((option) => (
						<label
							key={option.value}
							className={`SelectFont__item SelectFont__item-${option.value}${
								option.value === state.currentFont ? ' SelectFont__item--active' : ''
							}`}
						>
							<input
								type='radio'
								name='font'
								value={option.value}
								checked={state.currentFont === option.value}
								onChange={handleFontChange}
							/>
							{option.label}
						</label>
					))}
				</div>
			)}
		</div>
	);
}

export { SelectFont };
