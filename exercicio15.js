/*Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.*/

const prompt = require("prompt-sync")();
let soma = 0;
let numeromedia;
let peso;


do {
    numeromedia = parseFloat(prompt("Informe um numero para calcular a média: "));
    peso = parseFloat(prompt("Informe o peso do número: "));
    soma = soma + (numeromedia * peso);
    peso += peso;
} while (numeromedia !== 0);

let resultado = parseFloat(soma / peso);

console.log("a média aritmética dos números é:" + resultado);