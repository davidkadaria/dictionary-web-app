import { SelectFont } from '../';

import './Header.css';

function Header() {
	return (
		<header className='Header'>
			<div className='Header__logo'>
				<img src='/logo.svg' alt='App logo' />
			</div>
			<div className='Header__controls'>
				<SelectFont />
			</div>
		</header>
	);
}

export { Header };
