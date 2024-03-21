function checkThemeValidity(theme) {
	if (theme === 'light' || theme === 'dark') {
		return true;
	}
	return false;
}

export default checkThemeValidity;
