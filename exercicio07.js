/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require("prompt-sync")();

let numMacas = parseInt(prompt("Informe a quantidade de maças que deseja comprar: "));
let precoMaca = 0;
let total;

if (numMacas < 12) {
    precoMaca = 0.30;   
} else if (numMacas>= 12) {
    precoMaca = 0.25;    
}

total = numMacas * precoMaca; 
console.log("-------------------------------------------------------")
console.log("O Valor total de "+ numMacas +" maças é de RS: "+total);
