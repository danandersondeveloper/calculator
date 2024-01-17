const clearCalculator = () => {
	calculationString = '';
	calculationWindow.value = '';
}

const clearWindow = () => {
	calculationWindow.value = '';
}

const getCalulation = () => {
	 return eval(calculationString)
}

let calculationString = ''
let calculationWindow = document.querySelector('#calculation-window')
let calculatorButtons = document.querySelectorAll('button');

[...calculatorButtons].forEach((element) => {
	element.addEventListener('click', () => {
		if (element.dataset.value == 'clear') {
			clearCalculator();
		} else {
			if (element.dataset.value == '=') {
				clearWindow();
				calculationWindow.value = getCalulation()
			} else {
				calculationString += element.dataset.value;
				calculationWindow.value = calculationString;
			}
		}
	});
});