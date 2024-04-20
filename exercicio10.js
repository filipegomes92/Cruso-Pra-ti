//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Informe um numero inteiro: "));

for (let index = 0; index < 10 ; index++){
    console.log( numero);
}