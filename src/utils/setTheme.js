function setTheme(theme) {
	localStorage.setItem('theme', theme);
	document.documentElement.setAttribute('data-theme', theme);
}

export { setTheme };
