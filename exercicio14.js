/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const prompt = require("prompt-sync")();

let numero = 0.0; 
let contador = 0.0;
let soma = 0.0;

do {
    numero = parseFloat(prompt("informe um número decimal: "));
    soma += numero;
    contador++
} while (numero !==0);

let media = soma / contador;

console.log("-----------------------------------");
console.log("A média dos números informada é: "+ media);