/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

const prompt =  require("prompt-sync")();

let ladoA = parseFloat(prompt("informe o lado A do triângulo: "));
let ladoB = parseFloat(prompt("Informe o lado B do triângulo: "));
let ladoC = parseFloat(prompt("Informe o lado C do triângulo: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA +ladoB) {
    if (ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoA !== ladoC || ladoA === ladoC && ladoB !== ladoC) {
        console.log("seu triângulo é um isósceles, pois possui dois lados iguais");
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        console.log("seu triângulo é um escaleno, pois possui todos lados diferentes");
    }else{
        console.log("seu triângulo é um equilátero, pois possui todos lados iguais");
    }
} else {
        console.log("Você não possui um triângulo!");
}