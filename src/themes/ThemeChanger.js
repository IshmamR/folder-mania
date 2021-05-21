const lightObj = {
	'--body-bg-color': '#FFFFFF',
	'--font': "'Work Sans', sans-serif",
	'--rounded': '5px',
	'--nav-bg': '#3B82F6',
	'--main-border-color': 'transparent',
	'--folder-color': '#FCD34D',
	'--plus-color': '#2563EB',
	'--tree-line-color': '#212121',
	'--trash-color': '#F11628',
	'--text-red': '#FF0C12',
	'--text-primary': '#010101',
	'--form-bg-dark': 'rgba(250, 250, 250, 0.9)',
	'--form-border': '#60A5FA',
	'--form-input-bg': 'rgba(255, 255, 255, 0.9)',
	'--form-input-color': '#1D4ED8',
	'--btn-green': '#7FFF00',
	'--btn-red': '#EF4444'
}
const darkObj = {
	'--body-bg-color': '#000000',
	'--font': "'Roboto Mono', monospace",
	'--rounded': '0',
	'--nav-bg': '#7C3AED',
	'--main-border-color': '#8F00F2',
	'--folder-color': '#FDD404',
	'--plus-color': '#5CFF00',
	'--tree-line-color': '#38CAF6',
	'--trash-color': '#FD0100',
	'--text-red': '#FF0C12',
	'--text-primary': '#FFFFFF',
	'--form-bg-dark': 'rgba(100, 100, 110, 0.9)',
	'--form-border': '#54e346',
	'--form-input-bg': 'rgba(10, 10, 10, 0.7)',
	'--form-input-color': '#38CAF6',
	'--btn-green': '#79d70f',
	'--btn-red': '#e40017'
}

export const changeThemeToDark = () => {
	for(let prop in darkObj) {
		document.documentElement.style.setProperty(prop, darkObj[prop]);
	}
	// console.log('dark');
}

export const changeThemeToLight = () => {
	for(let prop in lightObj) {
		document.documentElement.style.setProperty(prop, lightObj[prop]);
	}
	// console.log('light');
}

const theme = 'hello';

export default theme;