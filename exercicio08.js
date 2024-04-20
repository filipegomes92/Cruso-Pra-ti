/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Informe o primeiro n°:")); 
let num2 = parseFloat(prompt("Informe o segundo n°.:"));

if (num1 > num2) {
    console.log(num2);
    console.log(num1);
} else if(num2 > num1){
    console.log(num1);
    console.log(num2);
}