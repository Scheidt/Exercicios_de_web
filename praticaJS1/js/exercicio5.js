function convertCelciusToFahrenheit(celcius) {
	//edite esta função
	//note que você já está recebendo o valor em celcius como parâmetro desta função
	fahrenheit = (celcius * 9 / 5) + 32
	return fahrenheit
}





// -- Não edite abaixo!

function conversaoCtoF() {
	let textCelcius = document.getElementById("celciusText")
	let textFahrenheit = document.getElementById("resultFahrenheit")
	textFahrenheit.textContent = convertCelciusToFahrenheit(textCelcius.value) + 
								 "ºF"
}