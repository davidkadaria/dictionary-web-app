import { fontFamilyOptions } from '../constants';

function getFont() {
	return localStorage.getItem('font');
}

function setFont(font) {
	localStorage.setItem('font', font);
	document.documentElement.setAttribute('data-font', font);
}

function checkFontValidity(font) {
	var validFonts = [...fontFamilyOptions.map((font) => font.value)];
	return validFonts.includes(font);
}

export { getFont, setFont, checkFontValidity };
