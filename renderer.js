// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let celsiusInput = document.getElementById('celsius-input')
let fahrenheitInput = document.getElementById('fahrenheit-input')

document.getElementById('celsius-input').onchange = function() {
	let value = parseFloat(this.value)
	if(isNaN(value)) {
		this.value = value = 0
	}
	fahrenheitInput.value = Number((value * 1.8 + 32).toFixed(2))
}

document.getElementById('fahrenheit-input').onchange = function() {
	let value = parseFloat(this.value)
	if(isNaN(value)) {
		this.value = value = 0
	}
	celsiusInput.value = Number((( value - 32) * 0.56).toFixed(2))
}
