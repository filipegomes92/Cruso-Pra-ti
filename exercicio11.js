/*Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.*/

const prompt = require("prompt-sync")();

let num = 0;

while (num >= 0 && num !== null) {
    num = parseInt(prompt("informe um numero inteiro:"));
    if (num < 0 || num === null) {
        break;
    }else{
        if (num % 2 === 0) {
            console.log("O número "+num+" é par!");
        } else {
            console.log("O número "+num+" é ímpar!");
        }
    }
    
}