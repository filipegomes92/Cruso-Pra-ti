//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
//valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")();

let tempCelsius = parseInt(prompt("Informe a temperatura em Celsius: "));
console.log("------------------------------------------------");
let tempFahrenheit = (tempCelsius * 1.8) + 32;

console.log("A Temperatura "+tempCelsius+"°C em Fahrenheit é: "+tempFahrenheit+"°F");