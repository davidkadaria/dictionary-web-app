import { SelectFont, ThemeSwitch } from '../';
import { Logo } from '../../icons';

import './Header.css';

function Header() {
	return (
		<header className='Header'>
			<div className='Header__logo'>
				<Logo />
			</div>
			<div className='Header__controls'>
				<SelectFont />
				<span className='Header__vertical-separator' />
				<ThemeSwitch />
			</div>
		</header>
	);
}

export { Header };
