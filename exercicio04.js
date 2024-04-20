/*Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).*/

const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Informe a primeira  nota da avaliação semestral: "));
let nota2 = parseFloat(prompt("Informe a segunda nota da avaliação semestral..: "));

let media = (nota1 + nota2) / 2;
console.log("-----------------------------------------------")
if (media>= 6.0) {
    console.log("PARABÉNS! Você foi aprovado");
    console.log("Sua média do semestre foi: "+media);
} else {
    console.log("Sua média do semestre foi: "+media);
}