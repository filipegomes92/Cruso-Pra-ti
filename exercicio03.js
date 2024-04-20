//Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
/*● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.*/

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Informe o primeiro n° inteiro: "));
let num2 = parseInt(prompt("Informe o segundo n° inteiro.: "));
let num3 = parseInt(prompt("Informe o terceiro n° inteiro: "));
let num4 = parseInt(prompt("Informe o quarto n° inteiro..: "));

num4 = num1 + num2 +num3;
num1 += 25;
num2 *= 3;
num3 = parseFloat(num3 * 0.12);

console.log("----------------------------------------------------")

console.log("Primeiro n°..: "+num1);
console.log("Segundo n°...: "+num2);
console.log("Terceiro n°..: "+num3);
console.log("Quarto n°....: "+num4);