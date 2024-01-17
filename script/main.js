
const calculater = (value) => {
	memory.push(value)
	console.log(memory)
}

let memory = []
let calculationString = "";
let calculationWindow = document.querySelector('#calculation-window')
let calculatorButtons = document.querySelectorAll('button');

[...calculatorButtons].forEach((element) => {
	element.addEventListener('click', () => {
		(isNaN(parseInt(element.dataset.value))) ? element.dataset.value : calculater(parseInt(element.dataset.value));
	});
});