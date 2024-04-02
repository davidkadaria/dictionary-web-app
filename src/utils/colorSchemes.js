function getTheme() {
	return localStorage.getItem('theme');
}

function setTheme(theme) {
	localStorage.setItem('theme', theme);
	document.documentElement.setAttribute('data-theme', theme);
}

function checkThemeValidity(theme) {
	if (theme === 'light' || theme === 'dark') {
		return true;
	}
	return false;
}

export { getTheme, setTheme, checkThemeValidity };
