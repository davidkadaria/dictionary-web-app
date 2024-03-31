import { useCallback, useEffect } from 'react';
import { getTheme, checkThemeValidity, setTheme } from '../../utils';
import { IconMoon } from '../../icons';

import './ThemeSwitch.css';

function ThemeSwitch() {
	const handleThemeChange = useCallback(() => {
		const currentTheme = getTheme();
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';

		setTheme(newTheme);
	}, []);

	useEffect(() => {
		const currentTheme = getTheme();

		if (!checkThemeValidity(currentTheme)) {
			setTheme('light');
		} else {
			setTheme(currentTheme);
		}
	}, []);

	return (
		<div className='ThemeSwitch' onClick={handleThemeChange}>
			<button className='ThemeSwitch__button'>
				<span className='ThemeSwitch__wheel' />
			</button>
			<IconMoon />
		</div>
	);
}

export { ThemeSwitch };
