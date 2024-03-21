function checkFontValidity(font) {
	var validFonts = ['sans-serif', 'serif', 'monospace'];
	return validFonts.includes(font);
}

export { checkFontValidity };
