function setFont(font) {
	localStorage.setItem('font', font);
	document.documentElement.setAttribute('data-font', font);
}

export { setFont };
